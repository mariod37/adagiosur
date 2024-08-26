import "./style.css";
import { navegacion } from "./nav.js";
import { header } from "./header.js";
import { section } from "./section-logos.js";
import { sectionMarcas } from "./section-marcas-module.js";
import { footer } from "./footer.js";

document.querySelector("#app").innerHTML = `

<div class="container-fluid">
<div class=" container-fluid navegacion">
  </div>  
  
  <div class="header">
  
  </div>
    
  <div class="section">
  </div>

<div class="section-marcas">

</div>
<div class="footer">
</div>
  </div>
`;
navegacion();
header();
section();
sectionMarcas();
footer();
