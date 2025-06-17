# Legendary Hustlers Website

A modern, responsive website for Legendary Hustlers - professional tree care and handyman services in Utah.

## 🚀 Features

### Core Functionality
- **Single-page design** with smooth scrolling navigation
- **Contact form** with email integration and file upload capability
- **Responsive design** optimized for all devices
- **Industrial aesthetic** with diamond plate textures and modern typography
- **SEO optimized** with proper meta tags and structured data

### Technical Features
- **Next.js 15.3.3** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **React Hook Form** with Zod validation
- **EmailJS** integration for contact form
- **Error boundaries** for graceful error handling
- **Loading states** and user feedback
- **Accessibility** features (ARIA labels, keyboard navigation)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main single page
│   ├── layout.tsx            # Root layout with error boundary
│   ├── globals.css           # Global styles and industrial theme
│   ├── sitemap.ts            # SEO sitemap
│   └── robots.ts             # SEO robots.txt
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero with contact info
│   │   ├── ServicesSection.tsx # Service cards
│   │   ├── ContactSection.tsx  # Contact form
│   │   └── AboutSection.tsx    # Team members
│   └── ui/
│       ├── Navigation.tsx     # Responsive navigation
│       ├── LoadingSpinner.tsx # Reusable loading component
│       └── ErrorBoundary.tsx  # Error handling
├── lib/
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Industrial grays and metals
- **Accent**: Yellow/orange highlights (#facc15, #f97316)
- **Background**: Diamond plate textures
- **Text**: High contrast for readability

### Typography
- **Industrial**: Orbitron (headers)
- **Heavy**: Russo One (emphasis)
- **Tactical**: Rajdhani (body text)

### Components
- **Steel cards** with industrial styling
- **Diamond plate backgrounds** for texture
- **Industrial buttons** with 3D effects
- **Custom scrollbars** matching theme

## 📧 Email Setup

The contact form is configured to send emails to `office@legendaryhustlers.com`. To enable email functionality:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up your email service and template
3. Create `.env.local` with your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAIL_SETUP_GUIDE.md` for detailed instructions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see Email Setup above)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: 0-768px
- **Tablet**: 769-1024px  
- **Desktop**: 1025px+

## ♿ Accessibility

- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** for interactive elements
- **High contrast** color scheme
- **Semantic HTML** structure

## 🔧 Performance Optimizations

- **Image optimization** with Next.js Image component
- **Code splitting** with Next.js App Router
- **CSS optimization** with Tailwind CSS
- **Loading states** for better UX
- **Error boundaries** for fault tolerance

## 📊 SEO Features

- **Meta tags** optimized for search engines
- **Open Graph** tags for social sharing
- **Twitter Card** support
- **Sitemap** generation
- **Robots.txt** configuration
- **Structured data** ready

## 🧪 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Standards
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Component-based** architecture
- **Utility-first** CSS with Tailwind

## 📞 Contact Information

- **Phone**: (385) 590-4074
- **Email**: office@legendaryhustlers.com
- **Service Area**: Utah & Surrounding Areas

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Legendary Hustlers.

---

**Built with ❤️ by the Legendary Hustlers team**
