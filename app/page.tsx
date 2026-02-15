import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Trust />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
