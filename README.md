# Luke Frohling - AI Portfolio

This repository contains the source code for my personal portfolio website, featuring applied AI prototypes, data pipelines, and a custom automated deployment system.

## Project Overview

This website is a React-based SPA (Single-Page Application) built with Vite and TypeScript. It showcases my work as a multidisciplinary AI developer.

### Key Features
- **Applied AI Prototypes:** Demonstrates functional RAG systems, autonomous ETL agents, and AI support triage tools.
- **Automated Deployment:** Custom Node.js-based deployment framework using FTPS for seamless production updates.
- **Modular Architecture:** Clean component-based design for maintainability and scalability.

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **Backend/Deployment:** Node.js, Express.js, `basic-ftp`
- **AI Integration:** `@google/genai` (Gemini SDK)

## Deployment

The project includes an automated deployment script located in `scripts/deploy.js`.

### Configuration
To configure the deployment, navigate to the `/settings` route on the website once running to enter your FTP credentials. These are securely saved to `ftp-config.json` and `ftp-credentials.enc` on the server backend to ensure automatic updates.

### Manual Usage
To run the deployment manually:
```bash
node scripts/deploy.js --deploy
```

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
