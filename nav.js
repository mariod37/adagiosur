import "./style.css";

export const navegacion =() => {
  document.querySelector(".navegacion").innerHTML = `
  <nav class="navbar fixed-top">
 
  <div class="container-fluid">
    <a href="index.html"><img src="./img/ADAGIO-SUR-NEGRO-160x59.png"class="navbar-brand logo-adagio">
    <div class="social">

    <a href="https://www.facebook.com/suradagio/" target="_blank"> <img src="./img/facebook.svg"> </a>
    
    <a href="https://www.instagram.com/adagio.sur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="./img/instagram.svg"></a>
    <img src="./img/envelope.svg">
    <a
              href="https://wa.me/+542236228999?"
              target="_blank"
              >
              <img src="./img/whatsapp.svg">
              </a>

    </div>

    <button class="navbar-toggler boton-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end text-bg" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
         
        </ul>
        
      </div>
    </div>
  </div>
</nav>
 `;
}