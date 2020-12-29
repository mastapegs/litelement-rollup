import { LitElement, html, customElement } from "lit-element";
import { Router } from "@vaadin/router";
import '../pages/index'
import '../pages/about'
import '../pages/contact'

@customElement("app-router")
export class AppRouter extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById("outlet"));
    router.setRoutes([
      {path: '/', component: 'home-page'},
      {path: '/about', component: 'about-page'},
      {path: '/contact', component: 'contact-page'},
    ])
  }

  render() {
    return html` <div id="outlet"></div> `;
  }
}
