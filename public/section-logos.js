import "./style.css";

export const section = () => {
  document.querySelector(".section").innerHTML = `
    <div class="container-fluid marcas">

<div>
    <div class="logo">
    <img class="img-logo" src="./img/images (1).png">
     </div>
<div>
    <h3 container-fluid text-center>Varias formas  de pago</h3>
     </div>
  

    <div class="logo">
    <img class="img-logo" src="./img/person.svg">
    </div>
<div>
    <h3 container-fluid text-center>Atencion personalizada</h3>
    </div>
    

    <div class="logo">
    <img  src="./img/megaphone.svg" class=" bi bi-megaphone img-logo">
    </div>
<div>
    <h3 container-fluid text-center>Promociones increibles</h3>
    </div>

    
    
    
    
    `;
}
