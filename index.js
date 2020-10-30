class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="main-nav">
        <ul>
          <li>
            <a href="join.html">Join</a>
          </li>
          <li>
            <a href="news.html">News</a>
          </li>
          <li>
            <a href="games.html">Games</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="form.html">Form</a>
          </li>
          <li>
            <a href="indexOld.html">Old Home</a>
          </li>
      </nav>`;
  }
}
window.customElements.define("nav-bar", NavBar);
