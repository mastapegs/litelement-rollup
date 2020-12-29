import { LitElement, html, css, customElement, property } from "lit-element";
import "./components/TopBar";
import "./components/Router";

@customElement("app-component")
export class AppComponent extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 80%;
        margin: 0 auto;
      }
    `;
  }

  @property() message = "Hello, Rollup!!!";

  render() {
    return html`
      <top-bar></top-bar>
      <div class="container">
        <app-router></app-router>
      </div>
    `;
  }
}
