import styled from "styled-components"

export const StyledButton = styled.button`
width: 100px;
height: 40px;
background-color: #008CBA;
color: #ffffff;
border: 2px solid #007acc; 
transition-duration: 0.1s;
font-size: 15px;

:hover {
  background-color: #007acc;
  color: white;
}
:active{
    background-color: white;
    color:black;

}
`
export const Styledcancelbutton = styled.button`
width: 100px;
height: 40px;
background-color: #ff3b3b;
color: #ffffff;
border: 2px solid #ff3b3b; 
transition-duration: 0.1s;
font-size: 15px;

:hover {
  background-color: #ff553b;
  color: white;
}
:active{
    background-color: white;
    color:black;

}
`

