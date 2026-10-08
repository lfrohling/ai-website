import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const startTime = Date.now();
    const currentPath = location.pathname;

    const handleExternalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href) {
        try {
          // Check if hostname is different from current page host
          const isExternal = anchor.hostname && anchor.hostname !== window.location.hostname;
          if (isExternal) {
            const clicks = parseInt(sessionStorage.getItem('external_clicks') || '0', 10);
            sessionStorage.setItem('external_clicks', (clicks + 1).toString());

            // Track detailed click information (URL, text, timestamp, from page)
            const clickDetail = {
              url: anchor.href,
              text: (anchor.innerText || anchor.textContent || 'Unnamed Link').trim().substring(0, 80),
              timestamp: new Date().toLocaleTimeString(),
              page: currentPath
            };
            const existingClicks = JSON.parse(sessionStorage.getItem('external_clicks_detail') || '[]');
            existingClicks.push(clickDetail);
            sessionStorage.setItem('external_clicks_detail', JSON.stringify(existingClicks));
          }
        } catch (err) {
          // Ignore
        }
      }
    };

    document.addEventListener('click', handleExternalClick);

    return () => {
      document.removeEventListener('click', handleExternalClick);
      const durationSeconds = Math.round((Date.now() - startTime) / 1000);
      if (durationSeconds > 0) {
        try {
          const pageTimes = JSON.parse(sessionStorage.getItem('page_times') || '{}');
          pageTimes[currentPath] = (pageTimes[currentPath] || 0) + durationSeconds;
          sessionStorage.setItem('page_times', JSON.stringify(pageTimes));
        } catch (err) {
          // Ignore
        }
      }
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
