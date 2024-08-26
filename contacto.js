import "./style.css";
import { navegacion } from "./nav.js";
import { header } from "./header.js";
import { section } from "./section-logos.js";
import { sectionMarcas } from "./section-marcas-module.js";
import { footer } from "./footer.js";

document.querySelector("#app-contacto").innerHTML = `

<div class="container-fluid">
<div class=" container-fluid navegacion">
  </div>  
  
  <div class="header">
  
  </div>
  <div class="container-inframe">
  <div class="embed-instagram container-fluid">
  <iframe width="420" height="440" src="https://www.instagram.com/adagio.sur/embed/" frameborder="0"></iframe>
  </div>
  
  </div>
    
  <div class="section-maps">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6279.286618473458!2d-57.578113597888255!3d-38.10196558556517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e1a01956c5a5%3A0x95843dc6d1acd303!2sAdagio%20Sur!5e0!3m2!1ses-419!2sar!4v1724635507156!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>


  <div class="container-fluid formulario">
    <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Tu Nombre</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre Completo">
</div>

<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre@ejemplo.com">
</div>

<div class="mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Texto</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="submit" class="btn btn-primary">Enviar</button>
  </div>



</div>
<div class="footer">
</div>
  </div>
`;
navegacion();
header();
// section();

footer();
