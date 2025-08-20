import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Pricing from './components/Pricing'; // Import the new Pricing component

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Pricing /> {/* Add the Pricing component here */}
        <Testimonials />
        <Blog />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
