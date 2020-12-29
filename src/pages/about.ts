import { LitElement, html, customElement, property } from "lit-element";

@customElement("about-page")
export class HomePage extends LitElement {
  @property() page = "About";

  render() {
    return html`
      <h1>${this.page}</h1>
      <p>About Page</p>
    `;
  }
}
