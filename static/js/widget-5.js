const URLactual = window.location.pathname;

if (URLactual == "/quienes-somos") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.remove();

        let main = document.querySelector("#root-app");

        let contenedor_principal = document.createElement("div");
        let texto_introduccion = document.createElement("div");
        let texto_introduccion_h1 = document.createElement("h1");
        let texto_introduccion_p_1 = document.createElement("p");
        let texto_introduccion_p_2 = document.createElement("p");

        let texto_personas = document.createElement("div");
        let texto_personas_izquierda = document.createElement("div");
        let texto_personas_izquierda_h2 = document.createElement("h2");
        let texto_personas_izquierda_h3 = document.createElement("h3");
        let texto_personas_izquierda_p_1 = document.createElement("p");
        let texto_personas_izquierda_p_2 = document.createElement("p");
        let texto_personas_derecha = document.createElement("div");
        let texto_personas_derecha_img = document.createElement("img");
        let texto_personas_derecha_h4 = document.createElement("h4");

        let texto_familia = document.createElement("div");
        let texto_familia_izquierda = document.createElement("div");
        let texto_familia_izquierda_img = document.createElement("img");
        let texto_familia_izquierda_h4 = document.createElement("h4");
        let texto_familia_derecha = document.createElement("div");
        let texto_familia_derecha_p_1 = document.createElement("p");
        let texto_familia_derecha_p_2 = document.createElement("p");
        let texto_familia_derecha_p_3 = document.createElement("p");

        let texto_productos = document.createElement("div");
        let texto_productos_izquierda = document.createElement("div");
        let texto_productos_izquierda_h2 = document.createElement("h2");
        let texto_productos_izquierda_h3 = document.createElement("h3");
        let texto_productos_izquierda_p_1 = document.createElement("p");
        let texto_productos_izquierda_p_2 = document.createElement("p");
        let texto_productos_derecha = document.createElement("div");
        let texto_productos_derecha_img = document.createElement("img");
        let texto_productos_derecha_h4 = document.createElement("h4");

        let texto_variedad = document.createElement("div");
        let texto_variedad_izquierda = document.createElement("div");
        let texto_variedad_izquierda_img = document.createElement("img");
        let texto_variedad_izquierda_h4 = document.createElement("h4");
        let texto_variedad_derecha = document.createElement("div");
        let texto_variedad_derecha_p_1 = document.createElement("p");
        let texto_variedad_derecha_p_2 = document.createElement("p");
        let texto_variedad_derecha_p_3 = document.createElement("p");

        let texto_final = document.createElement("div");
        let texto_final_h2 = document.createElement("h2");
        let texto_final_p = document.createElement("p");

        texto_introduccion_h1.textContent = "Somos...";
        texto_introduccion_p_1.textContent = "Somos una empresa joven, creada en diciembre del 2020 por un grupo de especialistas en el rubro con mas de 10 años de experiencia.";
        texto_introduccion_p_2.textContent = "Nos dedicamos a la importación y distribución de productos esenciales para el uso cotidiano. Actualmente manejamos 8 categorias en nuestra web, estas son: Belleza, Mascotas, Deporte, Cocina, Decohogar, Oficina, Infantil, y Esenciales";

        texto_personas_izquierda_h2.textContent = "Personas";
        texto_personas_izquierda_h3.textContent = "Con valor y dedicación";
        texto_personas_izquierda_p_1.textContent = "Somos un equipo de personas dedicadas a entregar el mejor servicio de venta y post venta en Esencial Shop.";
        texto_personas_izquierda_p_2.textContent = "Nos caracterizamos por la simpatía y compañerismo. Somos personas especialistas en nuestra área, comprometidos con nuestro trabajo y nuestros clientes. Siempre buscamos mejorar y crecer como personas y profesionales. Nuestro valor se basa en desarrollar todas las gestiones en torno a ustedes.";
        texto_personas_derecha_img.src = "https://iili.io/hDDRPs.png";
        texto_personas_derecha_h4.innerHTML = "Despachamos a <br> todo Chile";

        texto_familia_izquierda_img.src = "https://iili.io/hDD7KG.png";
        texto_familia_izquierda_h4.innerHTML = "Trabajamos en <br> familia";
        texto_familia_derecha_p_1.textContent = "La motivación es algo diario en nuestro ADN, trabajamos con metas, desafíos y plazos para mantener siempre activo a nuestro equipo."
        texto_familia_derecha_p_2.textContent = "Cada problema o inconveniente lo trabajamos como familia para sobrellevarlo, asimismo cuando hay celebraciones. Es un éxito compartido."
        texto_familia_derecha_p_3.textContent = "En Esencial shop buscamos estar a la vanguardia y en tendencia con los productos del momento. Siempre innovamos para que quienes visitan nuestra tienda se lleven algo novedoso, bonito y de calidad a su hogar.";

        texto_productos_izquierda_h2.textContent = "Nuestros productos";
        texto_productos_izquierda_h3.textContent = "y procesos";
        texto_productos_izquierda_p_1.textContent = "Nos especializamos en la importación, principalmente del comercio asiatico. Nuestros productos pasan por un proceso de selección especial en donde revisamos la utilidad, calidad y practicidad.";
        texto_productos_izquierda_p_2.textContent = "Nuestro fin es satisfacer, facilitar y embellecer los espacios de nuestros clientes. Buscamos la manera de tener los mejores artículos al mejor precio para que todos puedan acceder a ellos.";
        texto_productos_derecha_img.src = "https://iili.io/hDDYlf.png";
        texto_productos_derecha_h4.innerHTML = "Mas de 500 <br> productos activos";

        texto_variedad_izquierda_img.src = "https://iili.io/hDDaS4.png";
        texto_variedad_izquierda_h4.innerHTML = "Variedad en <br> colores y diseños";
        texto_variedad_derecha_p_1.textContent = "El proceso lo compone el equipo de calidad, logística y marketing para estar pendiente de cualquier detalle que pueda aparecer."
        texto_variedad_derecha_p_2.textContent = "Actualmente tenemos un aproximado de 500 productos activos en nuestra web, brindando diversidad de colores, diseños y variantes disponibles del mismo objeto.";
        texto_variedad_derecha_p_3.textContent = "Realizamos 4 importaciones al año, con el fin de ir renovando y supliendo las nuevas necesidades de nuestros clientes. Además de abarcar las distintas temporadas para entregar un artículo nuevo que se adapte a sus requerimientos."

        texto_final_h2.textContent = "Meta";
        texto_final_p.textContent = "Nuestra meta es clara: entregar siempre calidad, tendencia y servicio a quienes nos prefieren y han confiado en nosotros.";

        main.appendChild(contenedor_principal);
        contenedor_principal.appendChild(texto_introduccion);
        texto_introduccion.appendChild(texto_introduccion_h1);
        texto_introduccion.appendChild(texto_introduccion_p_1);
        texto_introduccion.appendChild(texto_introduccion_p_2);

        contenedor_principal.appendChild(texto_personas);
        texto_personas.appendChild(texto_personas_izquierda);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_h2);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_h3);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_p_1);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_p_2);
        texto_personas.appendChild(texto_personas_derecha);
        texto_personas_derecha.appendChild(texto_personas_derecha_img);
        texto_personas_derecha.appendChild(texto_personas_derecha_h4);

        contenedor_principal.appendChild(texto_familia);
        texto_familia.appendChild(texto_familia_izquierda);
        texto_familia_izquierda.appendChild(texto_familia_izquierda_img);
        texto_familia_izquierda.appendChild(texto_familia_izquierda_h4);
        texto_familia.appendChild(texto_familia_derecha);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_1);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_2);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_3);

        contenedor_principal.appendChild(texto_productos);
        texto_productos.appendChild(texto_productos_izquierda);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_h2);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_h3);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_p_1);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_p_2);
        texto_productos.appendChild(texto_productos_derecha);
        texto_productos_derecha.appendChild(texto_productos_derecha_img);
        texto_productos_derecha.appendChild(texto_productos_derecha_h4);

        contenedor_principal.appendChild(texto_variedad);
        texto_variedad.appendChild(texto_variedad_izquierda);
        texto_variedad_izquierda.appendChild(texto_variedad_izquierda_img);
        texto_variedad_izquierda.appendChild(texto_variedad_izquierda_h4);
        texto_variedad.appendChild(texto_variedad_derecha);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_1);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_2);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_3);

        contenedor_principal.appendChild(texto_final);
        texto_final.appendChild(texto_final_h2);
        texto_final.appendChild(texto_final_p);

        main.classList.add("fondo-quienes-somos");

        contenedor_principal.classList.add("contenedor-principal");
        texto_introduccion.classList.add("texto-introduccion");

        texto_personas.classList.add("texto-personas");
        texto_personas_izquierda.classList.add("texto-personas-izquierda");
        texto_personas_derecha.classList.add("texto-personas-derecha");

        texto_familia.classList.add("texto-familia");
        texto_familia_izquierda.classList.add("texto-familia-izquierda");
        texto_familia_derecha.classList.add("texto-familia-derecha");

        texto_productos.classList.add("texto-productos");
        texto_productos_izquierda.classList.add("texto-productos-izquierda");
        texto_productos_derecha.classList.add("texto-productos-derecha");

        texto_variedad.classList.add("texto-variedad");
        texto_variedad_izquierda.classList.add("texto-variedad-izquierda");
        texto_variedad_derecha.classList.add("texto-variedad-derecha");

        texto_final.classList.add("texto-final");

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.remove();

        let main = document.querySelector("#root-app");

        let contenedor_principal = document.createElement("div");
        let texto_introduccion = document.createElement("div");
        let texto_introduccion_h1 = document.createElement("h1");
        let texto_introduccion_p_1 = document.createElement("p");
        let texto_introduccion_p_2 = document.createElement("p");

        let texto_personas = document.createElement("div");
        let texto_personas_izquierda = document.createElement("div");
        let texto_personas_izquierda_h2 = document.createElement("h2");
        let texto_personas_izquierda_h3 = document.createElement("h3");
        let texto_personas_izquierda_p_1 = document.createElement("p");
        let texto_personas_izquierda_p_2 = document.createElement("p");
        let texto_personas_derecha = document.createElement("div");
        let texto_personas_derecha_img = document.createElement("img");
        let texto_personas_derecha_h4 = document.createElement("h4");

        let texto_familia = document.createElement("div");
        let texto_familia_izquierda = document.createElement("div");
        let texto_familia_izquierda_img = document.createElement("img");
        let texto_familia_izquierda_h4 = document.createElement("h4");
        let texto_familia_derecha = document.createElement("div");
        let texto_familia_derecha_p_1 = document.createElement("p");
        let texto_familia_derecha_p_2 = document.createElement("p");
        let texto_familia_derecha_p_3 = document.createElement("p");

        let texto_productos = document.createElement("div");
        let texto_productos_izquierda = document.createElement("div");
        let texto_productos_izquierda_h2 = document.createElement("h2");
        let texto_productos_izquierda_h3 = document.createElement("h3");
        let texto_productos_izquierda_p_1 = document.createElement("p");
        let texto_productos_izquierda_p_2 = document.createElement("p");
        let texto_productos_derecha = document.createElement("div");
        let texto_productos_derecha_img = document.createElement("img");
        let texto_productos_derecha_h4 = document.createElement("h4");

        let texto_variedad = document.createElement("div");
        let texto_variedad_izquierda = document.createElement("div");
        let texto_variedad_izquierda_img = document.createElement("img");
        let texto_variedad_izquierda_h4 = document.createElement("h4");
        let texto_variedad_derecha = document.createElement("div");
        let texto_variedad_derecha_p_1 = document.createElement("p");
        let texto_variedad_derecha_p_2 = document.createElement("p");
        let texto_variedad_derecha_p_3 = document.createElement("p");

        let texto_final = document.createElement("div");
        let texto_final_h2 = document.createElement("h2");
        let texto_final_p = document.createElement("p");

        texto_introduccion_h1.textContent = "Somos...";
        texto_introduccion_p_1.textContent = "Somos una empresa joven, creada en diciembre del 2020 por un grupo de especialistas en el rubro con mas de 10 años de experiencia.";
        texto_introduccion_p_2.textContent = "Nos dedicamos a la importación y distribución de productos esenciales para el uso cotidiano. Actualmente manejamos 8 categorias en nuestra web, estas son: Belleza, Mascotas, Deporte, Cocina, Decohogar, Oficina, Infantil, y Esenciales";

        texto_personas_izquierda_h2.textContent = "Personas";
        texto_personas_izquierda_h3.textContent = "Con valor y dedicación";
        texto_personas_izquierda_p_1.textContent = "Somos un equipo de personas dedicadas a entregar el mejor servicio de venta y post venta en Esencial Shop.";
        texto_personas_izquierda_p_2.textContent = "Nos caracterizamos por la simpatía y compañerismo. Somos personas especialistas en nuestra área, comprometidos con nuestro trabajo y nuestros clientes. Siempre buscamos mejorar y crecer como personas y profesionales. Nuestro valor se basa en desarrollar todas las gestiones en torno a ustedes.";
        texto_personas_derecha_img.src = "https://iili.io/hDDRPs.png";
        texto_personas_derecha_h4.innerHTML = "Despachamos a <br> todo Chile";

        texto_familia_izquierda_img.src = "https://iili.io/hDD7KG.png";
        texto_familia_izquierda_h4.innerHTML = "Trabajamos en <br> familia";
        texto_familia_derecha_p_1.textContent = "La motivación es algo diario en nuestro ADN, trabajamos con metas, desafíos y plazos para mantener siempre activo a nuestro equipo."
        texto_familia_derecha_p_2.textContent = "Cada problema o inconveniente lo trabajamos como familia para sobrellevarlo, asimismo cuando hay celebraciones. Es un éxito compartido."
        texto_familia_derecha_p_3.textContent = "En Esencial shop buscamos estar a la vanguardia y en tendencia con los productos del momento. Siempre innovamos para que quienes visitan nuestra tienda se lleven algo novedoso, bonito y de calidad a su hogar.";

        texto_productos_izquierda_h2.textContent = "Nuestros productos";
        texto_productos_izquierda_h3.textContent = "y procesos";
        texto_productos_izquierda_p_1.textContent = "Nos especializamos en la importación, principalmente del comercio asiatico. Nuestros productos pasan por un proceso de selección especial en donde revisamos la utilidad, calidad y practicidad.";
        texto_productos_izquierda_p_2.textContent = "Nuestro fin es satisfacer, facilitar y embellecer los espacios de nuestros clientes. Buscamos la manera de tener los mejores artículos al mejor precio para que todos puedan acceder a ellos.";
        texto_productos_derecha_img.src = "https://iili.io/hDDYlf.png";
        texto_productos_derecha_h4.innerHTML = "Mas de 500 <br> productos activos";

        texto_variedad_izquierda_img.src = "https://iili.io/hDDaS4.png";
        texto_variedad_izquierda_h4.innerHTML = "Variedad en <br> colores y diseños";
        texto_variedad_derecha_p_1.textContent = "El proceso lo compone el equipo de calidad, logística y marketing para estar pendiente de cualquier detalle que pueda aparecer."
        texto_variedad_derecha_p_2.textContent = "Actualmente tenemos un aproximado de 500 productos activos en nuestra web, brindando diversidad de colores, diseños y variantes disponibles del mismo objeto.";
        texto_variedad_derecha_p_3.textContent = "Realizamos 4 importaciones al año, con el fin de ir renovando y supliendo las nuevas necesidades de nuestros clientes. Además de abarcar las distintas temporadas para entregar un artículo nuevo que se adapte a sus requerimientos."

        texto_final_h2.textContent = "Meta";
        texto_final_p.textContent = "Nuestra meta es clara: entregar siempre calidad, tendencia y servicio a quienes nos prefieren y han confiado en nosotros.";

        main.appendChild(contenedor_principal);
        contenedor_principal.appendChild(texto_introduccion);
        texto_introduccion.appendChild(texto_introduccion_h1);
        texto_introduccion.appendChild(texto_introduccion_p_1);
        texto_introduccion.appendChild(texto_introduccion_p_2);

        contenedor_principal.appendChild(texto_personas);
        texto_personas.appendChild(texto_personas_izquierda);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_h2);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_h3);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_p_1);
        texto_personas_izquierda.appendChild(texto_personas_izquierda_p_2);
        texto_personas.appendChild(texto_personas_derecha);
        texto_personas_derecha.appendChild(texto_personas_derecha_img);
        texto_personas_derecha.appendChild(texto_personas_derecha_h4);

        contenedor_principal.appendChild(texto_familia);
        texto_familia.appendChild(texto_familia_izquierda);
        texto_familia_izquierda.appendChild(texto_familia_izquierda_img);
        texto_familia_izquierda.appendChild(texto_familia_izquierda_h4);
        texto_familia.appendChild(texto_familia_derecha);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_1);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_2);
        texto_familia_derecha.appendChild(texto_familia_derecha_p_3);

        contenedor_principal.appendChild(texto_productos);
        texto_productos.appendChild(texto_productos_izquierda);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_h2);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_h3);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_p_1);
        texto_productos_izquierda.appendChild(texto_productos_izquierda_p_2);
        texto_productos.appendChild(texto_productos_derecha);
        texto_productos_derecha.appendChild(texto_productos_derecha_img);
        texto_productos_derecha.appendChild(texto_productos_derecha_h4);

        contenedor_principal.appendChild(texto_variedad);
        texto_variedad.appendChild(texto_variedad_izquierda);
        texto_variedad_izquierda.appendChild(texto_variedad_izquierda_img);
        texto_variedad_izquierda.appendChild(texto_variedad_izquierda_h4);
        texto_variedad.appendChild(texto_variedad_derecha);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_1);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_2);
        texto_variedad_derecha.appendChild(texto_variedad_derecha_p_3);

        contenedor_principal.appendChild(texto_final);
        texto_final.appendChild(texto_final_h2);
        texto_final.appendChild(texto_final_p);

        main.classList.add("fondo-quienes-somos");

        contenedor_principal.classList.add("contenedor-principal");
        texto_introduccion.classList.add("texto-introduccion");

        texto_personas.classList.add("texto-personas");
        texto_personas_izquierda.classList.add("texto-personas-izquierda");
        texto_personas_derecha.classList.add("texto-personas-derecha");

        texto_familia.classList.add("texto-familia");
        texto_familia_izquierda.classList.add("texto-familia-izquierda");
        texto_familia_derecha.classList.add("texto-familia-derecha");

        texto_productos.classList.add("texto-productos");
        texto_productos_izquierda.classList.add("texto-productos-izquierda");
        texto_productos_derecha.classList.add("texto-productos-derecha");

        texto_variedad.classList.add("texto-variedad");
        texto_variedad_izquierda.classList.add("texto-variedad-izquierda");
        texto_variedad_derecha.classList.add("texto-variedad-derecha");

        texto_final.classList.add("texto-final");

        throw new Error("Error controlado");
    }
}