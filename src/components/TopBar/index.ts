import { LitElement, html, css, customElement } from "lit-element";
import styles from "./styles";

@customElement("top-bar")
export class TopBar extends LitElement {
  static get styles() {
    return css`
      ${styles}
    `;
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
