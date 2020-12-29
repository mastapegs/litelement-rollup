import { LitElement, html, customElement, property } from "lit-element";

@customElement("home-page")
export class HomePage extends LitElement {
  @property() page = "Home";

  render() {
    return html`
      <h1>${this.page}</h1>
      <p>Home Page</p>
    `;
  }
}
