const menu = document.querySelector(".menu-js");
const navToggle = document.querySelector(".nav-custom");
const arrow = document.querySelector(".arrow");

menu.addEventListener("click", () => {
    arrow.classList.add("move-down");
  navToggle.classList.toggle("open-js");
  arrow.classList.toggle("move-up");
});

const home = document.querySelector('#home');

const headerInner = `
        <div class="logo-title">
            <a href="${home ? '' : 'index.html'}#header">
                <img src="img/logo.png" alt="logo">
            </a>
            <h1>Green Solutions</h1>
        </div>
`;

const navInner = `
        <ul>
            <li>
                <i class="fa fa-home" aria-hidden="true"></i><a href="${home ? '' : 'index.html'}#header" class="hover" >Inicio</a>
            </li>
            <li>
                <i class="fa fa-bolt" aria-hidden="true"></i><a href="${home ? '' : 'index.html'}#about" class="hover" >Sobre nosotros</a>
            </li>
            <li>
               <i class="fa fa-bolt" aria-hidden="true"></i> <a href="contacto.html" class="hover" >Contacto</a>
            </li>
            <li>
                <i class="fa fa-bolt" aria-hidden="true"></i><a href="sucursales.html" class="hover" >Sucursales</a>
            </li>
        </ul>
`;

const footerInner = `
        <a href="https://jaco9419.github.io/Portfolio/" class="hover" target="_blank">Jorge Caceres &copy</a>
        <a href="https://github.com/jaco9419" class="hover" target="_blank"><i class="fab fa-github"></i></a>
`;

const header = document.querySelector('#header');
header.innerHTML = headerInner;

const nav = document.querySelector(".nav-custom");
nav.innerHTML = navInner;

const footer = document.querySelector('.footer');
footer.innerHTML = footerInner;

