# 🏡 AyEstate Frontend Implementation (cyshield-task)

## 🌟 Overview

This repository contains the frontend implementation for **AyEstate**, a modern real estate platform. The project aims to deliver a pixel-perfect, highly responsive, and performant single-page website based on a provided design flow. The entire site is built as a **Static Site Generated (SSG)** application using Next.js to ensure fast load times and excellent SEO performance.

## ✨ Features

-   **Full Home Page Implementation:** All major sections of the homepage are implemented (Hero, Services Introduction, Innovative CTA, Featured Listings, Testimonials, FAQ, and Footer).
-   **Pixel-Perfect Responsiveness:** The design is fully responsive, supporting both **Desktop** (e.g., Footer 5-column grid) and **Mobile** (e.g., Footer 2x2 grid).
-   **Custom Styling:** Uses a custom Tailwind CSS config for colors (Primary Green, Accent Orange/Red) and typography (Sora, Playball).
-   **Server Component Architecture:** Built using Next.js App Router, prioritizing Server Components for performance and reduced bundle size.

## 🛠️ Tech Stack

| Technology       | Version   | Description                         |
| ---------------- | --------- | ----------------------------------- |
| **Next.js**      | `^13.5.6` | React framework for SSG and routing |
| **React**        | `^18.3.1` | UI library                          |
| **Tailwind CSS** | `^3.4.7`  | Utility-first styling framework     |
| **Heroicons**    | `^2.2.0`  | Icons used across the UI            |

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed.

### Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/OmarRehan777/cyshield-task.git cyshield-task
    cd cyshield-task

    ```

2. **Install dependencies:**

```
npm install
Running Locally

```

3. **To start the development server:**

```

npm run dev

```

4. **The app will be available at:**

```
http://localhost:3000
```

**📦 Building for Production (SSG)**

**To generate an optimized static build:**

```
npm run build
```

This will create the production-ready SSG output.

**🌐 Deployment**
The project supports Static Site Generation, so it can be deployed easily to platforms such as:

Vercel

Netlify

AWS S3

Cloudflare Pages

**Continuous Deployment (CD)**
Once linked to Vercel or Netlify:

Every push to the main branch triggers an automatic build + deployment.

**📁 Project Structure (Summary)**
app/ – App Router root and main server components

components/layouts/ – Layout components

components/sections/ – All UI sections (hero, services, featured listings, etc.)

tailwind.config.js – Custom colors + typography setup

**✍️ Author**
Omar Rehan
Role: Software Engineer (MERN Stack Focus)
LinkedIn: https://www.linkedin.com/in/omarrehan/
