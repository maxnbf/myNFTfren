import React, { useEffect, useState } from 'react';
import { GetInTouch, NavBody, NavTab, NavTabs } from './style';

const NavBar = ({solidNavbar, homeRef, aboutRef, servicesRef, teamRef}) => {

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});  
    }

    console.log(useOnScreen(aboutRef, "50px"))

    return (
        <NavBody isSolid={solidNavbar} >
            <NavTabs>
                <NavTab isSelected={useOnScreen(homeRef)} onClick={() => scrollTo(homeRef)}>Home</NavTab>
                <NavTab isSelected={useOnScreen(aboutRef)} onClick={() => scrollTo(aboutRef)}>About</NavTab>
                <NavTab isSelected={useOnScreen(servicesRef)} onClick={() => scrollTo(servicesRef)}>Services</NavTab>
                <NavTab isSelected={useOnScreen(teamRef)} onClick={() => scrollTo(teamRef)}>Team</NavTab>
                <NavTab>Contact Us</NavTab>
            </NavTabs>
            <GetInTouch>Get in touch</GetInTouch>
        </NavBody>
    );
}

// Hook
function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
  }

export default NavBar;