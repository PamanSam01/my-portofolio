# ⚡ REBEL NOIR PORTFOLIO // CINEMATIC CYBERPUNK INTERFACE

[![Next.js 14](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **SYSTEM STATUS: ONLINE // PROTOCOL ACTIVE**  
> An immersive, military-grade cinematic portfolio interface inspired by tactical cyberpunk anime. Built using high-performance Next.js 14, WebGL/Three.js atmospheres, hardware-aware particle systems, and dual-layer communication relays.

---

## 🟥 SYSTEM OVERVIEW

The **Rebel Noir Portfolio** represents the apex of immersive front-end engineering. Inspired by the clean, tactical user interfaces of modern anime and Web3 hubs, this platform rejects generic layouts in favor of an active, living ecosystem. It features adaptive audio integration, high-fidelity WebGL atmospheres, a responsive 3D interactive lanyard system, and dual-channel secure data transmission.

---

## ⚡ CORE CAPABILITIES

### 1. Cinematic UI & Motion Design
* **Tactical Layouts**: Distinct screen-notch safe spacing, neon-accented glassmorphism cards, and interactive corner bracket grids.
* **Seamless Page Transitions**: Dynamic, high-refresh-rate layouts powered by **Lenis smooth scrolling**, **GSAP**, and **Framer Motion**.
* **Comic Wipe Transitions**: High-fidelity dual-colored wipe masks running viewport entries and page status shifts.

### 2. High-Performance WebGL Atmosphere
* **Hardware-Aware Particle Engine**: Dynamically shifts particle count ($60$ to $240$) based on browser viewport size (Small Mobile, Large Mobile, Tablet, Desktop, Ultrawide).
* **Power Detection**: Integrates `navigator.hardwareConcurrency` to automatically downscale graphics processing workload by 25% on low-end processors, ensuring persistent 60 FPS performance.
* **GPU-Optimized Shaders**: Swaps standard PBR shaders (`meshStandardMaterial`) with highly lightweight non-physical shading models (`meshLambertMaterial`) and culled lighting matrices on mobile displays.

### 3. Secure Dual-Channel Data Transmission
* **API Relay Route Handler**: Employs a serverless Next.js Route Handler (`/api/transmit`) to isolate private tokens.
* **Firebase Security**: Transmits real-time message payloads directly to a secured **Firebase Firestore** collection.
* **Resend API Integration**: Automatically triggers secure, styled email notifications to your inbox instantly upon transmission.

### 4. Interactive Multilingual HUD
* **Instant Language Toggle**: Supports instantaneous translation switches between **English (EN)** and **Indonesian (ID)** without page reloads.
* **Context Preservation**: Contextual text-typing components reload animations dynamically to fit newly chosen string parameters.

### 5. Tactical Music Deck
* **Responsive HTML5 Audio Player**: Complete custom audio control station with text truncation, play/pause controls, progress tracker, and immersive glowing soundwave pulses.

---

## 🛠️ TECHNICAL ARCHITECTURE

### Technology Stack
```
┌────────────────────────────────────────────────────────┐
│                        FRONTEND                        │
├────────────────────┬────────────────────┬──────────────┤
│ Next.js 14         │ React 18           │ TypeScript   │
├────────────────────┼────────────────────┼──────────────┤
│ Three.js (R3F)     │ GSAP / Framer      │ TailwindCSS  │
└────────────────────┴────────────────────┴──────────────┘
┌────────────────────────────────────────────────────────┐
│                        BACKEND                         │
├────────────────────┬────────────────────┬──────────────┤
│ Firestore DB       │ Resend API Relay   │ Vercel Edge  │
└────────────────────┴────────────────────┴──────────────┘
```

* **Frontend Engine**: Next.js 14 App Router (React Server Components + Client Hydration)
* **Animation & Rendering**: `@react-three/fiber` + `@react-three/drei` (WebGL), GSAP, Framer Motion, Lenis Smooth Scroll
* **Styling & Aesthetics**: TailwindCSS, Vanilla CSS variables, holographic scanlines, custom interactive cursor
* **Database & Mail Relay**: Google Firebase Firestore, Resend Node API
* **Development/Tooling**: TypeScript, ESLint, PostCSS, Webpack 5

---

## 📂 PROJECT STRUCTURE

```filepath
rebel-noir-portfolio/
├── app/                      # Next.js App Router (Routing, API Engine)
│   ├── api/                  # Serverless Route Handlers
│   │   └── transmit/         # Secure Message Relay Endpoint
│   ├── layout.tsx            # Global Root Document (Metadata, Fonts)
│   └── page.tsx              # Main Tactical Showcase Viewport
├── components/               # High-Fidelity Tactical Components
│   ├── three/                # WebGL / Three.js Visual Modules
│   │   └── ThreeAtmosphere   # Hardware-Aware Cinematic Particle System
│   ├── CinematicOverlay.tsx  # Subtle Film Grain & Overlay Systems
│   ├── CinematicPlayer.tsx   # Custom Cyberpunk Audio Controller
│   ├── FloatingNav.tsx       # Separate Desktop Pill & Mobile Safe HUD
│   ├── Lanyard.tsx           # Interactive 3D Physics Lanyard Card
│   └── TextType.tsx          # Custom Typing Simulation Component
├── sections/                 # Modular Interface Sections
│   ├── Hero.tsx              # Mobile-First Balanced Hero & Composition
│   ├── About.tsx             # Classified Metadata Grid Layout
│   ├── Projects.tsx          # Mission Logs Showcase & Mobile Safe Cards
│   ├── Skills.tsx            # Technical Proficiencies Grid
│   ├── Experience.tsx        # Chronological Cyberpunk Timeline
│   ├── Contact.tsx           # Encrypted Message Transmission Panel
│   └── Footer.tsx            # Status Footer Panel
├── lib/                      # Architecture Utilities & Contexts
│   ├── firebase.ts           # Clean Firebase Initialization
│   ├── data.ts               # Core Static Portfolio Content
│   └── i18n/                 # Dual Language Translation Engine
├── public/                   # Static Production-Grade Assets
│   ├── audio/                # High-Fidelity Audio Tracks
│   ├── background/           # Multi-Screen Scaled Backgrounds
│   ├── images/               # Showcase Project Screenshots
│   ├── card.glb              # Interactive 3D Model Aset
│   └── noise.png             # Lightweight Seamless Grain Asset
└── styles/                   # Global CSS Stylesheets
```

---

## ⚙️ SECURE INSTALLATION & INITIALIZATION

### 1. Clone & Access Workspace
```bash
git clone https://github.com/PamanSam01/my-portofolio.git
cd my-portofolio/anime
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Set Up Local Credentials
Copy the secure environment variable template to a local private file:
```bash
cp .env.example .env.local
```
Open `.env.local` and populate it with your secured Firebase keys and Resend credentials:
```ini
# Firebase Public Config (Safe for Client Connection)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# Resend Mail Secret Config (SERVER-SIDE ONLY - NEVER LEAK IN CLIENT!)
RESEND_API_KEY=your_resend_api_key_here
RESEND_TO_EMAIL=your_inbox_email_to_receive_messages@gmail.com
```

### 4. Launch Development Server
Launch locally:
```bash
npm run dev
```
Launch on a localized host (accessible via mobile devices on the same network):
```bash
npm run dev -- --host
```

---

## 📱 HIGH-FIDELITY RESPONSIVE ENGINEERING

This interface utilizes a modern, mobile-first responsive architecture designed to avoid standard CSS overflow conflicts:
* **Pill Navigation**: Employs a floating navigation deck hidden completely on mobile screens (`hidden md:flex`) and seamlessly renders a dedicated Mobile Header Bar (`flex md:hidden`) supporting safe notch spaces (`pt-[env(safe-area-inset-top)]`).
* **Visual Card Showcase**: Replaces heavy absolute alignments on mobile with relative flow containers, downscaling text and overlay scales to prevent preview blockage.
* **Diagonal Skews**: The signature red diagonal strip scales down from a wide aggressive desktop skew (`h-20 -skew-y-3`) to a compact layout-safe strip (`h-6 -skew-y-1`) on mobile screens.

---

## 📪 SECURE DATA TRANSMISSION RELAY

```
                [ CLIENT VIEWPORT ]
                         │
                         ▼ (Triggers Form Submission)
             [ Next.js API Route handler ]
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
[ Firestore DB ]                 [ Resend Email API ]
(Stores Message Logs)            (Styled Inbox Notification)
```

1. **Client Submission**: The visitor triggers an encrypted transmission in [Contact.tsx](sections/Hero.tsx).
2. **Serverless Handling**: The client makes a `POST` request to the Edge-optimized serverless endpoint `/api/transmit` housing all secrets on secure environments.
3. **Database Logging**: Saves the detailed message log in Firebase Firestore.
4. **Inbox Notification**: Pushes a high-priority, system-themed email alert to your private email address using the Resend Node engine.

---

## ⚡ PERFORMANCE HARMONY & OPTIMIZATION

* **WebGL Load Balancing**: Restricts WebGL `dpr` (device pixel ratio) to `1` on mobile while boosting it to `1.5` on desktops.
* **Vertex Culling**: Reduces sphere geometries from standard `7x5` segments to `4x3` segments on budget configurations, lessening vertex memory overhead.
* **Rasterization Optimization**: Utilizes `frustumCulled={false}` instancing to keep particle processing lightweight.
* **Seamless Film Grain**: Employs an ultra-subtle, compressed 128x128 pixel seamless tileable noise texture (`public/noise.png`) that runs purely on GPU layout caching.

---

## 🔮 FUTURE MISSION ROADMAP

* [ ] **AI-Powered Command Terminal**: Fully interactive command line interface where recruiters can run terminal scripts to read portfolio logs.
* [ ] **Real-Time WebGL Distortion**: Immersive glitch transitions on page shift.
* [ ] **Cyberpunk HUD Widgets**: Interactive widgets tracking user scroll speeds, device clock metrics, and GPU workloads in a sleek anime dashboard.

---

## 👤 PORTFOLIO ARCHITECT

**0xPamanSam** / **0xSam**  
*Cinematic Frontend Engineer & Immersive Systems Architect*  
* **Specialties**: High-Performance WebGL Environments, Interactive 3D interfaces, Secure Serverless Web3 Architecture, Tactical UI Design.
* **GitHub**: [github.com/PamanSam01](https://github.com/PamanSam01)

---

## 📄 LICENSE

This repository is licensed under the **MIT License**. Feel free to use, fork, and build upon this tactical interface for your own cyberpunk configurations.
