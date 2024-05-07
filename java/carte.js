const map = L.map('map').setView([48.8566, 2.3522], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

map.on('click', async function(e) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`);
    const data = await response.json();
    
    if (data.address && data.address.postcode) {
        const codePostal = data.address.postcode;
        console.log('Numéro de la commune:', codePostal); //affiche dans la console
        document.getElementById('affichecodepostal').textContent = `Numéro de la commune : ${codePostal}`; //affiche sur la page html
    } else {
        console.log('Aucune commune trouvée à cet emplacement.');
        document.getElementById('affichecodepostal').textContent = `Aucune commune trouvée à cet emplacement`;
    }
});


