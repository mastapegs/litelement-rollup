import { LitElement, html, customElement, property } from "lit-element";

@customElement("contact-page")
export class HomePage extends LitElement {
  @property() page = "Contact";

  render() {
    return html`
      <h1>${this.page}</h1>
      <p>Contact Page</p>
    `;
  }
}
