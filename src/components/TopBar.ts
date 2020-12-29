import { LitElement, html, css, customElement } from "lit-element";

@customElement('top-bar')
export class TopBar extends LitElement {

  static get styles() {
    return css`
      nav {
        background-color: hsl(210, 100%, 50%);
        box-shadow: 0 0.3rem 0.3rem hsla(0, 0%, 50%, 0.5);
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
        padding: 1em 3em;
        margin: 1em 2em;
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
  }
  
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    `
  }

}