import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function PortfolioHome() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}>
        <h1 className="text-5xl font-extrabold tracking-tight">👋 Hi, I'm <span className="text-blue-600">Shashank Kumar Soni</span></h1>
        <p className="text-xl">M.Tech Graduate from NIT Delhi | Full-Stack & Mobile App Developer | Tech Explorer</p>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="mailto:shashanksoni192@gmail.com" title="Email"><Mail /></a>
          <a href="https://github.com/shashankksoni" title="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/shashank0211/" title="LinkedIn"><Linkedin /></a>
          <a href="/resume.pdf" title="Download Resume"><FileText /></a>
        </div>
      </motion.section>

      <section className="space-y-10">
        <h2 className="text-3xl font-bold">🚀 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.03 }}>
            <h3 className="text-xl font-semibold mb-2">React Native WebView App</h3>
            <p className="text-sm">A cross-platform app using React Native & Expo. Features dark mode, pull-to-refresh, and graceful error handling.</p>
            <a href="https://github.com/shashankksoni/ReactNativeWebViewApp" target="_blank">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View on GitHub</button>
            </a>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.03 }}>
            <h3 className="text-xl font-semibold mb-2">Android WebView App</h3>
            <p className="text-sm">Kotlin + Jetpack Compose app with secure WebView rendering, DOM storage support, and robust fallback mechanisms.</p>
            <a href="https://github.com/shashankksoni/AndroidWebViewApp" target="_blank">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View on GitHub</button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">📚 Publication</h2>
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p>
            <strong>Person Re-identification: A Retrospective Study, Recent Trends and Future Scope</strong><br/>
            Published at IC2SDT 2024. Focuses on Re-ID systems, challenges with deep learning in surveillance, and future research directions.
            <a className="text-blue-600 ml-2" href="https://ieeexplore.ieee.org/document/10696378" target="_blank">Read more</a>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">📜 Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Trainer for IoT – NIT Delhi & IIT Ropar (Dec 2024)</li>
          <li>Python for IoT – KIT, Kanpur (Oct 2021)</li>
          <li>Machine Learning Fundamentals – GeeksforGeeks (2019)</li>
          <li>ASP.Net with C# – H.Techsoft (2018)</li>
          <li>C/C++ Programming – Aptech (2016)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🧠 Currently Exploring</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Jetpack Libraries: Room, Navigation, Hilt</li>
          <li>Scalable Backend APIs with Node & Express</li>
          <li>Data Science: Pandas, Matplotlib, NumPy</li>
          <li>Machine Learning: Model building & pipelines</li>
          <li>Deploying models & visualizations via Kaggle</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">📫 Get in Touch</h2>
        <div className="space-y-2">
          <p>Email: <a className="text-blue-600" href="mailto:shashanksoni192@gmail.com">shashanksoni192@gmail.com</a></p>
          <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/shashank0211/" target="_blank">@shashank0211</a></p>
          <p>GitHub: <a className="text-blue-600" href="https://github.com/shashankksoni" target="_blank">@shashankksoni</a></p>
        </div>
        <ContactForm/>
      </section>
    </div>
  );
}
