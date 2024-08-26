import "./style.css";
export const header = () => {
  document.querySelector(".header").innerHTML = `

    <div class="caontainer-fluid" >
<img class=" container-fluid img-header" src="./img/header-hero.jpg">

<div class="card-img-overlay container-fluid ">

<h1 class="text-center">Distribuidora Artistica <br>
<span> Integral</span></h1>

<p class="text-center">Más de 15 años distribuyendo insumos<br>
de calidad a todo el país.</p>

<div class="btn-catalogo">
<a href="https://drive.google.com/drive/folders/1i-18uEL5pZ74Iyf0mEI37TlsIxwK1pSG" target="blank"><button class="boton">Catalogos</button>
</div>

</div>

<p class="contenido-p  ">En Adagio Sur Distribuidora podés encontrar la tranquilidad de estar asesorado personalmente por nuestro equipo profesional todo el año. Sin automatizaciones ni robots, somos una empresa que crece junto a nuestros clientes y estamos disponibles para cumplir con tus necesidades de la mejor manera. Un equipo con más de 15 años de experiencia, radicado en Mar del Plata, pero acercando a toda la Argentina productos de artística a precios y calidad excelentes para el mercado, sobresaliendo por nuestra calidez y la confianza que caracteriza la gran familia que somos junto a las marcas de prestigio que representamos!</p>


`;
}
