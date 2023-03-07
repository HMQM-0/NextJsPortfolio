import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Image className='imgLogo' src='/logoTransp2.svg'  width="200px" height="200px"></Image>
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
    
     
     
    </Layout>
  );
};

export default Home;
