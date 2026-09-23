import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import MusicPage from '@/pages/MusicPage';
import TourPage from '@/pages/TourPage';
import BandPage from '@/pages/BandPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/band" element={<BandPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
