const URLactual = window.location.pathname;
// const instagram = document.querySelector(".instagram-contenedor");
// const informacion = document.querySelector(".informacion-contenedor");
// const newsletter = document.querySelector(".banner-newsletter");
const instagramParent = document.getElementById('instagram-parent')

if (URLactual == "/") {
    // instagram.classList.toggle("invisible");
    // informacion.classList.toggle("invisible");
    // newsletter.classList.toggle("invisible");

    let instagram = document.createElement('div')
    instagram.classList = 'instagram-contenedor'
    instagram.innerHTML = `<div class="instagram-contenedor"><h2>¡Síguenos en instagram!</h2><iframesrc="https://cdn.lightwidget.com/widgets/e6d7de7308c55272831b619bb797f6b4.html"scrolling="no"allowtransparency="true"class="lightwidget-widget"style="width:100%;border:0;overflow:hidden;"></iframe</div>`

    instagramParent.appendChild(instagram)
}
