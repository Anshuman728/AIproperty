<div align="center">
  <img src="./frontend/src/assets/home-regular-24.png" alt="UrbanSquare Logo" width="150" />
  
  # UrbanSquare

### Premium Real Estate Platform with AI-Powered Insights & Seamless Animations

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>
<>
<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#app-structure">App Structure</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#animations">Animations</a> •
  <a href="#contributing">Contributing</a>
</p>

<div align="center">
  <img src="https://ik.imagekit.io/xh3awoalr/Property/github/animated-demo.gif" alt="UrbanSquare Demo" width="80%" />
</div>

## 📋 Overview

UrbanSquare is a comprehensive real estate platform built with the MERN stack that provides advanced property search capabilities, AI-powered market insights, and a complete property management system. The platform helps users find their ideal properties while providing valuable investment analysis through cutting-edge AI technology.

With modern UI animations and transitions powered by Framer Motion, UrbanSquare delivers a premium user experience that feels responsive, intuitive, and delightful to use.

## ✨ Features

<details>
  <summary><b>🏠 User Features</b></summary>
  <br>
  
  - **🔍 Advanced Property Search** — Filter properties by location, price range, amenities, and property type
  - **🏙️ Virtual Property Tours** — Detailed property listings with high-quality images and comprehensive information
  - **🔐 User Authentication** — Secure registration and login with JWT
  - **📅 Appointment Scheduling** — Book and manage property viewings with email notifications
  - **❤️ Favorites System** — Save properties for later viewing with animated interactions
  - **📱 Responsive Design** — Fully optimized for all devices with smooth transitions between viewport sizes
</details>

<details>
  <summary><b>🤖 AI-Powered Features</b></summary>
  <br>

- **🎯 Smart Property Recommendations** — AI-powered search that finds properties matching specific requirements
- **📊 Location Trend Analysis** — Visualizes market trends, rental yields, and property appreciation rates
- **💰 Investment Insights** — AI-generated recommendations for different areas with dynamic data visualization
- **⚡ Real-time Property Analysis** — Backend services fetch and analyze property data with animated chart transitions
</details>

<details>
  <summary><b>👩‍💼 Admin Features</b></summary>
  <br>

- **📈 Dashboard Analytics** — Comprehensive statistics on properties, users, and platform metrics with animated charts
- **🏘️ Property Management** — Add, edit, and delete property listings with smooth CRUD transitions
- **🗓️ Appointment Management** — Handle viewing requests and update appointment status with visual feedback
- **👥 User Management** — Track user activity and manage accounts with interactive data tables
</details>

<details>
  <summary><b>🎭 Animation Features</b></summary>
  <br>

- **✨ Micro-interactions** — Subtle feedback animations for user actions
- **🔄 Page Transitions** — Smooth transitions between pages for a native app-like feel
- **📊 Chart Animations** — Data visualization with progressive reveal animations
- **🖼️ Image Gallery** — Animated property image carousels with zoom capabilities
- **🔔 Notification System** — Animated toast notifications for user feedback
- **🌓 Theme Switching** — Animated dark/light mode transitions
</details>

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios)
![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=flat-square&logo=react)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens)
![Nodemailer](https://img.shields.io/badge/Nodemailer-30B980?style=flat-square&logo=nodemailer)

### AI Integration

![Azure AI](https://img.shields.io/badge/Azure_AI-0078D4?style=flat-square&logo=microsoftazure)
![FirecrawlJS](https://img.shields.io/badge/FirecrawlJS-FFA500?style=flat-square)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or Atlas)
- API keys for AI services

### Installation

<details>
<summary><b>Step 1: Clone the repository</b></summary>

```bash
git clone https://github.com/vishdadhich092004/urban-square.git
cd Real-Estate-Website
```

</details>

<details>
<summary><b>Step 2: Setup environment variables</b></summary>

Create `.env` files in the backend, frontend, and admin directories as follows:

**Backend (.env)**

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=your_email_for_sending_notifications
PASSWORD=your_email_password
AZURE_API_KEY=your_azure_ai_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
```

**Frontend (.env.local)**

```
VITE_BACKEND_URL=http://localhost:4000
```

**Admin (.env.local)**

```
VITE_BACKEND_URL=http://localhost:4000
```

</details>

<details>
<summary><b>Step 3: Install dependencies</b></summary>

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install

# Admin dependencies
cd ../admin
npm install
```

</details>

<details>
<summary><b>Step 4: Run the development servers</b></summary>

```bash
# Run backend server
cd backend
npm run dev

# Run frontend app (in a new terminal)
cd frontend
npm run dev

# Run admin app (in a new terminal)
cd admin
npm run dev
```

</details>

<details>
<summary><b>Step 5: Access the applications</b></summary>

- 🌐 Frontend: [http://localhost:5173](http://localhost:5173)
- 👩‍💼 Admin Panel: [http://localhost:5174](http://localhost:5174)
- ⚙️ Backend API: [http://localhost:4000](http://localhost:4000)
</details>

<details>
<summary><b>Step 6: Docker support (optional)</b></summary>

```bash
# Run with Docker Compose
docker-compose up
```

This will start the backend service. You can modify the docker-compose.yml file to include frontend and admin services as needed.

</details>

## 📱 App Structure

```
project/
├── admin/                 # Admin dashboard React app
│   ├── src/               # Admin source code
│   │   ├── components/    # UI components with animations
│   │   └── pages/         # Admin dashboard pages
├── backend/               # Express server and API
│   ├── config/            # Server configuration
│   ├── controller/        # Request handlers
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── services/          # External service integrations
│   └── server.js          # Main server file
└── frontend/              # User-facing React app
    ├── public/            # Static assets
    └── src/
        ├── assets/        # Images and static resources
        ├── components/    # Reusable UI components with animations
        ├── context/       # React context providers
        ├── pages/         # Main page components
        ├── animations/    # Animation utilities and configurations
        └── utils/         # Helper functions
```

## 🖼️ Screenshots

### Home Page with Animated Elements

<img src="https://ik.imagekit.io/xh3awoalr/Property/github/Screenshot%202025-03-07%20at%2011.28.47%E2%80%AFAM.png?updatedAt=1741327228785" alt="Home Page" width="100%" />

### Property Listings with Smooth Transitions

<img src="https://ik.imagekit.io/xh3awoalr/Property/github/Screenshot%202025-03-07%20at%2011.28.54%E2%80%AFAM.png?updatedAt=1741327229157" alt="Property Listings Page" width="100%" />

### Property Details with Interactive Gallery

<img src="https://ik.imagekit.io/xh3awoalr/Property/github/Screenshot%202025-03-07%20at%2011.29.18%E2%80%AFAM.png?updatedAt=1741327228975" alt="Property Details Page" width="100%" />

### AI-Powered Property Analysis with Animated Charts

<img src="https://ik.imagekit.io/xh3awoalr/Property/github/Screenshot%202025-03-11%20at%204.01.34%E2%80%AFPM.png?updatedAt=1741689154739" alt="AI Property Analysis" width="100%" />

### AI-Powered Location Trends with Data Visualization

<img src="https://ik.imagekit.io/xh3awoalr/Property/github/Screenshot%202025-03-11%20at%204.01.51%E2%80%AFPM.png?updatedAt=1741689154924" alt="AI Location Trends" width="100%" />

## 🎬 Animations

UrbanSquare features a variety of carefully designed animations that enhance the user experience without being distracting:

### Page Transitions

- Smooth fade transitions between pages
- Page elements that animate into position on load
- Exit animations for a polished feel

### UI Micro-interactions

- Button hover and active states
- Form field focus animations
- Loading indicators and spinners

### Content Animations

- Property card reveal animations
- Staggered animation for list items
- Parallax scrolling effects on the home page

### Data Visualizations

- Progressive chart animations
- Tooltip reveal animations
- Counter animations for statistics

All animations are implemented using Framer Motion with performance optimization in mind, ensuring smooth experiences even on mobile devices.

## 🤝 Contributing

<details>
<summary><b>How to contribute</b></summary>
<br>

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

</details>

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

<div align="center">
  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-43853D?style=for-the-badge)](https://lucide.dev/)
[![Azure AI](https://img.shields.io/badge/Azure_AI-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/en-us/services/cognitive-services/ai-services/)
  
</div>

---

<div align="center">
  <p>© 2025 UrbanSquare. All Rights Reserved.</p>
</div>
