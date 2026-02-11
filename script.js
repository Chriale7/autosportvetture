// Database auto (simulato)
const carsDatabase = [
    {
        id: 1,
        marca: 'audi',
        modello: 'A4 Avant',
        tipo: 'station',
        anno: 2022,
        km: 35000,
        carburante: 'diesel',
        prezzo: 32990,
        cv: 190,
        cambio: 'Automatico',
        posti: 5,
        garantita: true,
        emoji: '🚗'
    },
    {
        id: 2,
        marca: 'bmw',
        modello: 'Serie 3',
        tipo: 'berlina',
        anno: 2021,
        km: 42000,
        carburante: 'benzina',
        prezzo: 29990,
        cv: 184,
        cambio: 'Automatico',
        posti: 5,
        garantita: true,
        emoji: '🚙'
    },
    {
        id: 3,
        marca: 'volkswagen',
        modello: 'T-Roc',
        tipo: 'suv',
        anno: 2023,
        km: 15000,
        carburante: 'benzina',
        prezzo: 27990,
        cv: 150,
        cambio: 'Manuale',
        posti: 5,
        garantita: true,
        emoji: '🚕'
    },
    {
        id: 4,
        marca: 'fiat',
        modello: '500X',
        tipo: 'suv',
        anno: 2022,
        km: 28000,
        carburante: 'ibrida',
        prezzo: 21990,
        cv: 120,
        cambio: 'Automatico',
        posti: 5,
        garantita: true,
        emoji: '🚐'
    },
    {
        id: 5,
        marca: 'ford',
        modello: 'Puma',
        tipo: 'suv',
        anno: 2023,
        km: 12000,
        carburante: 'ibrida',
        prezzo: 23990,
        cv: 125,
        cambio: 'Manuale',
        posti: 5,
        garantita: true,
        emoji: '🚛'
    },
    {
        id: 6,
        marca: 'mercedes',
        modello: 'Classe A',
        tipo: 'berlina',
        anno: 2021,
        km: 38000,
        carburante: 'diesel',
        prezzo: 28990,
        cv: 150,
        cambio: 'Automatico',
        posti: 5,
        garantita: true,
        emoji: '🚌'
    }
];

let filteredCars = [...carsDatabase];

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    displayCars(carsDatabase);
    setupSmoothScroll();
});

// Display auto
function displayCars(cars) {
    const grid = document.getElementById('carsGrid');
    
    if (cars.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 2em; margin-bottom: 15px;">😔 Nessuna auto trovata</h3>
                <p style="color: #6b7280; font-size: 1.1em;">Prova a modificare i filtri di ricerca</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image">
                <span style="font-size: 60px;">${car.emoji}</span>
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
                        <strong>Posti:</strong> ${car.posti}
                    </div>
                </div>
                <div class="car-actions">
                    <button class="btn btn-primary" onclick="contactAboutCar('${car.marca} ${car.modello}')">
                        📧 Info
                    </button>
                    <button class="btn btn-secondary" onclick="callAboutCar('${car.marca} ${car.modello}')">
                        📞 Chiama
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filtra auto
function filterCars() {
    const marca = document.getElementById('filterMarca').value.toLowerCase();
    const tipo = document.getElementById('filterTipo').value.toLowerCase();
    const carburante = document.getElementById('filterCarburante').value.toLowerCase();
    const anno = document.getElementById('filterAnno').value;
    
    filteredCars = carsDatabase.filter(car => {
        return (
            (!marca || car.marca === marca) &&
            (!tipo || car.tipo === tipo) &&
            (!carburante || car.carburante === carburante) &&
            (!anno || car.anno.toString() === anno)
        );
    });
    
    displayCars(filteredCars);
    
    // Scroll alla sezione auto
    document.getElementById('auto-vendita').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Mostra messaggio
    showNotification(`Trovate ${filteredCars.length} auto`, 'success');
}

// Contatto per auto specifica
function contactAboutCar(carName) {
    const message = `Sono interessato/a all'auto: ${carName}`;
    const whatsappUrl = `https://wa.me/393341234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function callAboutCar(carName) {
    window.location.href = 'tel:+393341234567';
}

// Form valutazione
function submitValuation(event) {
    event.preventDefault();
    showNotification('Richiesta inviata! Ti contatteremo entro 24 ore.', 'success');
    event.target.reset();
    
    // Scroll in alto
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form contatto
function submitContact(event) {
    event.preventDefault();
    showNotification('Messaggio inviato con successo! Ti risponderemo al più presto.', 'success');
    event.target.reset();
}

// Notifiche
function showNotification(message, type = 'info') {
    // Rimuovi notifiche esistenti
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
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
    
    // Aggiungi stile animazione
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

// Smooth scroll
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
                
                // Chiudi menu mobile se aperto
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

// Menu mobile
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Utility functions
function capitalizeFirst(str) {
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

// Chiudi menu mobile quando si clicca fuori
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileBtn.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Form validation helper
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Console welcome message
console.log('%c🚗 AutoPro - Sito Web Rivendita Auto', 
    'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cSito creato con HTML, CSS e JavaScript vanilla', 
    'font-size: 14px; color: #6b7280;');
console.log('%cPer personalizzare il sito, modifica i file index.html, style.css e script.js', 
    'font-size: 12px; color: #10b981;');

// Aggiungi effetto parallax leggero all'hero (opzionale)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});