import { Metadata } from 'next';
import About from '@/components/ZustandPortfolio/About';
import ProjectsMap from '@/components/ZustandPortfolio/ProjectsMap';
import SkillsWithSoftskills from '@/components/ZustandPortfolio/SkillsWithSoftskills';
import ContactPage from '@/components/ZustandPortfolio/ContactPage';


export const metadata: Metadata = {
  title: 'Coder - Zustand page',
  description:
    'Welcome to Coder - your destination to discover more about Zustand, its projects, skills and softskills.'
};


export default function Home() {  

  return (
    <>   
      <section className="mt-10">
        <About />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <ProjectsMap />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <SkillsWithSoftskills />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <ContactPage />
      </section>
    </>
  );
}
