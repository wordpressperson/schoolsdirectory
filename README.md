MultiMIMS: Nigeria Higher Education Directory

MultiMIMS is a modern, data-driven web application that serves as a centralized directory for higher education institutions in Nigeria. Built with a decoupled architecture, it leverages React for a fast user interface and Contentful as a headless CMS for robust data management.
🚀 Live Links

    Production Domain: multimims.com

    Netlify Deployment: wonderful-goodall-2e37c5.netlify.app

🛠 Tech Stack

    Frontend: React.js

    CMS / Datastore: Contentful

    Hosting & CI/CD: Netlify

    DNS: Netlify DNS (SSL via Let's Encrypt)

📐 Architecture Overview

The application follows a Jamstack pattern:

    Source Code: Managed in GitHub and connected to Netlify via webhooks.

    Continuous Deployment: Every push to the main branch triggers a build on Netlify.

    Headless Data: The React frontend fetches school data (images, descriptions, etc.) dynamically from Contentful using the Content Delivery API.

    Global Delivery: The built site is served via Netlify's Edge Network for high performance.

⚙️ Environment Variables

To connect the frontend to the Contentful datastore, you must configure the following environment variables in your local .env file and your Netlify build settings:
Variable	Description
REACT_APP_ACCESS_TOKEN	Your Contentful Content Delivery API (CDA) access token.
REACT_APP_API_SPACE	Your unique Contentful Space ID.
💻 Local Development
Prerequisites

    Node.js (Latest LTS recommended)

    npm or yarn

Setup Instructions

    Clone the repository:
    Bash

    git clone https://github.com/wordpressperson/schoolsdirectory.git
    cd schoolsdirectory

    Install dependencies:
    Bash

    npm install

    Configure environment variables:
    Create a .env.local file in the root directory and add your credentials:
    Plaintext

    REACT_APP_ACCESS_TOKEN=your_token_here
    REACT_APP_API_SPACE=your_space_id_here

    Run the application:
    Bash

    npm start

    The app will be available at http://localhost:3000.

📝 Content Management

Since this application is "headless," schools are added, updated, or deleted through the Contentful Dashboard.

    Schools: Managed as individual entries in the Content Model.

    Assets: School logos and campus photos are stored in the Media section of Contentful.

📦 Deployment

This project is configured for automated deployment via Netlify.

    To deploy changes, simply push your code to the main branch:
    Bash

    git add .
    git commit -m "Update school directory logic"
    git push origin main

    Netlify will automatically detect the push, run the build command (npm run build), and deploy the new version to multimims.com.

📄 License

This project is for educational and directory purposes. All school-related information is provided as-is.
