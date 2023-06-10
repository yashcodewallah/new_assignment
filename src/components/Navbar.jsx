import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <NavContainer>
            <Logo>
                <img src="/images/site-logo.png" alt="" />

            </Logo>
         
            <Nav>
                <Navwrap>
                    <NavList>
                        <a>Dashboard</a>
                    </NavList>
                    <NavList>
                        <a>Option chain</a>
                    </NavList>
                    <NavList>
                        <a>Strategy build</a>
                    </NavList>
                    <NavList>
                        <a>Positions</a>
                    </NavList>
                    <NavList>
                        <a>Order book</a>
                    </NavList>
                </Navwrap>
            </Nav>

            <Data>
                <DataSection>
                    <DataName>Nifty</DataName><br></br>
                    <Percent>2.16%</Percent><Dataval>112385</Dataval>
                </DataSection>
                <DataSection>
                    <DataName>Nifty</DataName><br></br>
                    <Percent>2.16%</Percent><Dataval>112385</Dataval>
                </DataSection>
                <DataSection>
                    <DataName>Nifty</DataName><br></br>
                    <Percent>2.16%</Percent><Dataval>112385</Dataval>
                </DataSection>

            </Data>              
            <Profile>
                <button>Profile <img src="images/profile-down.svg" alt="" /></button>
            </Profile>
        </NavContainer>
    )
}
const NavContainer = styled.nav`
display:flex;
align-items:center;
justify-content:space-around;
height:60px;
padding:0px 70px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
font-family:"poppins"
`
const Logo = styled.div`
img{
    max-width:40px;
}
`

const Nav = styled.div`

`


const Navwrap = styled.ul`
display:flex;
gap:30px;
justify-content:space-between;
list-style-type: none;

`


const NavList = styled.li`

`


const Data = styled.div`
display:flex;
gap:20px;
justify-content:space-between;
margin-left:30px;
`

const DataSection = styled.div`

`
const DataName=styled.span`
font-size:15px;
color:rgb(248, 161, 102);
`
const Dataval=styled.span`
font-weight:600;
font-size:14px;
`

const Percent = styled.span`
color:green;
font-size:12px;
line-height:10px;
margin-right:10px;
`

const Profile = styled.div`
button{
    border:none;
    background:none;
    font-size:17px;
    display:flex;
    align-items:center;
    img{
        max-width:15px;
    }
}
`
export default Navbar;