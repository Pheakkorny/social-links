import ProfileImg from './assets/avatar-jessica.jpeg';
import GitHub from './assets/github.png';
import Mentor from './assets/mentor.png';
import Telegram from './assets/telegram_icon-icons.webp';
import LinkedIn from './assets/linkedIn.png';
import Facebook from './assets/facebook-icon.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialMediaLinks = [
  {
    id: 1,
    name: 'GitHub',
    logo: GitHub,
    path: 'https://github.com/Pheakkorny?tab=repositories',
  },
  {
    id: 2,
    name: 'LinkedIn',
    logo: LinkedIn,
    path: 'https://www.linkedin.com/in/pheakkorny-born-15259b249', 
  },
  {
    id: 3,
    name: 'Telegram',
    logo: Telegram,
    path: 'https://t.me/bornpheakkorny',
  },
  {
    id: 4,
    name: 'Facebook',
    logo: Facebook,
    path: 'https://www.facebook.com/pheakkornymilkyway?mibextid=wwXIfr&mibextid=wwXIfr',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    logo: Mentor,
    path: 'https://portfolio-bornpheakkorny.netlify.app/',
  },
];

const App = () => {
  const [selectedLink, setIsSelectedLink] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedLink = (selectedLink) => {
    setIsSelectedLink(selectedLink);

    if (selectedLink) {
      setIsSelected(!isSelected);
    }
  };

  const closeLink = () => {
    setIsSelected(false);
  };

  const selectedClassMap = {
    GitHub: 'github',
    'Frontend Mentor': 'mentor',
    LinkedIn: 'linkedin',
    Twitter: 'twitter',
    Instagram: 'instagram',
  };

  const selectedClassName = selectedClassMap[selectedLink.name || ''];

  return (
    <div className="container">
      <div className="profile-container">
        <img src={ProfileImg} alt="" />

        <div className="profile-info">
          <h1>Born Pheakkorny</h1>
          <span>I am a Web Developer</span>
        </div>

        <p className="text">Address: Phnom Penh, Cambodia.</p>

        <div className="buttons">
          {socialMediaLinks.map((link) => (
            <button
              key={link.id}
              className="button"
              onClick={() => handleSelectedLink(link)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Info details */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className={`profile-details ${selectedClassName}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="close" onClick={closeLink}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <div className="overlay"></div>

            <div className="selected-info">
              <motion.img
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.3 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedLink.logo}
                alt=""
              />

              <motion.p
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.5 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                My name is Born Pheakkorny. I am a Web developer. I build seamless web experiences and
                web applications. Click Check out my bio to see my details.
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.9 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="cta"
              >
                <a
                  href={selectedLink.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my bio
                </a>
              </motion.div>

              <div className="tag">{selectedLink.name}</div>

              <div className="author">Born Pheakkorny</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
