# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Showcase my work, skills, and experience with a beautiful, responsive design.

![Portfolio Preview](https://imgur.com/gallery/modern-portfolio-nextjs-shadcn-JlgMgLw)

## ✨ Features

- **🎨 Modern Design** - Clean, minimalist design with smooth animations
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with Next.js for optimal speed and SEO
- **🎭 Smooth Animations** - Framer Motion powered transitions and interactions
- **🌙 Dark Theme** - Elegant dark theme with accent colors
- **📄 Multiple Pages** - Home, Services, Work, Resume, and Contact pages
- **🔧 Interactive Components** - Hover effects, expandable sections, and more

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- **Deployment:** [Vercel](https://vercel.com/) - Hosting platform

## 📁 Project Structure

```
Modern-Portfolio-Website/
├── app/
│   ├── contact/          # Contact page
│   ├── resume/           # Resume page
│   ├── services/         # Services page
│   ├── work/             # Work/Projects page
│   ├── globals.css       # Global styles
│   ├── layout.jsx        # Root layout
│   └── page.jsx          # Home page
├── components/
│   ├── ui/               # Shadcn/ui components
│   ├── Header.jsx        # Navigation header
│   ├── MobileNav.jsx     # Mobile navigation
│   ├── PageTransition.jsx # Page transitions
│   ├── Photo.jsx         # Profile photo component
│   ├── Social.jsx        # Social media links
│   ├── Stats.jsx         # Statistics component
│   └── StairTransition.jsx # Stair transition effect
├── public/
│   └── assets/           # Images, icons, and other assets
└── lib/
    └── utils.js          # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Modern-Portfolio-Website.git
   cd Modern-Portfolio-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

### 🏠 Home Page

- Hero section with introduction
- Professional photo and social links
- Statistics and achievements
- Download CV functionality

### 💼 Services Page

- Interactive service cards
- Technology stacks for each service
- Expandable feature lists
- Professional service descriptions

### 🎨 Work Page

- Project portfolio showcase
- Technology tags for each project
- GitHub and live demo links
- Responsive project grid

### 📋 Resume Page

- Interactive tabs (Experience, Education, Skills, About)
- Detailed work history
- Educational background
- Skills and technologies
- Downloadable CV

### 📞 Contact Page

- Professional contact form
- Service selection dropdown
- Contact information cards
- Form validation

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0a0a0a",
      accent: "#00ff99",
    }
  }
}
```

### Content

- Update personal information in respective page components
- Replace images in `public/assets/`
- Modify service descriptions and project details
- Update social media links in `components/Social.jsx`

### Styling

- Modify global styles in `app/globals.css`
- Update component-specific styles in individual files
- Customize animations in Framer Motion components

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ⚡ Performance Features

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Lazy Loading** - Images and components load on demand
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized bundle sizes and caching

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

## 📞 Contact

**Dilmin Ekanayaka** - [pasindusupun461@gmail.com](mailto:pasindusupun461@gmail.com)

⭐ **Star this repository if you found it helpful!**
