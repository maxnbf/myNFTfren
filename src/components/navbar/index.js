import React, { useEffect, useState } from 'react';
import { GetInTouch, NavBody, NavTab, NavTabs } from './style';

const NavBar = ({solidNavbar, homeRef, aboutRef}) => {

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});


       
    }

    console.log('home on?', useOnScreen(homeRef, "-10px"))
    console.log('about on?', useOnScreen(aboutRef, "-10px"))

    return (
        <NavBody isSolid={solidNavbar} >
            <NavTabs>
                <NavTab isSelected={true} onClick={() => scrollTo(homeRef)}>Home</NavTab>
                <div onClick={() => scrollTo(aboutRef)}>About</div>
                <div>Services</div>
                <div>The Team</div>
                <div>Contact Us</div>
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