# Kavya Jain - Personal Portfolio Website

A complete, polished, modern personal portfolio website built for **Kavya Jain**, B.Tech student in Computer Science & Engineering (Core) at **JECRC University**, Jaipur.

Designed with a sleek, dark-navy theme, electric blue and purple accent colors, subtle grid and radial glow effects, clean typography, and full accessibility.

---

## 🚀 Quick Start

### Option 1: Instant Browser Preview (Zero Installation)
Simply double-click or open **`preview.html`** in any web browser (Chrome, Edge, Firefox, Brave).
- No Node.js or terminal required!
- Fully interactive with React, Tailwind CSS, live project modals, responsive hamburger menu, and email copy utility.

### Option 2: Vite Development Server
If you have Node.js installed, open a terminal in this folder and run:
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production deployment
npm run build
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

---

## 🎨 Design System

- **Background Palette**: Deep Navy (`#040814`, `#070f26`, `#0b1536`)
- **Accent Palette**:
  - Electric Blue & Cyan: `#00d4ff`, `#38bdf8`
  - Vibrant Purple & Violet: `#a855f7`, `#8b5cf6`
  - Emerald Accents: `#34d399` (Status & Active Pills)
  - Amber Accents: `#fbbf24` (Learning Tags)
- **Typography**: Plus Jakarta Sans & JetBrains Mono
- **Accessibility**: High color contrast, visible keyboard focus indicators (`:focus-visible`), and ARIA landmarks.

---

## 📂 Project Architecture

```
My Portfolio/
├── index.html                   # Vite HTML entry point
├── preview.html                 # Standalone instant preview (works out-of-the-box)
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration (custom palette & fonts)
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure
    ├── index.css                # Tailwind directives & glassmorphic styles
    ├── data/
    │   └── portfolioData.js     # Centralized, editable student data
    └── components/
        ├── Navbar.jsx           # Sticky nav with mobile drawer & active indicators
        ├── Hero.jsx             # Hero with prominent name, headline, intro, CTAs & code terminal
        ├── About.jsx            # Student narrative, Curious Learner & Tech Enthusiast cards
        ├── Education.jsx        # B.Tech CSE Core, JECRC University, learning areas, milestone road
        ├── Skills.jsx           # Categorized skills with transparent "Learning" badges
        ├── Projects.jsx         # Realistic student projects with tags, demos, & GitHub links
        ├── ProjectModal.jsx     # In-depth project inspector modal
        ├── Achievements.jsx     # Real courses, in-progress certifications, and campus activities
        ├── Contact.jsx          # Email copy button, social links, and demo contact form
        └── Footer.jsx           # Social links, copyright, and custom attribution
```

---

## 🧑‍💻 Student Information Configured

- **Name**: Kavya Jain
- **Headline**: B.Tech Student | Aspiring AI & Web Developer
- **University**: JECRC University, Jaipur, India
- **Degree**: B.Tech in CSE Core (2026 – 2030)
- **Email**: `kavyaaaaaaa23@gmail.com`
- **GitHub**: [kavyajain23](https://github.com/kavyajain23)
- **LinkedIn**: [Kavya Jain](https://www.linkedin.com/in/kavya-jain-a93194421?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Active Learning**: AutoCAD, Digital Data & AI Literacy, Communication Skills

---

## 🛠️ How to Customize

All information is cleanly decoupled inside **`src/data/portfolioData.js`**. To update or add new projects, certifications, or coursework:
1. Open [`src/data/portfolioData.js`](file:///c:/Users/Lenovo/Desktop/My%20Portfolio/src/data/portfolioData.js)
2. Update the corresponding array (`projectsData`, `achievementsData`, `skillsData`, or `personalInfo`).
3. Save the file — the changes will reflect immediately!

---

*Designed and built for Kavya Jain.*
