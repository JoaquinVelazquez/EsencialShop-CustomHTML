const URLactual = window.location.pathname;

if(document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/hw5YP4.png';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';
    
    const parent = document.querySelector('.ui-search-toolbar');
    
    if(URLactual == '/deportes/') {
        if(parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }
    
        throw new Error("Error controlado");
    }   
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/hw5YP4.png';
    
    const parent = document.querySelector('.ui-search-results');
    
    if(URLactual == '/deportes/') {
        if(parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }
    
        throw new Error("Error controlado");
    }
}
