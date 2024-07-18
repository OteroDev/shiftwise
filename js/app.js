document.addEventListener('DOMContentLoaded', function() {
    var shadowHost = document.querySelector('#container');
    
    if (shadowHost) {
        var shadowRoot = shadowHost.shadowRoot;
        if (shadowRoot) {
            var logoElement = shadowRoot.querySelector('a#logo');
            if (logoElement) {
                logoElement.remove();
            } else {
                console.log("Elemento não encontrado dentro do shadow-root.");
            }
        } else {
            console.log("Shadow-root não encontrado.");
        }
    } else {
        console.log("Host do shadow-root não encontrado.");
    }
});
