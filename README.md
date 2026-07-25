# TherapySpace - Professional Therapy Website

A modern, bilingual (English/Turkish) therapy practice website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: English and Turkish language options
- **Responsive Design**: Mobile-friendly and fully responsive
- **Professional Layout**: Clean, calming design perfect for therapy practices
- **Multiple Pages**: Home, About, Services, and Contact
- **Contact Form**: Easy client inquiries and booking requests
- **SEO Optimized**: Built with search engine optimization in mind

## 📋 Pages

- **Home**: Hero section with call-to-action and key features
- **About**: Therapist bio, credentials, and therapeutic approaches
- **Services**: Services offered and specialties
- **Contact**: Contact form and business information

## 🛠️ Tech Stack

- **Next.js 14**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **React**: JavaScript library for UI

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hhanozu/therapyspace.git
cd therapyspace

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/page.jsx      # About page
│   ├── services/page.jsx   # Services page
│   └── contact/page.jsx    # Contact page
├── components/
│   ├── Header.jsx          # Navigation header
│   └── Footer.jsx          # Footer component
└── lib/
    └── translations.js     # Bilingual content
```

## 🌍 Customization

### Update Therapist Information

Edit `src/lib/translations.js` to add your specific information:
- Name, credentials, and bio
- Services and specialties
- Contact information

### Customize Colors

Edit `tailwind.config.js` to change the color scheme. Current theme uses calm greens and therapy browns.

## 📧 Contact Form

The contact form currently logs data to the console. To send emails, integrate with:
- **Nodemailer**: For server-side email sending
- **SendGrid**: Email delivery service
- **EmailJS**: Client-side email sending

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms

- **GitHub Pages**: `npm run build` → deploy `out/` folder
- **Netlify**: Connect GitHub repo directly
- **AWS Amplify**: Connect GitHub repo directly

## 📝 License

This project is licensed under the MIT License.

## 👨‍⚕️ About Büşra Uğurcan

Büşra Uğurcan is a Clinical Psychologist and Psychotherapist specializing in:
- Anxiety and depression
- Trauma and PTSD
- Stress management
- Relationship and couples counseling
- Personal development

**Contact**: busraugurcan@gmail.com

---

Built with ❤️ for better mental health support.
