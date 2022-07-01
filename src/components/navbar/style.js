import styled from 'styled-components'


export const NavBody = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    color: white;
    position: sticky;
    top: 0;

    background: ${(p) => p.isSolid ? '#1F2255' : 'transparent'};
    opacity: 0.95;
`

export const NavTabs = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-evenly;
    align-items: center;

  
`

export const NavTab = styled.div`
    color: ${(p) => p.isSelected ? '#36B3A1' : 'white'};
    text-decoration:  ${(p) => p.isSelected ? 'underline' : 'none'}; 
`

export const GetInTouch = styled.div`
    border: 3px solid #36B3A1;
    margin: 8px 20px 5px 0px;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 8%;
    justify-content: center;
`