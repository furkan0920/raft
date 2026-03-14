import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import './i18n'
import { useTranslation } from 'react-i18next'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Footer/Footer'
import Activities from './Components/Pages/Activities'
import LanguageSwitcher from './Components/LanguageSwitcher'
import whatsappIcon from './assets/whatsapp.png'

function WhatsappFloat() {
  const { t } = useTranslation();
  const message = encodeURIComponent(t('whatsapp.message'));
  const href = `https://wa.me/905331530229?text=${message}`;
  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      title={t('whatsapp.tooltip')}
    >
      <img src={whatsappIcon} alt={t('whatsapp.alt')} loading="lazy" />
    </a>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
      <WhatsappFloat />
    </>
  )
}

export default App
