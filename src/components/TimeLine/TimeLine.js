import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';




const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

 /*  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  } */

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>The dev</SectionTitle>
      <SectionText>
      Fullstack developer with over 7 years of experience working with WordPress and PHP, I have a deep understanding of web development and the technologies that power it.<br />
       I have worked on a wide range of projects, from small websites to large-scale ecommerce platforms.<br /><br />

       <p>In addition to my experience with WordPress and PHP, I have also spent the last 2 years working as a Node/Next.js developer, specializing in big ecommerce.<br /> 
        During this time, I have gained valuable experience in building high-performance, scalable applications that can handle large volumes of traffic and transactions.<br /></p>



      </SectionText>
      <SectionDivider divider />
    </Section>
  );
};

export default Timeline;
