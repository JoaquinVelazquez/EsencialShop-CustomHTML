
var flechaDecohogar = document.querySelector(".decohogar-flecha-mobile");
var subcategoriaDecohogar = document.querySelector(".subcategoria-decohogar");
let cohogarRemoved = true
let decohogarParent = document.getElementById('decohogar-parent')
let newDecohogar = document.createElement('div')

flechaDecohogar.addEventListener("click", function(){
    if(cohogarRemoved){
        newDecohogar.classList = 'subcategorias','subcategoria-decohogar' 
        newDecohogar.innerHTML = `<ul><li><a href="/decohogar-adornos-y-decoraci%C3%B3n">Adornos y Decoración</a></li><li><a href="/decohogar-organizacion-y-limpieza">Organización y Limpieza</a></li><li><a href="/decohogar-jardin-y-aire-libre">Jardín y Aire Libre</a></li><li><a href="/decohogar">Ver Todo</a></li></ul>`
    
        decohogarParent.appendChild(newDecohogar)
        cohogarRemoved = false
    }else{
        newDecohogar.remove()
        cohogarRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////
var flechacocina = document.querySelector(".cocina-flecha-mobile");
var subcategoriacocina = document.querySelector(".subcategoria-cocina");
let cocinaRemoved = true
let cocinaParent = document.getElementById('cocina-parent')
let newCocina = document.createElement('div')

flechacocina.addEventListener("click", function(){
    if(cocinaRemoved){
        newCocina.classList = 'subcategorias', 'subcategoria-cocina'
        newCocina.innerHTML = `<div class="subcategorias subcategoria-cocina"><ul><li><a href="/cocina-organizaci%C3%B3n">Organización</a></li><li><a href="/cocina-utensilios">Utensillos</a></li><li><a href="/cocina">Ver Todo</a></li></ul></div>`
    
        cocinaParent.appendChild(newCocina)
        cocinaRemoved = false
    }else{
        newCocina.remove()
        cocinaRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////


var flechadeporte = document.querySelector(".deporte-flecha-mobile");
var subcategoriadeporte = document.querySelector(".subcategoria-deporte");
let deporteRemoved = true
let deporteParent = document.getElementById('deporte-parent')
let newDeporte = document.createElement('div')

flechadeporte.addEventListener("click", function(){
    if(deporteRemoved){
        newDeporte.classList = 'subcategorias', 'subcategoria-deporte'
        newDeporte.innerHTML = `<div class="subcategorias subcategoria-deporte"><ul><li><a href="/deporte-accesorios">Accesorios</a></li><li><a href="/gym-en-casa">Gym en casa</a></li><li><a href="/deporte-pesas-y-mancuernas">Pesas y Mancuernas</a></li><li><a href="/deporte">Ver Todo</a></li></ul></div>`
    
        deporteParent.appendChild(newDeporte)
        deporteRemoved = false
    }else{
        newDeporte.remove()
        deporteRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////
var flechamascota = document.querySelector(".mascota-flecha-mobile");
var subcategoriamascota = document.querySelector(".subcategoria-mascota");
let mascotaRemoved = true
let mascotaParent = document.getElementById('mascotas-parent')
let newMascota = document.createElement('div')

flechamascota.addEventListener("click", function(){
    if(mascotaRemoved){
        newMascota.classList = 'subcategorias', 'subcategoria-mascota'
        newMascota.innerHTML = `<div class="subcategorias subcategoria-mascota"><ul><li><a href="/mascotas-casas-y-camas">Casas y Camas</a></li><li><a href="/mascotas-higiene-y-cuidado">Higiene y Cuidados</a></li><li><a href="/mascotas-entretenci%C3%B3n">Entretención</a></li><li><a href="/mascotas-paseo">Paseo</a></li><li><a href="/mascotas-platos-y-dispensadores">Platos y Dispensadores</a></li><li><a href="/mascotas-rascadores">Rascadores</a></li><li><a href="/mascotas">Ver Todo</a></li></ul></div>`
    
        mascotaParent.appendChild(newMascota)
        mascotaRemoved = false
    }else{
        newMascota.remove()
        mascotaRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////
var flechainfantil = document.querySelector(".infantil-flecha-mobile");
var subcategoriainfantil = document.querySelector(".subcategoria-infantil");
let infantilRemoved = true
let infantilParent = document.getElementById('infantil-parent')
let newInfantil = document.createElement('div')

flechainfantil.addEventListener("click", function(){
    if(infantilRemoved){
        newInfantil.classList = 'subcategorias', 'subcategoria-infantil'
        newInfantil.innerHTML = `<div class="subcategorias subcategoria-infantil"><ul><li><a href="/infantil-accesorios">Accesorios</a></li><li><a href="/infantil-bebes">Bebés</a></li><li><a href="/infantil-juguetes">Juguetes</a></li><li><a href="/infantil-mochilas">Mochilas</a></li><li><a href="/infantil-vasos-y-botellas">Vasos y Botellas</a></li><li><a href="/infantil">Ver Todo</a></li></ul></div>`
    
        infantilParent.appendChild(newInfantil)
        infantilRemoved = false
    }else{
        newInfantil.remove()
        infantilRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////
var flechabelleza = document.querySelector(".belleza-flecha-mobile");
var subcategoriabelleza = document.querySelector(".subcategoria-belleza");
let bellezaRemoved = true
let bellezaParent = document.getElementById('belleza-parent')
let newBelleza = document.createElement('div')

flechabelleza.addEventListener("click", function(){
    if(bellezaRemoved){
        newBelleza.classList = 'subcategorias', 'subcategoria-belleza'
        newBelleza.innerHTML = `<div class="subcategorias subcategoria-belleza"><ul><li><a href="/belleza-accesorios">Accesorios</a></li><li><a href="/belleza-maqullaje">Maquillaje</a></li><li><a href="/belleza-spa">Spa</a></li><li><a href="/belleza">Ver Todo</a></li></ul></div>`
    
        bellezaParent.appendChild(newBelleza)
        bellezaRemoved = false
    }else{
        newBelleza.remove()
        bellezaRemoved = true
    }
})
////////////////////////////////////////////////////////////////////////////////////
var flechapapeleria = document.querySelector(".papeleria-flecha-mobile");
var subcategoriapapeleria = document.querySelector(".subcategoria-papeleria");
let papeleriaRemoved = true
let papeleriaParent = document.getElementById('escritorio-parent')
let newPapeleria = document.createElement('div')

flechapapeleria.addEventListener("click", function(){
    if(papeleriaRemoved){
        newPapeleria.classList = 'subcategorias', 'subcategoria-papeleria'
        newPapeleria.innerHTML = `<div class="subcategorias subcategoria-papeleria"><ul><li><a href="/escritorio-gamer">Gamer</a></li><li><a href="/escritorio-papeleria">Papelería</a></li><li><a href="/escritorio">Ver Todo</a></li></ul></div>`
    
        papeleriaParent.appendChild(newPapeleria)
        papeleriaRemoved = false
    }else{
        newPapeleria.remove()
        papeleriaRemoved = true
    }
})
