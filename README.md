# 🚀 React + TypeScript + TailwindCSS Template

A clean, modern, and customizable **React + TypeScript + TailwindCSS** starter — perfect for personal portfolios, blogs, or multi-page websites.  
Designed for **fast development, scalability, and easy customization**.

---

## 📁 Folder Structure

```
├── public/
│   └── images/
│       ├── logo.png
│       └── profile.png
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── blogData.ts
│   │
│   ├── pages/
│   │   ├── Homepage.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── NotFound.tsx
│   │   └── App.tsx
│   │
│   ├── index.css
│   ├── main.tsx
│   └── ...
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-typescript-tailwind-template.git
cd react-typescript-tailwind-template
```

---

### 2. Install Dependencies

Make sure you have **Node.js (v16 or higher)** installed, then run:

```bash
npm install
```

---

### 3. Start the Development Server

```bash
npm run dev
```

Your app will be live at **http://localhost:5173**

---

## Styling with TailwindCSS

This template is preconfigured with **TailwindCSS**.

You can customize styles in `index.css` → for global styles, colors, fonts, spacing, etc.

Example usage:

```tsx
<div className="flex min-h-screen items-center justify-center bg-gray-100">
  <h1 className="text-3xl font-bold text-blue-600">Hello, World!</h1>
</div>
```

---

## Components

| Component    | Description                  |
| ------------ | ---------------------------- |
| `Header.tsx` | Navigation bar for all pages |
| `Footer.tsx` | Footer with credits or links |

---

## Pages Overview

| Page           | Path        | Description                 |
| -------------- | ----------- | --------------------------- |
| `Homepage.tsx` | `/`         | Hero section + introduction |
| `About.tsx`    | `/about`    | About section               |
| `Projects.tsx` | `/projects` | Portfolio projects          |
| `Blog.tsx`     | `/blog`     | Blog list                   |
| `BlogPost.tsx` | `/blog/:id` | Individual blog post        |
| `Gallery.tsx`  | `/gallery`  | Image gallery               |
| `Contact.tsx`  | `/contact`  | Contact form/info           |
| `NotFound.tsx` | `*`         | 404 page                    |

> Routing is handled using **React Router DOM**.

---

## Data Management

Example file:  
`src/data/blogData.ts`

Stores blog post data used by `Blog.tsx` and `BlogPost.tsx`.

```ts
export const blogData = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2025-01-01",
    content: "This is an example of a blog post.",
  },
];

You can easily **add, remove, or update** your own posts here.

```

---

## Build for Production

To build and optimize your project:

```bash
npm run build
```

This creates a `/dist` folder with production-ready files.

Preview your production build locally:

```bash
npm run preview
```

---

## Tech Stack

| Tool                      | Description                           |
| ------------------------- | ------------------------------------- |
| ⚛️ **React + TypeScript** | Component-based UI with static typing |
| 💨 **TailwindCSS**        | Utility-first styling                 |
| ⚙️ **Vite**               | Fast dev server + bundler             |
| 🧭 **React Router DOM**   | Client-side routing                   |
| 📦 **ESLint + Prettier**  | Code linting & formatting             |

---

## Suggested Commands

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint                |
| `npm run format`  | Format code with Prettier |

---

## Customization

🖼️ **Visuals**

- Replace images in `public/images/`
- Update the logo (`logo.png`) and profile photo (`profile.png`)

🧾 **Content**

- Edit text and sections in `Homepage.tsx`, `About.tsx`, etc.
- Modify `blogData.ts` to use your real posts or portfolio items

🎨 **Styling**

- Update colors, fonts, or shadows in `index.css`

---

## 🛠 Environment Requirements

| Tool       | Version    |
| ---------- | ---------- |
| Node.js    | `>=16.0.0` |
| npm        | `>=8.0.0`  |
| TypeScript | `>=5.0.0`  |
| React      | `>=18.0.0` |

---

## 📜 License

Licensed under the **MIT License** — free to use and modify.

---

## 💬 Author

**Kim Angelo Gagui**  
[Portfolio] (https://kimangelogagui-portfolio.vercel.app/)  
[GitHub](https://github.com/kimangelogagui)  
[Email] (gaguikimangelo@gmail.com)
