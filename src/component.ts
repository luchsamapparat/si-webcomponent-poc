import template from './component.html';

export class FancyButton extends HTMLElement {

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
           
        const p = document.createElement('p');
        p.innerHTML = template;
        const button = p.querySelector('button')!;
        
        button.innerText = 'Click me';
        button.addEventListener('click', () => alert('yay'));
        
        shadowRoot.appendChild(p);
    }

}

window.customElements.define('fancy-button', FancyButton);