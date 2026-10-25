import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import ResumeCTA from '../components/sections/ResumeCTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <Skills />
      <Services />
      <ResumeCTA />
    </div>
  );
};

export default Home;