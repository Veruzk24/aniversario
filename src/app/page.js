import Footer from '@/components/landing/Footer';
import CouponsSection from '@/components/landing/CouponsSection';
import DreamsSection from '@/components/landing/DreamsSection';
import FinalGallery from '@/components/landing/FinalGallery';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import LoveThingsSection from '@/components/landing/LoveThingsSection';
import LoveTimeline from '@/components/landing/LoveTimeline';
import PlaylistQrSection from '@/components/landing/PlaylistQrSection';
import RomanceBackdrop from '@/components/landing/RomanceBackdrop';
import TimeTogetherCounter from '@/components/landing/TimeTogetherCounter';

export default function Home() {
  return (
    <div className="site-shell">
      <RomanceBackdrop />
      <Header />
      <Hero />
      <TimeTogetherCounter />
      <LoveTimeline />
      <DreamsSection />
      <LoveThingsSection />
      <CouponsSection />
      <PlaylistQrSection />
      <FinalGallery />
      <Footer />
    </div>
  );
}
