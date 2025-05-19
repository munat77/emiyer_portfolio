import React from 'react';
import './App.css';
import profileImg from './munas pic.jpg'; // Replace with your image
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="portfolio">
      {/* Animated Background Elements */}
      <div className="decorative-circle pink"></div>
      <div className="decorative-circle white"></div>

      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <div className="image-container">
          <img src={profileImg} alt="Emiyer Tilahun" className="profile-image" />
          <div className="tech-icons">
            <span>{"</>"}</span>
          </div>
        </div>
        <h1>Emiyer Tilahun</h1>
        <p className="tagline">Web Developer & CS Student</p>
        <div className="divider pink"></div>
      </motion.header>

      <main className="main-content">
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="about-section"
        >
          <h2><span className="highlight">About</span> Me</h2>
          <p>
            Hello! I'm Emiyer, a 21-year-old passionate web developer currently pursuing my 
            Bachelor's in Computer Science at Dire Dawa University. I specialize in creating 
            beautiful, functional websites with modern technologies like React and JavaScript.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open-source projects, 
            mentoring aspiring developers, or exploring UI/UX design trends.
          </p>
        </motion.section>

        <div className="details-grid">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="detail-card education"
          >
            <h3>🎓 Education</h3>
            <p><strong>B.Sc. Computer Science</strong></p>
            <p>Dire Dawa University</p>
            <p>2021 - Present (3rd Year)</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="detail-card skills"
          >
            <h3>💻 Technical Skills</h3>
            <ul>
              <li>React.js & Next.js</li>
              <li>JavaScript/TypeScript</li>
              
              <li>HTML5, CSS3, Sass</li>
              <li>Responsive Design</li>

            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="detail-card contact"
          >
            <h3>📬 Contact Me</h3>
            <p><FaPhone className="icon" /> +251 967702320</p>
            <p><FaEnvelope className="icon" /> munaemiyer@gmail.com</p>
            <div className="socials">
              <a href="https://github.com/munat77" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/Emiyer Tilahun" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="footer"
      >
        <p>© {new Date().getFullYear()} Emiyer Tilahun | Proud Woman in Tech</p>
      </motion.footer>
    </div>
  );
}

export default App;