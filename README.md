# SOLIUM

> A cinematic indie film streaming platform where design meets storytelling

![SOLIUM Banner](https://via.placeholder.com/1200x400/0a0a0a/ffffff?text=SOLIUM)

## 🎬 Overview

SOLIUM is a curated streaming platform dedicated to independent cinema. Built with emotional impact and visual identity at its core, SOLIUM transforms film discovery into an immersive experience. Every frame, transition, and interaction is designed to honor the artistry of independent filmmaking.

**Live Demo:** [Coming Soon]  
**Status:** In Development

---

## ✨ Features

### Current Implementation
- **Cinematic UI/UX** - Dark, immersive interface inspired by film aesthetics
- **Curated Film Collections** - Hand-picked indie films organized by mood and theme
- **Responsive Design** - Seamless experience across all devices
- **Interactive Film Cards** - Hover states and smooth transitions
- **Dynamic Content Loading** - Optimized performance with lazy loading

### Planned Features
- **User Authentication** - JWT-based secure login system
- **Personalized Watchlists** - Save and organize favorite films
- **Search & Filter** - Advanced filtering by genre, mood, year, runtime
- **Video Player** - Custom-built player with quality controls
- **User Reviews** - Community-driven film discussions
- **Recommendation Engine** - AI-powered suggestions based on viewing history

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React (Vite)
- **Styling:** CSS3 / Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Animations:** Framer Motion

### Backend (In Progress)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **File Storage:** Cloudinary (for film posters/thumbnails)

### DevOps
- **Deployment:** Vercel (Frontend), Railway (Backend)
- **Version Control:** Git & GitHub
- **Package Manager:** npm

---

## 📁 Project Structure

```
solium/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Helper functions
│   │   └── assets/        # Images, fonts, icons
│   ├── public/
│   └── package.json
│
├── server/                # Express backend (planned)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/solium.git
   cd solium
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your environment variables
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
npm run preview  # Test production build locally
```

---

## 🎨 Design Philosophy

SOLIUM isn't just a streaming platform—it's an experience. The design prioritizes:

- **Emotional Impact** - Every visual choice serves the story
- **Cinematic Aesthetics** - Dark palettes, dramatic lighting, intentional whitespace
- **Thoughtful Typography** - Font choices that complement the indie film identity
- **Micro-interactions** - Subtle animations that feel intentional, not gimmicky
- **Content First** - Design that elevates the films, not overshadows them

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Initial design in Figma
- [x] React setup with Vite
- [x] Core UI components
- [x] Responsive layout

### Phase 2: Backend Integration 🔄
- [ ] Express server setup
- [ ] MongoDB database schema
- [ ] User authentication (JWT)
- [ ] Film CRUD operations
- [ ] API documentation

### Phase 3: Advanced Features 📋
- [ ] Video streaming integration
- [ ] User profiles & watchlists
- [ ] Search & filter functionality
- [ ] Review system
- [ ] Email notifications

### Phase 4: Polish & Launch 🎯
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Analytics integration
- [ ] Final testing & bug fixes
- [ ] Production deployment

---

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to:

1. Open an issue for bugs or feature requests
2. Submit a pull request for improvements
3. Share your thoughts on the design or UX

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About the Developer

Built by **Shushi (Aniket)** - a frontend developer and designer passionate about creating meaningful digital experiences.

- **Portfolio:** [Your Portfolio URL]
- **LinkedIn:** [Your LinkedIn]
- **Email:** [Your Email]

---

## 🙏 Acknowledgments

- Inspired by the indie film community and platforms like MUBI
- UI/UX inspiration from contemporary streaming services
- Film metadata powered by [TMDb API / OMDb API]

---

<div align="center">

**SOLIUM** - Where Independent Cinema Lives

*Built with ❤️ and a deep appreciation for storytelling*

</div>