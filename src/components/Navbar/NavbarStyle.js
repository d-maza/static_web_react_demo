import styled from "styled-components"
export const Container = styled.div`
width: 100vw;
height: 40px;
background-color: rgb(231, 177, 10);
`

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
aligne-items: right;
`
export const LogoContainer = styled.div`
margin-left: 0.5rem;
  display: flex;
  align-items: right;
  font-size: 0.2rem;
  font-family: sans-serif;
  &:hover {
    color: #fff;
    background-color: #AA7BC3;
    transition: 0.5s all ease;
  svg{
    margin-right: 0.5rem;
  }
`

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
@media screen and max-width: 960px{
    position:absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 90vh; 
}
`
export const MenuItem = styled.li`
height: 100%;
aligne-items: right;
display: flex;
aligne-items: right;
padding: 0.5rem 2.5rem;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: ponter;
transition: 0.5s all ease;
&:hover {
    color: #fff;
    background-color: rgb(231, 177, 10);
    transition: 0.5s all ease;

`

export const FaFacebook = styled.div`
    padding: 5px 5px;
`