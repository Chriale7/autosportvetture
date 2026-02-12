// Frontend Public App - Autosport

let allCars = [];
let filteredCars = [];

// Load cars from localStorage
function loadCars() {
    const cars = localStorage.getItem('autosport_cars');
    allCars = cars ? JSON.parse(cars) : [];
    filteredCars = [...allCars];
    displayCars(filteredCars);
    updateCarsCount();
}

// Display cars
function displayCars(cars) {
    const grid = document.getElementById('carsGrid');
    const noMessage = document.getElementById('noCarsMessage');
    
    if (!grid) return;
    
    if (cars.length === 0) {
        grid.innerHTML = '';
        noMessage.style.display = 'block';
        return;
    }
    
    noMessage.style.display = 'none';
    
    grid.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image">
                <span style="font-size: 60px;">${car.emoji || '🚗'}</span>
                ${car.garantita ? '<div class="car-badge">✓ Garantita</div>' : ''}
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.marca.toUpperCase()} ${car.modello}</h3>
                <div class="car-price">€${car.prezzo.toLocaleString()}</div>
                <div class="car-specs">
                    <div class="car-spec">
                        <strong>Anno:</strong> ${car.anno}
                    </div>
                    <div class="car-spec">
                        <strong>Km:</strong> ${car.km.toLocaleString()}
                    </div>
                    <div class="car-spec">
                        <strong>Carburante:</strong> ${capitalizeFirst(car.carburante)}
                    </div>
                    <div class="car-spec">
                        <strong>Cambio:</strong> ${car.cambio}
                    </div>
                    <div class="car-spec">
                        <strong>Potenza:</strong> ${car.cv} CV
                    </div>
                    <div class="car-spec">
                        <strong>Tipo:</strong> ${capitalizeFirst(car.tipo)}
                    </div>
                </div>
                ${car.descrizione ? `<p class="car-description">${car.descrizione}</p>` : ''}
                <div class="car-actions">
                    <button class="btn btn-primary" onclick="contactAboutCar('${car.marca} ${car.modello}')">
                        💬 Contattaci
                    </button>
                    <button class="btn btn-secondary" onclick="callAboutCar()">
                        📞 Chiama
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter cars
function filterCars() {
    const marca = document.getElementById('filterMarca')?.value.toLowerCase() || '';
    const anno = document.getElementById('filterAnno')?.value || '';
    const tipo = document.getElementById('filterTipo')?.value.toLowerCase() || '';
    const carburante = document.getElementById('filterCarburante')?.value.toLowerCase() || '';
    
    filteredCars = allCars.filter(car => {
        const matchMarca = !marca || car.marca.toLowerCase() === marca;
        const matchAnno = !anno || car.anno.toString() === anno;
        const matchTipo = !tipo || car.tipo === tipo;
        const matchCarburante = !carburante || car.carburante === carburante;
        
        return matchMarca && matchAnno && matchTipo && matchCarburante;
    });
    
    displayCars(filteredCars);
    updateCarsCount();
    
    // Scroll to results
    const section = document.getElementById('auto-vendita');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Update cars count
function updateCarsCount() {
    const countElement = document.getElementById('carsCount');
    if (countElement) {
        if (filteredCars.length === 0) {
            countElement.textContent = 'Nessuna auto trovata';
        } else if (filteredCars.length === allCars.length) {
            countElement.textContent = `${allCars.length} auto disponibili`;
        } else {
            countElement.textContent = `${filteredCars.length} auto trovate su ${allCars.length} totali`;
        }
    }
}

// Contact about specific car
function contactAboutCar(carName) {
    const message = `Ciao! Sono interessato/a all'auto: ${carName}`;
    const whatsappUrl = `https://wa.me/393400024151?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Call about car
function callAboutCar() {
    window.location.href = 'tel:+390399686292';
}

// Submit valuation form
function submitValuation(event) {
    event.preventDefault();
    showNotification('Richiesta inviata! Ti contatteremo al più presto.', 'success');
    event.target.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Smooth scroll setup
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu
                const navMenu = document.getElementById('navMenu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                // Update active nav
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Notification
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        ">
            <strong>${type === 'success' ? '✓' : 'ℹ'}</strong> ${message}
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Utility
function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileBtn?.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCars();
    setupSmoothScroll();
    
    // Auto-refresh cars every 5 seconds (to sync with admin changes)
    setInterval(() => {
        loadCars();
    }, 5000);
});