import React, { useEffect, useState } from 'react';
import { GetInTouch, MobileNavButton, MobileNavMenu, NavBody, NavTab, NavTabs } from './style';
import MobileMenuButton from '../../assets/menubutton.png'

export const scrollTo = (ref) => {
  ref.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});  
}


const NavBar = ({solidNavbar, homeRef, aboutRef, servicesRef, teamRef, contactRef}) => {

    const [mobileNav, setMobileNav] = useState(false)
    console.log(mobileNav)

    const isHomeOnScreen = useOnScreen(homeRef);
    const isAboutonScreen = useOnScreen(aboutRef);
    const isServicesOnScreen = useOnScreen(servicesRef);
    const isTeamOnScreen = useOnScreen(teamRef);
    const isContactOnScreen = useOnScreen(contactRef);
    return (
        <NavBody isSolid={solidNavbar} >
            <NavTabs>
                <NavTab isSelected={isHomeOnScreen} onClick={() => scrollTo(homeRef)}>Home</NavTab>
                <NavTab isSelected={isAboutonScreen} onClick={() => scrollTo(aboutRef)}>About</NavTab>
                <NavTab isSelected={isServicesOnScreen} onClick={() => scrollTo(servicesRef)}>Services</NavTab>
                <NavTab isSelected={isTeamOnScreen} onClick={() => scrollTo(teamRef)}>Team</NavTab>
                <NavTab isSelected={isContactOnScreen} onClick={() => scrollTo(contactRef)}>Contact Us</NavTab>
            </NavTabs>
            <MobileNavButton src={MobileMenuButton} onClick={() => setMobileNav(!mobileNav)}/>
            <MobileNavMenu mobileNav={mobileNav}>
              <>
                <MobileNavButton src={MobileMenuButton} onMobileNav onClick={() => setMobileNav(!mobileNav)}/>
                <NavTab isSelected={isHomeOnScreen} onClick={() => { scrollTo(homeRef); setMobileNav(false)}}>Home</NavTab>
                <NavTab isSelected={isAboutonScreen} onClick={() => { scrollTo(aboutRef); setMobileNav(false)}}>About</NavTab>
                <NavTab isSelected={isServicesOnScreen} onClick={() => { scrollTo(servicesRef); setMobileNav(false)}}>Services</NavTab>
                <NavTab isSelected={isTeamOnScreen} onClick={() => { scrollTo(teamRef); setMobileNav(false)}}>Team</NavTab>
                <NavTab isSelected={isContactOnScreen} onClick={() => { scrollTo(contactRef); setMobileNav(false)}}>Contact Us</NavTab>    
              </>
            </MobileNavMenu>
            <GetInTouch onClick={() => { scrollTo(contactRef); setMobileNav(false)}}>Get in touch</GetInTouch>
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