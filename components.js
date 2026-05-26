// components.js

class NeoCard extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized) return;
    this.dataset.initialized = "true";

    const interactive = this.hasAttribute('interactive');
    const header = this.getAttribute('header');
    const headerBg = this.getAttribute('header-bg');
    
    this.classList.add('neo-card');
    if (interactive) {
      this.classList.add('interactive');
    }
    
    // Check for custom header element first
    const customHeader = this.querySelector('[slot="header"]');
    let headerNode = null;
    
    if (customHeader) {
      headerNode = document.createElement('div');
      headerNode.className = 'neo-card-header';
      if (headerBg) {
        headerNode.style.backgroundColor = headerBg;
      }
      while (customHeader.firstChild) {
        headerNode.appendChild(customHeader.firstChild);
      }
      customHeader.remove();
    } else if (header) {
      headerNode = document.createElement('div');
      headerNode.className = 'neo-card-header';
      if (headerBg) {
        headerNode.style.backgroundColor = headerBg;
      }

      const title = document.createElement('span');
      title.className = 'neo-card-title';
      title.textContent = header;
      headerNode.appendChild(title);
    }
    
    // Save original children into body
    const bodyNode = document.createElement('div');
    bodyNode.className = 'neo-card-body';
    while (this.firstChild) {
      bodyNode.appendChild(this.firstChild);
    }
    
    // Append header first, then body
    if (headerNode) {
      this.appendChild(headerNode);
    }
    this.appendChild(bodyNode);
  }
}

customElements.define('neo-card', NeoCard);
