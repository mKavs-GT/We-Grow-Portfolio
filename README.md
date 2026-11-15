# WeGrow E-Commerce Portfolio

An e-commerce prototype website for **WeGrow** built with semantic HTML5, CSS3, and vanilla JavaScript. Features dynamic product carousels (Swiper.js), search dropdown filtering, cart management with gift unlocking progress, authentication modal simulation, and product detail views.

## 🚀 Live Deployment on Vercel

This repository is pre-configured for instant deployment on [Vercel](https://vercel.com):

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import this repository (`We-Grow-Portfolio`).
3. Framework Preset: **Other** (Static HTML).
4. Root Directory: `./`
5. Click **Deploy**.

The `vercel.json` file is configured with clean URLs and optimized static asset caching headers.

## 📁 Project Structure

```text
├── assets/                  # Images, banners, brand assets, icons
├── css/
│   └── styles.css           # Global stylesheet and responsive styles
├── js/
│   └── main.js              # Interactive logic (cart, modal, carousel, search)
├── .gitignore
├── .nojekyll                # GitHub Pages Jekyll bypass
├── about.html               # About Us page
├── all-products.html        # Product catalog page
├── index.html               # Homepage & storefront
├── product-detail.html      # Product detail view
├── vercel.json              # Vercel deployment configuration
└── README.md
```

## 💻 Local Preview

You can open `index.html` directly in any web browser, or serve it locally using any static HTTP server:

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```
