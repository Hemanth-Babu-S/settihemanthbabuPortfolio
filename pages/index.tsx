import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experiences from '@/components/Experiences'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocial } from '@/utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}



export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div
      className='snap-y snap-mandatory over h-screen overflow-scroll overflow-y-scroll 
      overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-green-500/80'>
      <Head>
        <title>Hemanth Babu Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <Experiences experiences={experiences} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id="contactMe" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter gray hover:grayscale-0 cursor-pointer'
              src="https://cdn.sanity.io/images/i46x7s3p/production/6c52dfa6363ceed84a0b553c51dc7fb679465381-2592x4608.jpg?rect=113,778,1983,2273"
              alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};