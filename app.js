// App.js - Sito Pubblico Autosport

let allCars = [];

function loadCars() {
    allCars = JSON.parse(localStorage.getItem('autosport_cars') || '[]');
    displayCars(allCars);
}

function displayCars(cars) {
    const grid = document.getElementById('carsGrid');
    const noMsg = document.getElementById('noCarsMessage');
    
    if (!grid) return;
    
    if (cars.length === 0) {
        grid.innerHTML = '';
        if (noMsg) noMsg.style.display = 'block';
        return;
    }
    
    if (noMsg) noMsg.style.display = 'none';
    
    grid.innerHTML = cars.map(car => `
        <div class="car-card" onclick="window.location.href='dettaglio.html?id=${car.id}'" style="cursor: pointer;">
            <div class="car-image" style="background-image: url('${car.images[0] || ''}'); background-size: cover; background-position: center; height: 200px;"></div>
            <div class="car-info">
                <h3 class="car-title">${car.marca.toUpperCase()} ${car.modello}</h3>
                <div class="car-price">€${car.prezzo.toLocaleString()}</div>
                <div class="car-specs">
                    <div class="car-spec"><strong>Anno:</strong> ${car.anno}</div>
                    <div class="car-spec"><strong>Km:</strong> ${car.km.toLocaleString()}</div>
                    <div class="car-spec"><strong>Carburante:</strong> ${car.carburante.charAt(0).toUpperCase() + car.carburante.slice(1)}</div>
                    <div class="car-spec"><strong>Cambio:</strong> ${car.cambio}</div>
                    <div class="car-spec"><strong>Potenza:</strong> ${car.cv} CV</div>
                    <div class="car-spec"><strong>Tipo:</strong> ${car.tipo.charAt(0).toUpperCase() + car.tipo.slice(1)}</div>
                </div>
                <div class="car-actions" onclick="event.stopPropagation();">
                    <button class="btn btn-primary" onclick="contactAboutCar('${car.marca} ${car.modello}')">💬 Contattaci</button>
                    <button class="btn btn-secondary" onclick="window.location.href='tel:+390399686292'">📞 Chiama</button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCarsCount(cars.length);
}

function filterCars() {
    const marca = document.getElementById('filterMarca')?.value.toLowerCase() || '';
    const anno = document.getElementById('filterAnno')?.value || '';
    const tipo = document.getElementById('filterTipo')?.value || '';
    const carburante = document.getElementById('filterCarburante')?.value || '';
    
    const filtered = allCars.filter(car => {
        return (!marca || car.marca === marca) &&
               (!anno || car.anno.toString() === anno) &&
               (!tipo || car.tipo === tipo) &&
               (!carburante || car.carburante === carburante);
    });
    
    displayCars(filtered);
}

function updateCarsCount(count) {
    const el = document.getElementById('carsCount');
    if (el) el.textContent = count + ' auto disponibili';
}

function contactAboutCar(carName) {
    window.open(`https://wa.me/393400024151?text=${encodeURIComponent('Ciao! Sono interessato a: ' + carName)}`, '_blank');
}

function submitValuation(e) {
    e.preventDefault();
    alert('Richiesta inviata! Ti contatteremo presto.');
    e.target.reset();
}

function toggleMobileMenu() {
    document.getElementById('navMenu')?.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', loadCars);
