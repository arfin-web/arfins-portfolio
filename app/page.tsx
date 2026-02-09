import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/about/AboutMe";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
// import CaseStudies from "@/components/projects/CaseStudies";
import Education from "@/components/education/Education";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Blog from "@/components/blog/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            {/* <CaseStudies /> */}
            <Education />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
}