import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
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
            Experience with <br />
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
            Experience with <br />
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
            Experience with <br />
            PHOTOSHOP  <br />
            ILLUSTRATOR <br />
            FIGMA <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
