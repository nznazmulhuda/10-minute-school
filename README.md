# 🚀 10 Minute School | Frontend Engineer Assessment

A responsive landing page built using **Next.js** and **TypeScript** as part of a Frontend Engineer assessment for **10 Minute School**. The page fetches dynamic content from a public API and renders it in a clean, performant, and accessible interface.

---

## 🧩 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component:** Shadcn UI
- **Data Fetching:** Fetch API
- **Deployment:** Vercel, Docker

---

## 📌 Features

- Fully responsive and accessible layout
- API integration with dynamic data rendering
- Modular, reusable components
- Clean folder structure following best practices
- **Dockerized for containerized deployment and easy production setup**

---

## 📂 Project Structure

```bash

├── src/
│   ├── app/           # Next.js app router pages and layouts
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── lib/           # Library utilities and helpers
│   ├── provider/      # Custom providers
│   ├── types/         # TypeScript type definitions
├── public/            # Static assets (images, fonts, etc.)
├── Dockerfile         # Docker container build instructions
├── docker-compose.yml # Docker compose service definition
└── README.md          # Project documentation
```

## 🛠️ Setup & Installation

### 1. Clone the repo

`git clone https://github.com/nznazmulhuda/10-minute-school.git`

### 2. Navigate to the project folder

`cd 10ms-frontend-school`

### 3. Install dependencies

`pnpm install`

### 4. Run the development server

`pnpm run dev`

## 🐳 Running with Docker

You can run the project in a containerized environment using Docker:

### Build the Docker image

`docker-compose build`

### Start the container

`docker-compose up -d`

## 🌐 Live Demo

[View the live site here](https://10-minute-school-frontend.vercel.app/)
