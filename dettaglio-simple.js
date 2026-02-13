const carId = parseInt(new URLSearchParams(window.location.search).get('id'));
const cars = JSON.parse(localStorage.getItem('autosport_cars') || '[]');
const car = cars.find(c => c.id === carId);

if (!car) {
    document.body.innerHTML = '<div style="text-align:center;padding:100px;"><h2>Auto non trovata</h2><a href="index.html">← Torna al sito</a></div>';
} else {
    document.getElementById('carTitle').textContent = car.marca.toUpperCase() + ' ' + car.modello;
    document.getElementById('carPrice').textContent = '€' + car.prezzo.toLocaleString();
    document.title = car.marca.toUpperCase() + ' ' + car.modello + ' - Autosport';
    
    if (car.descrizione) {
        document.getElementById('descriptionBox').style.display = 'block';
        document.getElementById('carDescription').textContent = car.descrizione;
    }
    
    const mainImg = document.getElementById('mainImage');
    const thumbs = document.getElementById('thumbnails');
    
    if (car.images && car.images.length > 0) {
        mainImg.style.backgroundImage = `url('${car.images[0]}')`;
        
        car.images.forEach((img, i) => {
            const t = document.createElement('div');
            t.className = 'thumbnail' + (i === 0 ? ' active' : '');
            t.style.backgroundImage = `url('${img}')`;
            t.onclick = () => {
                mainImg.style.backgroundImage = `url('${img}')`;
                document.querySelectorAll('.thumbnail').forEach(x => x.classList.remove('active'));
                t.classList.add('active');
            };
            thumbs.appendChild(t);
        });
    }
    
    const specs = [
        {label: 'Anno', value: car.anno},
        {label: 'Km', value: car.km.toLocaleString() + ' km'},
        {label: 'Carburante', value: car.carburante.charAt(0).toUpperCase() + car.carburante.slice(1)},
        {label: 'Cambio', value: car.cambio},
        {label: 'Potenza', value: car.cv + ' CV'},
        {label: 'Posti', value: car.posti},
        {label: 'Tipo', value: car.tipo.charAt(0).toUpperCase() + car.tipo.slice(1)},
        {label: 'Garanzia', value: car.garantita ? 'Sì' : 'No'}
    ];
    
    const grid = document.getElementById('specsGrid');
    specs.forEach(s => {
        const d = document.createElement('div');
        d.className = 'spec-item';
        d.innerHTML = `<div class="spec-label">${s.label}</div><div class="spec-value">${s.value}</div>`;
        grid.appendChild(d);
    });
}

function contactAboutThisCar() {
    if (car) {
        const msg = `Ciao! Sono interessato a: ${car.marca.toUpperCase()} ${car.modello} - €${car.prezzo.toLocaleString()}`;
        window.open(`https://wa.me/393400024151?text=${encodeURIComponent(msg)}`, '_blank');
    }
}
