import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ROI from '../components/Home/roi';
import Features from '../components/Home/Features';
import STAR from '../components/Home/star';
import Reviews from '../components/Home/Reviews';
import Booking from '../components/Home/Booking';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ROI />
        <Features />
        <STAR />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
