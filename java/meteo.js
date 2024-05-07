let cp = document.getElementById("cpID")
let input = document.getElementById("code-postal")
let button = document.getElementById("recherche")
let codePostal = document.getElementById('CP')

function rechercher() {
    url1 = "https://geo.api.gouv.fr/communes?codePostal=" + input.value
    console.log(url1)

    
    fetch(url1)
        .then(response => response.json())
        .then(data => {
            dico = data[0]
            code_insee = dico['code']
        });  
}

button.addEventListener("click", function() {
    console.log(input.value)
    rechercher()
});

// Extraction du code postal
let code = data[0].codesPostaux[0];

// Affichage du code postal
console.log("Le code postal est : " + codePostal);






function caca() {
    url2 = "https://api.meteo-concept.com/api/forecast/daily?token=74bced3fe61aaa05a376807e90339cbd4ed1510c3d5275de613cddc70f48a1e2&insee=" + code
    console.log(url2)


    codePostal.addEventListener('input', () => {
        let CPsaisi = codePostal.value
        if (CPsaisi.length === 5) {
            console.log('valeur:' , CPSaisi)
        }
    }
    )
}
