let input = document.getElementById("code-postal")
let button = document.getElementById("recherche")
button.addEventListener("click", function() {
    console.log(input.value)
});

let codePostal = document.getElementById('CP')
codePostal.addEventListener('input', () => {
    let CPsaisi = codePostal.value
    if (CPsaisi.length === 5) {
        console.log('valeur:' , CPSaisi))
    }
}
