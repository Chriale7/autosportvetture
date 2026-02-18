// Dettaglio - Legge da cars.json

const carId = parseInt(new URLSearchParams(window.location.search).get('id'));
let currentImageIndex = 0;
let allImages = [];

async function loadCarDetail() {
    try {
        const response = await fetch('cars.json');
        if (!response.ok) {
            showError();
            return;
        }
        
        const cars = await response.json();
        const car = cars.find(c => c.id === carId);
        
        if (!car) {
            showError();
            return;
        }
        
        // Display car
        document.getElementById('carTitle').textContent = car.marca.toUpperCase() + ' ' + car.modello;
        document.getElementById('carPrice').textContent = '€' + car.prezzo.toLocaleString();
        document.title = car.marca.toUpperCase() + ' ' + car.modello + ' - Autosport';
        
        // Description
        if (car.descrizione) {
            document.getElementById('descriptionBox').style.display = 'block';
            document.getElementById('carDescription').textContent = car.descrizione;
        }
        
        // Images
        const mainImg = document.getElementById('mainImage');
        const thumbs = document.getElementById('thumbnails');
        
        if (car.images && car.images.length > 0) {
            allImages = car.images;
            currentImageIndex = 0;
            mainImg.style.backgroundImage = `url('${car.images[0]}')`;
            
            car.images.forEach((img, i) => {
                const t = document.createElement('div');
                t.className = 'thumbnail' + (i === 0 ? ' active' : '');
                t.style.backgroundImage = `url('${img}')`;
                t.onclick = () => {
                    currentImageIndex = i;
                    mainImg.style.backgroundImage = `url('${img}')`;
                    document.querySelectorAll('.thumbnail').forEach(x => x.classList.remove('active'));
                    t.classList.add('active');
                };
                thumbs.appendChild(t);
            });
        }
        
        // Specs
        const specs = [
            {label: 'Anno', value: car.anno},
            {label: 'Km', value: car.km.toLocaleString() + ' km'},
            {label: 'Carburante', value: capitalizeFirst(car.carburante)},
            {label: 'Cambio', value: car.cambio},
            {label: 'Potenza', value: car.cv + ' CV'},
            {label: 'Posti', value: car.posti},
            {label: 'Tipo', value: capitalizeFirst(car.tipo)},
            {label: 'Garanzia', value: car.garantita ? 'Sì' : 'No'}
        ];
        
        const grid = document.getElementById('specsGrid');
        specs.forEach(s => {
            const d = document.createElement('div');
            d.className = 'spec-item';
            d.innerHTML = `<div class="spec-label">${s.label}</div><div class="spec-value">${s.value}</div>`;
            grid.appendChild(d);
        });
        
    } catch (error) {
        console.error('Error:', error);
        showError();
    }
}

function showError() {
    document.querySelector('.detail-container').innerHTML = '<div style="text-align: center; padding: 100px;"><h2>Auto non trovata</h2><a href="index.html">← Torna al sito</a></div>';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function contactAboutThisCar() {
    window.open(`https://wa.me/393400024151?text=${encodeURIComponent('Ciao! Sono interessato a questa auto')}`, '_blank');
}

function prevImage() {
    if (allImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    updateMainImage();
}

function nextImage() {
    if (allImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    updateMainImage();
}

function updateMainImage() {
    const mainImg = document.getElementById('mainImage');
    mainImg.style.backgroundImage = `url('${allImages[currentImageIndex]}')`;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((t, i) => {
        if (i === currentImageIndex) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });
}

loadCarDetail();
