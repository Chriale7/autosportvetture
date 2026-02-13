// App.js - Legge cars.json da GitHub

let allCars = [];
let filteredCars = [];

// Load cars from cars.json
async function loadCars() {
    try {
        const response = await fetch('cars.json');
        if (!response.ok) {
            console.log('cars.json not found - no cars to display');
            allCars = [];
        } else {
            allCars = await response.json();
        }
    } catch (error) {
        console.log('Error loading cars:', error);
        allCars = [];
    }
    
    filteredCars = [...allCars];
    displayCars(filteredCars);
    updateCarsCount();
}

// Display cars
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
                    <div class="car-spec"><strong>Carburante:</strong> ${capitalizeFirst(car.carburante)}</div>
                    <div class="car-spec"><strong>Cambio:</strong> ${car.cambio}</div>
                    <div class="car-spec"><strong>Potenza:</strong> ${car.cv} CV</div>
                    <div class="car-spec"><strong>Tipo:</strong> ${capitalizeFirst(car.tipo)}</div>
                </div>
                <div class="car-actions" onclick="event.stopPropagation();">
                    <button class="btn btn-primary" onclick="contactAboutCar('${car.marca} ${car.modello}')">💬 WhatsApp</button>
                    <button class="btn btn-secondary" onclick="callAboutCar()">📞 Chiama</button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCarsCount(cars.length);
}

// Update cars count
function updateCarsCount(count) {
    const countElement = document.getElementById('carsCount');
    if (countElement && count !== undefined) {
        if (count === 0) {
            countElement.textContent = 'Nessuna auto disponibile';
        } else if (count === 1) {
            countElement.textContent = '1 auto disponibile';
        } else {
            countElement.textContent = `${count} auto disponibili`;
        }
    }
}

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Contact about car
function contactAboutCar(carName) {
    window.open(`https://wa.me/393400024151?text=${encodeURIComponent('Ciao! Sono interessato a: ' + carName)}`, '_blank');
}

// Call about car
function callAboutCar() {
    window.location.href = 'tel:+390399686292';
}

// Submit valuation form
function submitValuation(event) {
    event.preventDefault();
    alert('Richiesta inviata! Ti contatteremo presto per la valutazione.');
    event.target.reset();
}

// Submit contact form
function submitContact(event) {
    event.preventDefault();
    alert('Messaggio inviato! Ti risponderemo al più presto.');
    event.target.reset();
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Load on page ready
document.addEventListener('DOMContentLoaded', loadCars);
