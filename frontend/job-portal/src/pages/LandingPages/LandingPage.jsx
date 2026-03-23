import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function LandingPage() {
  return (
    <div className="min-h-screen mb-[100vh]">
      <Header />
      <Hero />
      <Features/>
      <Analytics/>
      <Footer/>
    </div>
  );
}

export default LandingPage;