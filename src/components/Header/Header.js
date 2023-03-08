import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <Image src='/logo.svg' width={70} height={70}></Image>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>TechStack</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#work">
          <NavLink>The Work</NavLink>
        </Link>
      </li>
         
           
    </Div2>
      <Div3>
      <SocialIcons href="https://www.linkedin.com/in/hector-manuel-qui%C3%B1onez-56a0a51b2/" target='_blank' >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/HMQM-0" target='_blank' >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/rockelector/?hl=es" target='_blank' >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
       
      </Div3>
    </Container>
);

export default Header;
