import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <CaseStudies />
            <Education />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}