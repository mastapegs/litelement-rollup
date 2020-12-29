import { LitElement, html, customElement, property } from "lit-element";

@customElement("app-component")
export class AppComponent extends LitElement {
  @property() message = "Hello, Rollup!!!";
  render() {
    return html`
      <h1>${this.message}</h1>
      <p>LitElement with Rollup and Typescript</p>
    `;
  }
}
