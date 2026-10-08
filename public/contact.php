<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Honeypot bot protection (spam trap)
if (!empty($_POST["hpCompany"])) {
    // Silently pretend to succeed to trick the spam bot, but do not send the email
    echo json_encode(["success" => true, "message" => "Spam intercepted"]);
    exit;
}

// Sanitize inputs
$name = strip_tags(trim($_POST["name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
$inquiryType = strip_tags(trim($_POST["inquiryType"] ?? "Other"));
$message = strip_tags(trim($_POST["message"] ?? ""));

// Validate required fields
if (empty($name) || !$email || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Please fill in all required fields."]);
    exit;
}

// Recipient email
$to = "contact@lukefrohling.com";
$subject = "New Portfolio Enquiry: " . $inquiryType . " from " . $name;

// Capture server-side visitor IP Address
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip_list = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ip = trim($ip_list[0]);
} elseif (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
}

$geo_city = "Unknown";
$geo_region = "Unknown";
$geo_country = "Unknown";
$geo_zip = "Unknown";
$geo_isp = "Unknown";
$geo_org = "Unknown";
$geo_lat = "Unknown";
$geo_lon = "Unknown";
$geo_as = "Unknown";

// Query free IP Geolocation service ip-api (2 second timeout to avoid thread block)
if ($ip && filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://ip-api.com/json/" . urlencode($ip));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 2);
    $response = curl_exec($ch);
    curl_close($ch);
    
    if ($response) {
        $data = json_decode($response, true);
        if ($data && ($data['status'] ?? '') === 'success') {
            $geo_city = $data['city'] ?? "Unknown";
            $geo_region = $data['regionName'] ?? "Unknown";
            $geo_country = $data['country'] ?? "Unknown";
            $geo_zip = $data['zip'] ?? "Unknown";
            $geo_isp = $data['isp'] ?? "Unknown";
            $geo_org = $data['org'] ?? "Unknown";
            $geo_lat = $data['lat'] ?? "Unknown";
            $geo_lon = $data['lon'] ?? "Unknown";
            $geo_as = $data['as'] ?? "Unknown";
        }
    }
}

// Parse client times spent
$page_times_text = "None tracked.";
$page_times_json = $_POST['page_times'] ?? '{}';
$page_times_arr = json_decode($page_times_json, true);
if (is_array($page_times_arr) && count($page_times_arr) > 0) {
    $page_times_lines = [];
    foreach ($page_times_arr as $path => $seconds) {
        $path_name = ($path === '/') ? 'Home' : strtoupper(ltrim($path, '/'));
        $mins = round($seconds / 60, 2);
        $page_times_lines[] = " - " . $path_name . " page: " . $seconds . " second(s) (~" . $mins . " minute(s))";
    }
    $page_times_text = implode("\n", $page_times_lines);
}

// Parse detailed external clicks
$clicks_text = "None recorded during this session.";
$clicks_json = $_POST['external_clicks_detail'] ?? '[]';
$clicks_arr = json_decode($clicks_json, true);
if (is_array($clicks_arr) && count($clicks_arr) > 0) {
    $clicks_lines = [];
    foreach ($clicks_arr as $index => $click) {
        $click_url = $click['url'] ?? 'Unknown URL';
        $click_text = $click['text'] ?? 'No Text';
        $click_time = $click['timestamp'] ?? 'Unknown';
        $click_page = $click['page'] ?? 'Unknown';
        $clicks_lines[] = " - Click " . ($index + 1) . ": Clicked link \"" . $click_text . "\" pointing to [" . $click_url . "] from parent page \"" . $click_page . "\" at browser local time " . $click_time . ". (Note: Browser security prevents tracking duration spent on the external site itself).";
    }
    $clicks_text = implode("\n", $clicks_lines);
}

// Parse client deduced browser/device properties
$client_info_json = $_POST['client_info'] ?? '{}';
$client = json_decode($client_info_json, true);

$user_agent = $client['userAgent'] ?? "Unknown";
$language = $client['language'] ?? "Unknown";
$languages = $client['languages'] ?? "Unknown";
$screen_res = $client['screenResolution'] ?? "Unknown";
$viewport = $client['viewportSize'] ?? "Unknown";
$dpr = $client['devicePixelRatio'] ?? "Unknown";
$timezone = $client['timezone'] ?? "Unknown";
$local_time = $client['localTime'] ?? "Unknown";
$referrer = $client['referrer'] ?? "Unknown";
$touch = $client['touchSupport'] ?? "Unknown";
$cores = $client['hardwareConcurrency'] ?? "Unknown";
$ram = $client['deviceMemory'] ?? "Unknown";
$online = $client['online'] ?? "Unknown";
$platform = $client['platform'] ?? "Unknown";

// Compile raw server request headers
$headers_arr = [];
foreach ($_SERVER as $key => $val) {
    if (strpos($key, 'HTTP_') === 0 || in_array($key, ['REMOTE_ADDR', 'REQUEST_URI', 'REQUEST_METHOD', 'QUERY_STRING', 'SERVER_PROTOCOL'])) {
        $headers_arr[] = $key . ": " . $val;
    }
}
$raw_server_headers = implode("\n", $headers_arr);

// References array to handle the 500-character line constraint
$references = [];
$ref_counter = 'A';

function format_field($label, $value, &$references, &$ref_counter) {
    $clean_value = strval($value);
    if (strlen($clean_value) > 500) {
        $ref_name = "Reference " . $ref_counter;
        $references[$ref_name] = $clean_value;
        $ref_counter++;
        return $label . ": [" . $ref_name . " appended at the end of this email - content length is " . strlen($clean_value) . " characters]";
    } else {
        return $label . ": " . $clean_value;
    }
}

// Construct highly detailed internal email for Luke
$body = "Dear Luke,\n\n" .
        "You have received a new contact message from your portfolio website.\n\n" .
        "==================================================\n" .
        "FORM SUBMISSION DETAILS\n" .
        "==================================================\n" .
        "Name: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Enquiry Type: " . $inquiryType . "\n\n" .
        "Message:\n" . $message . "\n\n" .
        "==================================================\n" .
        "VIEWER JOURNEY TRACKING STATISTICS\n" .
        "==================================================\n" .
        "Time spent on website sections:\n" . $page_times_text . "\n\n" .
        "External Link Clicks:\n" . $clicks_text . "\n\n" .
        "==================================================\n" .
        "DEDUCED VISITOR INFORMATION LOG (500-CHAR LIMIT SAFETY ENFORCED)\n" .
        "==================================================\n";

// Add visitor deduction log lines
$body .= format_field("IP Address", $ip, $references, $ref_counter) . "\n";
$body .= format_field("Reverse DNS Lookup", gethostbyaddr($ip), $references, $ref_counter) . "\n";
$body .= format_field("Geographical Country", $geo_country, $references, $ref_counter) . "\n";
$body .= format_field("Geographical Region / State", $geo_region, $references, $ref_counter) . "\n";
$body .= format_field("Geographical City", $geo_city, $references, $ref_counter) . "\n";
$body .= format_field("Postal / ZIP Code", $geo_zip, $references, $ref_counter) . "\n";
$body .= format_field("Approximate Latitude", $geo_lat, $references, $ref_counter) . "\n";
$body .= format_field("Approximate Longitude", $geo_lon, $references, $ref_counter) . "\n";
$body .= format_field("Internet Service Provider (ISP)", $geo_isp, $references, $ref_counter) . "\n";
$body .= format_field("Organization", $geo_org, $references, $ref_counter) . "\n";
$body .= format_field("Autonomous System Network (AS)", $geo_as, $references, $ref_counter) . "\n";
$body .= "\n-- Client-Side Deductions --\n";
$body .= format_field("Browser User Agent", $user_agent, $references, $ref_counter) . "\n";
$body .= format_field("Device Operating System Platform", $platform, $references, $ref_counter) . "\n";
$body .= format_field("Primary Language Setting", $language, $references, $ref_counter) . "\n";
$body .= format_field("Complete Language Accept List", $languages, $references, $ref_counter) . "\n";
$body .= format_field("Screen Resolution", $screen_res, $references, $ref_counter) . "\n";
$body .= format_field("Browser Viewport Size", $viewport, $references, $ref_counter) . "\n";
$body .= format_field("Device Pixel Ratio (DPR)", $dpr, $references, $ref_counter) . "\n";
$body .= format_field("System Timezone", $timezone, $references, $ref_counter) . "\n";
$body .= format_field("Device Local Clock Time", $local_time, $references, $ref_counter) . "\n";
$body .= format_field("Referrer Source URL", $referrer, $references, $ref_counter) . "\n";
$body .= format_field("Touch Screen Support", $touch, $references, $ref_counter) . "\n";
$body .= format_field("Logical CPU Cores", $cores, $references, $ref_counter) . "\n";
$body .= format_field("Approximate Device RAM (GB)", $ram, $references, $ref_counter) . "\n";
$body .= format_field("Browser Connection Status", $online, $references, $ref_counter) . "\n";
$body .= "\n-- Server-Side HTTP Headers & Data Payload --\n";
$body .= format_field("Raw Server Request Headers", $raw_server_headers, $references, $ref_counter) . "\n";
$body .= format_field("Raw Client Info JSON payload", $client_info_json, $references, $ref_counter) . "\n";
$body .= format_field("Raw External Clicks JSON payload", $clicks_json, $references, $ref_counter) . "\n";

// Append references if any exist
if (count($references) > 0) {
    $body .= "\n\n==================================================\n";
    $body .= "REFERENCE MATERIAL (DETAILS EXCEEDING 500 CHARACTERS)\n";
    $body .= "==================================================\n";
    foreach ($references as $ref_name => $ref_value) {
        $body .= "\n--- " . $ref_name . " ---\n" . $ref_value . "\n";
    }
}

// Envelope headers satisfying strict SPF/DKIM verification rules
$headers = "From: contact@lukefrohling.com\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send internal alert to Luke Frohling
if (mail($to, $subject, $body, $headers)) {
    
    // Construct auto-responder confirmation to the sender (NO tracking or deduced data leaks!)
    $confirm_subject = "Enquiry Received - Luke Frohling Portfolio";
    $confirm_body = "Hi " . $name . ",\n\n" .
                    "This is an automated confirmation to let you know that your message has been successfully received.\n\n" .
                    "Here is a copy of the details you submitted:\n" .
                    "--------------------------------------------------\n" .
                    "Name: " . $name . "\n" .
                    "Email: " . $email . "\n" .
                    "Enquiry Type: " . $inquiryType . "\n\n" .
                    "Message:\n" . $message . "\n" .
                    "--------------------------------------------------\n\n" .
                    "Thank you for reaching out. I will review your enquiry and respond within 24 hours.\n\n" .
                    "Best regards,\n" .
                    "Luke Frohling\n" .
                    "Applied AI & Prototypes Developer\n" .
                    "https://www.lukefrohling.com\n";

    $confirm_headers = "From: contact@lukefrohling.com\r\n" .
                       "Reply-To: contact@lukefrohling.com\r\n" .
                       "X-Mailer: PHP/" . phpversion();

    @mail($email, $confirm_subject, $confirm_body, $confirm_headers);

    echo json_encode(["success" => true]);
} else {
    // If mail fails, return failure
    http_response_code(500);
    echo json_encode(["error" => "Unable to send email. Please try again later."]);
}
?>
