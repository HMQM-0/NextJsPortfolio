import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          FullStack  <br />
          Developer
        </SectionTitle>
        <SectionText>
Specialist in big ecommerces.<br />
Planning, construction, testing and maintenance in replatforming for clients with 
outdated platforms.        </SectionText>
        <Button onClick={handleClick}>Get in Touch</Button>
      </LeftSection>
    </Section>
  </>
);
const handleClick = () => {
 let url= window.open("https://www.linkedin.com/in/hector-manuel-qui%C3%B1onez-56a0a51b2/","_blank");
 return url
}
export default Hero;