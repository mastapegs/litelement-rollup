import { css } from 'lit-element'

export default css`
  nav {
    background-color: hsl(210, 100%, 50%);
    box-shadow: 0 0.3rem 0.3rem hsla(0, 0%, 50%, 0.5);
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center; 
  }
  a {
    display: inline-block;
    color: white;
    text-decoration: inherit;
    padding: 0.5em 1.5em;
    margin: 1em 1.5em;
    border: 1px solid black;
    border-radius: 30%;
    background-color: hsl(210, 100%, 40%);
    box-shadow: 1px 3px 2px hsla(0, 0%, 0%, 0.5);
  }
  a:active {
    box-shadow: none;
    background-color: hsl(210, 100%, 30%);
  }
`