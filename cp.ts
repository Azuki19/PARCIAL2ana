import styles from './cp.css'

export enum MainComponentAttributes {
  'uid' = 'uid',
  'name' = 'name',
  'image' = 'image',

}

class MainComponent extends HTMLElement {
  uid? : number;
  name? : string;
  image? : string;

  constructor () {
    super ();
    this.attachShadow({mode: 'open'})
  }

  ConnectedCallback (){
    this.render();
  }

  static get ObservedAttributes(){
    const attrs: Record<MainComponentAttributes, null> = {
      uid : null,
      name : null,
      image : null,
    }

    return Object.keys (attrs);

  }

  attributeChangedCallback (propName: MainComponentAttributes, oldValue: string | undefined, newValue: string | undefined ) {
    switch (propName) {

      case MainComponentAttributes.uid
      this.uid = newValue? Number (newValue): undefined
      break;

      default:
        this[propName] = newValue;
        break

    }

    this.render ();

  }

  render (){
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      `
    }

    const MainComponentCss = this.ownerDocument.createElement("style");
    MainComponentCss.innerHTML = styles;
    this.shadowRoot?.appendChild(MainComponentCss);

  }


}

customElements.define('main-component', MainComponent);
export default MainComponent;

