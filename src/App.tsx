import Header from "./sections/Header";
import Hero from "./sections/Hero";
import MonthlyDances from "./sections/MonthlyDances";
import CommunityGallery from "./sections/CommunityGallery";
import MissionAndFutureVision from "./sections/MissionAndFutureVision";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <MonthlyDances />
        <CommunityGallery />
        <MissionAndFutureVision />
      </main>
      <Footer />
    </div>
  );
}
