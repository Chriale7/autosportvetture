// Admin Login and Management System

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdminCars();
        updateStats();
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple auth (in produzione usare un sistema più sicuro)
    if (username === 'admin' && password === 'autosport2024') {
        localStorage.setItem('adminLoggedIn', 'true');
        showNotification('Login effettuato con successo!', 'success');
        setTimeout(() => {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('adminPanel').style.display = 'block';
            loadAdminCars();
            updateStats();
        }, 500);
    } else {
        showNotification('Username o password errati!', 'error');
    }
}

// Logout
function logout() {
    if (confirm('Sei sicuro di voler uscire?')) {
        localStorage.removeItem('adminLoggedIn');
        location.reload();
    }
}

// Get all cars from localStorage
function getAllCars() {
    const cars = localStorage.getItem('autosport_cars');
    return cars ? JSON.parse(cars) : [];
}

// Save all cars to localStorage
function saveAllCars(cars) {
    localStorage.setItem('autosport_cars', JSON.stringify(cars));
}

// Load cars in admin panel
function loadAdminCars() {
    const cars = getAllCars();
    const container = document.getElementById('adminCarsList');
    
    if (cars.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #6b7280;">
                <p style="font-size: 1.2em;">📭 Nessuna auto inserita</p>
                <p>Clicca su "Aggiungi Nuova Auto" per iniziare</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cars.map(car => `
        <div class="car-item">
            <div class="car-thumb" style="${car.image ? `background-image: url('${car.image}'); background-size: cover; background-position: center;` : ''}">${car.image ? '' : (car.emoji || '🚗')}</div>
            <div class="car-details">
                <h4>${car.marca.toUpperCase()} ${car.modello}</h4>
                <p>${car.anno} • ${car.km.toLocaleString()} km • ${capitalizeFirst(car.carburante)} • ${car.cambio}</p>
                <p class="car-price">€${car.prezzo.toLocaleString()}</p>
            </div>
            <div class="car-actions">
                <button class="btn-edit" onclick="editCar(${car.id})">✏️ Modifica</button>
                <button class="btn-delete" onclick="deleteCar(${car.id})">🗑️ Elimina</button>
            </div>
        </div>
    `).join('');
}

// Update statistics
function updateStats() {
    const cars = getAllCars();
    
    // Total cars
    document.getElementById('totalCars').textContent = cars.length;
    
    // Average price
    if (cars.length > 0) {
        const avgPrice = cars.reduce((sum, car) => sum + car.prezzo, 0) / cars.length;
        document.getElementById('avgPrice').textContent = '€' + Math.round(avgPrice).toLocaleString();
    }
    
    // Newest year
    if (cars.length > 0) {
        const newestYear = Math.max(...cars.map(car => car.anno));
        document.getElementById('newestYear').textContent = newestYear;
    }
}

// Open modal to add new car
function openAddCarModal() {
    document.getElementById('modalTitle').textContent = '➕ Aggiungi Auto';
    document.getElementById('carForm').reset();
    document.getElementById('editCarId').value = '';
    document.getElementById('carModal').classList.add('active');
}

// Close modal
function closeCarModal() {
    document.getElementById('carModal').classList.remove('active');
}

// Image preview
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImg').src = e.target.result;
            document.getElementById('imagePreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Save car (add or edit)
function saveCar(event) {
    event.preventDefault();
    
    const cars = getAllCars();
    const editId = document.getElementById('editCarId').value;
    
    // Get image if uploaded
    let imageData = '';
    const imageFile = document.getElementById('carImage').files[0];
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageData = e.target.result;
            saveCarData(cars, editId, imageData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        // If editing and no new image, keep old image
        if (editId) {
            const existingCar = cars.find(c => c.id === parseInt(editId));
            imageData = existingCar?.image || '';
        }
        saveCarData(cars, editId, imageData);
    }
}

function saveCarData(cars, editId, imageData) {
    const carData = {
        id: editId ? parseInt(editId) : Date.now(),
        marca: document.getElementById('carMarca').value.toLowerCase(),
        modello: document.getElementById('carModello').value,
        tipo: document.getElementById('carTipo').value,
        anno: parseInt(document.getElementById('carAnno').value),
        km: parseInt(document.getElementById('carKm').value),
        carburante: document.getElementById('carCarburante').value,
        prezzo: parseInt(document.getElementById('carPrezzo').value),
        cv: parseInt(document.getElementById('carCv').value),
        cambio: document.getElementById('carCambio').value,
        posti: parseInt(document.getElementById('carPosti').value),
        garantita: document.getElementById('carGarantita').value === 'true',
        emoji: document.getElementById('carEmoji').value || '🚗',
        descrizione: document.getElementById('carDescrizione').value || '',
        image: imageData
    };
    
    if (editId) {
        // Edit existing car
        const index = cars.findIndex(c => c.id === parseInt(editId));
        if (index !== -1) {
            cars[index] = carData;
            showNotification('Auto modificata con successo!', 'success');
        }
    } else {
        // Add new car
        cars.push(carData);
        showNotification('Auto aggiunta con successo!', 'success');
    }
    
    saveAllCars(cars);
    closeCarModal();
    loadAdminCars();
    updateStats();
}

// Edit car
function editCar(id) {
    const cars = getAllCars();
    const car = cars.find(c => c.id === id);
    
    if (!car) {
        showNotification('Auto non trovata!', 'error');
        return;
    }
    
    document.getElementById('modalTitle').textContent = '✏️ Modifica Auto';
    document.getElementById('editCarId').value = car.id;
    document.getElementById('carMarca').value = car.marca;
    document.getElementById('carModello').value = car.modello;
    document.getElementById('carTipo').value = car.tipo;
    document.getElementById('carAnno').value = car.anno;
    document.getElementById('carKm').value = car.km;
    document.getElementById('carCarburante').value = car.carburante;
    document.getElementById('carPrezzo').value = car.prezzo;
    document.getElementById('carCv').value = car.cv;
    document.getElementById('carCambio').value = car.cambio;
    document.getElementById('carPosti').value = car.posti;
    document.getElementById('carGarantita').value = car.garantita.toString();
    document.getElementById('carEmoji').value = car.emoji || '🚗';
    document.getElementById('carDescrizione').value = car.descrizione || '';
    
    // Show existing image if present
    if (car.image) {
        document.getElementById('previewImg').src = car.image;
        document.getElementById('imagePreview').style.display = 'block';
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
    
    document.getElementById('carModal').classList.add('active');
}

// Delete car
function deleteCar(id) {
    if (!confirm('Sei sicuro di voler eliminare questa auto?')) {
        return;
    }
    
    let cars = getAllCars();
    cars = cars.filter(c => c.id !== id);
    saveAllCars(cars);
    
    showNotification('Auto eliminata con successo!', 'success');
    loadAdminCars();
    updateStats();
}

// Notification function
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
            z-index: 100000;
            animation: slideIn 0.3s ease;
        ">
            <strong>${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</strong> ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize sample data if empty
function initializeSampleData() {
    const cars = getAllCars();
    if (cars.length === 0) {
        const sampleCars = [
            {
                id: Date.now(),
                marca: 'bmw',
                modello: 'Serie 3',
                tipo: 'berlina',
                anno: 2021,
                km: 42000,
                carburante: 'diesel',
                prezzo: 29990,
                cv: 190,
                cambio: 'Automatico',
                posti: 5,
                garantita: true,
                emoji: '🚙',
                descrizione: 'Bellissima BMW Serie 3 in ottime condizioni'
            },
            {
                id: Date.now() + 1,
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
                emoji: '🚗',
                descrizione: 'Audi A4 Avant perfetta per la famiglia'
            }
        ];
        saveAllCars(sampleCars);
    }
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSampleData();
    checkAuth();
});

// Close modal when clicking outside
document.getElementById('carModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'carModal') {
        closeCarModal();
    }
});