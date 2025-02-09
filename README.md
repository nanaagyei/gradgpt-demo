# GradGPT - AI-Powered College Application Assistant

GradGPT is a modern web application that provides AI-powered assistance for graduate and undergraduate school applications. Built with React, TypeScript, and Tailwind CSS, it offers personalized recommendations, document analysis, and expert guidance for students navigating their academic journey.

## 🚀 Features

- **AI-Powered Chat**: Get instant answers to your graduate school questions
- **Document Analysis**: Upload and analyze academic papers and application materials
- **Conversation History**: Save important discussions for future reference
- **24/7 Availability**: Access guidance whenever you need it
- **Secure & Private**: Enterprise-grade security for your data
- **Real-time Updates**: Stay informed about deadlines and program updates

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (via `authStore`)
- **UI Components**: Custom components with Lucide React icons
- **Authentication**: Custom auth implementation with sign-in/sign-up functionality

## 🏗️ Project Structure
src/
├── components/
│ ├── AuthModal.tsx # Authentication modal component
│ ├── Chat.tsx # Main chat interface
│ ├── Contact.tsx # Contact form component
│ ├── Features.tsx # Features showcase component
│ ├── Hero.tsx # Landing page hero section
│ ├── Navbar.tsx # Navigation component
│ ├── SignInForm.tsx # Sign in form
│ └── SignUpForm.tsx # Sign up form
├── stores/
│ └── authStore.ts # Authentication state management
├── App.tsx # Main application component
└── main.tsx # Application entry point

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/nanaagyei/gradgpt-demo.git
cd gradgpt
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```


## 💻 Usage

1. **As a Guest**
   - Browse features and pricing
   - View testimonials
   - Contact support
   - Sign up for an account

2. **As a Registered User**
   - Access the AI chat interface
   - Get personalized recommendations
   - Save conversations
   - Analyze documents

## 🔐 Authentication

The application includes a complete authentication system with:
- User registration
- User login
- Profile management
- Secure session handling

## 🎨 UI/UX Features

- Responsive design for all screen sizes
- Modern, clean interface
- Interactive components
- Loading states and animations
- Error handling and user feedback

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For support or queries, please use the contact form in the application or reach out through our GitHub issues page.

---

Built with ❤️ for students navigating their academic journey.