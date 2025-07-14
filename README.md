# 🚀 NASA Images Explorer

A simple and modern Vue 3 web app to explore NASA public images. Built with **Vue 3 + TanStack Query (vue-query)** and deployed on Vercel.

👉 **Live Demo:** [https://nasa-images-nine.vercel.app/](https://nasa-images-nine.vercel.app/)

---

## ✨ Features

- 🔎 **Search** NASA images by keyword
- 📄 **Pagination** with Next and Previous buttons
- 🖼️ **Responsive Gallery** with image cards showing title, description, and keywords
- ⚡ **Optimized API Fetching** with caching via TanStack Query
- 🖥️ **Responsive Design** for desktop and mobile

---

## 🛠️ Tech Stack

- [Vue 3 (Composition API)](https://vuejs.org/)
- [TanStack Query (Vue Query)](https://tanstack.com/query/latest/docs/framework/vue/overview)
- [NASA Open API - Images Search](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)
- [Vercel](https://vercel.com/) for deployment

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/nasa_images.git
cd nasa_images
```

### Install dependencies

```bash
yarn install
```

### Run the project in development mode
```bash
yarn serve
```

### Build for production
```bash
yarn build
```

### Lint and fix files
```bash
yarn lint
```

## 📁 Project Structure
```ts
├── src/
│   ├── components/        # Vue components (cards, form)
│   ├── composables/       # Composables with vue-query logic
│   ├── services/          # API service to fetch NASA images
│   └── App.vue            # Main application component
├── public/
│   └── preview.png        # Screenshot preview for README
└── README.md
```

## 📢 About
This project was created as part of my portfolio to practice Vue 3 with the TanStack Query ecosystem, consume a public API, and deliver a fast and user-friendly interface.
