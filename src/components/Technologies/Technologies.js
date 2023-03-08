import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>TechStack</SectionTitle>
    <SectionText>
    Fullstack using MERN development with javascript as the base language for all projects.
     WordPress Specialist PHP & SQL, templates and plugings building.
    </SectionText>
    <List>
      <ListItem>
       
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JAVASCRIPT / REACT / NEXT.JS<br />
            WORDPRESS / WOOCOMMMERCE<br />
            HTML / CSS / BUILDER.IO<br />
            SASS / BOOTSTRAP / MAT-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NODEJS / TYPESCRIPT<br />
            PHP <br />
            MONGODB / MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            PHOTOSHOP  <br />
            ILLUSTRATOR <br />
            FIGMA <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
   
  </Section>
);

export default Technologies;
