/**
 * Code de gestion du focus des champs de saisie
 */

(function () {

    // Détection de valeur dans les champs de saisie
    document.querySelectorAll('.input100').forEach(function (input) {
        input.addEventListener('blur', function () {
            // On vérifie si l'utilisateur a saisie quelque chose
            if (this.value.trim() !== "") {
                /* S'il a saisi une valeur, on ajoute la classe has-val à l'input 
                 pour empêcher que le libellé ne redescende */
                this.classList.add('has-val');
            }
            else {
                /* Sinon si le champ de saisie ne contient rien, 
                on retire la classe has-val à l'input pour faire redescendre le libellé */
                this.classList.remove('has-val');
            }
        })
    })
})();