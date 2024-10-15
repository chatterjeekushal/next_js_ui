import FechuredCourses from "@/components/FechuredCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instrators from "@/components/Instrators";
import Testomonialcard from "@/components/Testomonialcard";
import Upcomingwave from "@/components/Upcomingwave";
import Whychooseus from "@/components/Whychooseus";



export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.04]">
    
    <HeroSection/>
    <FechuredCourses/>
    <Whychooseus/>
    <Testomonialcard/>
    <Upcomingwave/>
    <Instrators/>
    <Footer/>
   </main>
  );
}
