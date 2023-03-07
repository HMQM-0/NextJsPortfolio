import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Details</LinkTitle>
          <LinkItem href="mailto:hectormqm@gmail.com">
            hectormqm@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Socials</LinkTitle>
        <LinkItem>
      
        <SocialContainer>
          <SocialIcons href="https://github.com/HMQM-0">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hector-manuel-qui%C3%B1onez-56a0a51b2/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/rockelector/?hl=es">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </LinkItem>
        </LinkColumn>
      </LinkList>
      
    </FooterWrapper>
  );
};

export default Footer;
