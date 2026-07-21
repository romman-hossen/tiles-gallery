# Tiles Gallery

> A premium tile gallery web application to discover, explore, and showcase beautiful tile collections from artisan creators worldwide.


---

## 🌐 Live URL

🔗 **[https://tileverse.vercel.app](https://tileverse.vercel.app)**

---

## Project Purpose

TileGallery is a full-stack tile gallery platform built as an assignment project. It allows users to browse a curated collection of premium ceramic, marble, mosaic, and stone tiles. Users can view tile details, search and filter the gallery, create an account, and manage their profile — all in a sleek dark-themed interface.

---

## Key Features

- **Home Page** — Hero banner with animated tile background, scrolling marquee, and featured top-4 tiles
- **Tile Gallery** — Browse all 13+ tiles with search by name and category filtering
- **Tile Details** — Full detail view with specs, tags, creator info, and sticky image on desktop
- **Authentication** — Email/password login & registration + Google OAuth via BetterAuth
- **My Profile** — View and update name & profile photo with live avatar preview
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Loading Skeletons** — Skeleton UI on all data-fetching pages
- **404 Page** — Custom "This tile is missing" not-found page
- **Private Routes** — Middleware protects `/tile/[id]` and `/my-profile`

---

## 🛠️ Tech Stack & NPM Packages

| Package | Purpose |
|---|---|
| `next` | App Router framework |
| `tailwindcss` | Utility-first CSS styling |
| `@heroui/react` | UI component library (Button, Input, Avatar, Chip, Skeleton, Card) |
| `better-auth` | Authentication (email/password + Google OAuth) |
| `@better-auth/adapter-mongodb` | MongoDB adapter for BetterAuth |
| `mongoose` | MongoDB ODM |
| `animate.css` | CSS animation library for entrance effects |
| `json-server` | Mock REST API for tile data |
| `next/image` | Optimized image loading |

---

## 📁 Project Structure

```
tileverse/
├── app/
│   ├── (root)/
│   │   ├── page.jsx              # Home page
│   │   ├── all-tiles/
│   │   │   ├── page.jsx          # All tiles gallery
│   │   │   └── [id]/
│   │   │       ├── page.jsx      # Tile detail (private)
│   │   │       └── not-found.jsx
│   │   ├── my-profile/
│   │   │   ├── page.jsx          # User profile (private)
│   │   │   └── update/
│   │   │       └── page.jsx      # Update profile
│   │   ├── login/
│   │   │   └── page.jsx
│   │   └── register/
│   │       └── page.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── Marquee.jsx
│   │   ├── FeaturedTiles.jsx
│   │   └── TilesCard.jsx
│   ├── lib/
│   │   ├── auth.js               # BetterAuth config
│   │   ├── auth-client.js        # Client-side auth
│   │   ├── db.js                 # MongoDB connection
│   │   └── products.js           # API fetch functions
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js      # BetterAuth handler
│   ├── not-found.jsx             # Global 404
│   └── layout.jsx
├── db.json                       # JSON Server tile data
├── .env.local                    # Environment variables
└── next.config.js
```

---

## 🔐 Route Permissions

| Route | Access |
|---|---|
| `/` | Public |
| `/all-tiles` | Public |
| `/login` | Public |
| `/register` | Public |
| `/tile/[id]` | 🔒 Private |
| `/my-profile` | 🔒 Private |
| `/my-profile/update` | 🔒 Private |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# BetterAuth
BETTER_AUTH_SECRET=your_random_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# JSON Server
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tileverse.git
cd tileverse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in your values.

### 4. Start JSON Server (mock API)

```bash
npx json-server --watch db.json --port 5000
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary Background | `#0f0e17` (Deep Navy) |
| Secondary Background | `#1a1a2e` (Navy Blue) |
| Accent / Gold | `#e8c547` |
| UI Library | HeroUI |
| Images | Unsplash CDN |

---

## 📦 JSON Data Format

Each tile follows this structure:

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish.",
  "image": "https://images.unsplash.com/photo-...",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "finish": "Glossy Glaze",
  "creator": "ArtisanTile Co.",
  "tags": ["Minimalist", "Blue", "Modern", "Waterproof"],
  "inStock": true,
  "featured": true,
  "rating": 4.8,
  "reviewCount": 124
}
```

---

## 🖥️ Deployment

This app is deployed on **Vercel**.

```bash
# Build for production
npm run build

# Deploy via Vercel CLI
vercel --prod
```

> ⚠️ Make sure to add all environment variables in your Vercel project settings before deploying.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Assignment: Category A8 — Tiles Gallery

---

## 📄 License

This project is for educational purposes only.