# MultiMIMS: Nigeria Higher Education Directory

**MultiMIMS** is a modern, data-driven web application that serves as a centralized directory for higher education institutions in Nigeria. Built with a decoupled architecture, it leverages **React** for a fast user interface and **Contentful** as a headless CMS for robust data management.

## 🚀 Live Links
- **Production Domain:** [multimims.com](https://multimims.com)
- **Netlify Deployment:** [wonderful-goodall-2e37c5.netlify.app](https://wonderful-goodall-2e37c5.netlify.app)

---

## 🛠 Tech Stack
* **Frontend:** [React.js](https://reactjs.org/)
* **CMS / Datastore:** [Contentful](https://www.contentful.com/)
* **Hosting & CI/CD:** [Netlify](https://www.netlify.com/)
* **DNS:** Netlify DNS (SSL via Let's Encrypt)

---

## 📐 Architecture Overview
The application follows a **Jamstack** pattern:
1.  **Source Code:** Managed in GitHub and connected to Netlify via webhooks.
2.  **Continuous Deployment:** Every push to the `main` branch triggers a build on Netlify.
3.  **Headless Data:** The React frontend fetches school data (images, descriptions, etc.) dynamically from Contentful using the Content Delivery API.
4.  **Global Delivery:** The built site is served via Netlify's Edge Network for high performance.

---

## ⚙️ Environment Variables
To connect the frontend to the Contentful datastore, you must configure the following environment variables in your local `.env` file and your Netlify build settings:

| Variable | Description |
| :--- | :--- |
| `REACT_APP_ACCESS_TOKEN` | Your Contentful Content Delivery API (CDA) access token. |
| `REACT_APP_API_SPACE` | Your unique Contentful Space ID. |

---

## 💻 Local Development

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Setup Instructions
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/wordpressperson/schoolsdirectory.git](https://github.com/wordpressperson/schoolsdirectory.git)
    cd schoolsdirectory
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env.local` file in the root directory and add your credentials:
    ```text
    REACT_APP_ACCESS_TOKEN=your_token_here
    REACT_APP_API_SPACE=your_space_id_here
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

---

## 📝 Content Management
Since this application is "headless," schools are added, updated, or deleted through the [Contentful Dashboard](https://app.contentful.com/).
* **Schools:** Managed as individual entries in the Content Model.
* **Assets:** School logos and campus photos are stored in the Media section of Contentful.

---

## 📦 Deployment
This project is configured for automated deployment via **Netlify**. 
- To deploy changes, simply push your code to the `main` branch:
  ```bash
  git add .
  git commit -m "Update school directory logic"
  git push origin main

    Netlify will automatically detect the push, run the build command (npm run build), and deploy the new version to multimims.com.

## 📄 License
This project is for educational and directory purposes. All school-related information is provided as-is.
