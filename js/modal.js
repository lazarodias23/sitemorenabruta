

// Function to open Model Modal
function openModelModal(modelId) {
    const model = modelsData.find(m => m.id === modelId);
    if (!model) return;

    const modal = document.getElementById('model-modal');
    const content = modal.querySelector('.modal-content');
    
    // Populate Modal Data
    document.getElementById('modal-img').src = model.coverImage;
    document.getElementById('modal-name').textContent = model.name;
    document.getElementById('modal-category').textContent = model.category;
    document.getElementById('modal-age').textContent = model.age + ' anos';
    document.getElementById('modal-height').textContent = model.height;
    document.getElementById('modal-desc').textContent = model.description;
    
    // Services Tags
    const servicesContainer = document.getElementById('modal-services');
    servicesContainer.innerHTML = '';
    if (model.services.presencial) {
        servicesContainer.innerHTML += `
            <div class="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-2 rounded text-xs uppercase font-bold text-white tracking-wider">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                <span>Presencial</span>
            </div>`;
    }
    if (model.services.online) {
        servicesContainer.innerHTML += `
            <div class="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-2 rounded text-xs uppercase font-bold text-white tracking-wider">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2" ry="2"/></svg>
                <span>Online / Cam</span>
            </div>`;
    }

    // Gallery
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';
    const allImages = [model.coverImage, ...model.gallery];
    
    allImages.forEach(img => {
        const btn = document.createElement('button');
        btn.className = `relative aspect-[3/4] overflow-hidden rounded-md border-2 transition-all ${img === model.coverImage ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`;
        btn.innerHTML = `<img src="${img}" class="w-full h-full object-cover">`;
        btn.onclick = () => {
            document.getElementById('modal-img').src = img;
            // Reset active state styles
            galleryContainer.querySelectorAll('button').forEach(b => {
                b.classList.remove('border-brand-red', 'opacity-100');
                b.classList.add('border-transparent', 'opacity-60');
            });
            btn.classList.remove('border-transparent', 'opacity-60');
            btn.classList.add('border-brand-red', 'opacity-100');
        };
        galleryContainer.appendChild(btn);
    });

    // Update WhatsApp Button
    const contactBtn = document.getElementById('model-contact-btn');
    if (contactBtn) {
        const message = encodeURIComponent(`Olá ${model.name}, vi seu perfil na Morena Bruta e gostaria de agendar um horário.`);
        contactBtn.href = `https://wa.me/${model.phoneNumber}?text=${message}`;
        contactBtn.target = "_blank";
    }

    // Show Modal
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

// Function to open Region Modal
function openRegionModal(regionName) {
    const modal = document.getElementById('region-modal');
    const grid = document.getElementById('region-grid');
    
    document.getElementById('region-title').textContent = regionName;
    
    const regionModels = modelsData.filter(m => m.location === regionName);
    document.getElementById('region-count').textContent = regionModels.length + ' acompanhantes disponíveis';
    
    grid.innerHTML = '';
    
    if (regionModels.length > 0) {
        regionModels.forEach(model => {
            const card = document.createElement('div');
            card.className = "group bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-brand-red transition-all cursor-pointer";
            card.innerHTML = `
                <div class="relative aspect-[3/4]">
                    <img src="${model.coverImage}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 w-full">
                        <h3 class="text-xl font-bold text-white">${model.name}</h3>
                        <p class="text-brand-red text-xs uppercase font-bold">${model.category}</p>
                    </div>
                </div>
            `;
            card.onclick = () => {
                closeModal('region-modal');
                openModelModal(model.id);
            };
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-zinc-500">Nenhuma modelo disponível nesta região no momento.</div>';
    }

    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

// Function to open Partner/Club Modal
function openPartnerModal(partnerId) {
    const partner = boatesData.find(p => p.id === partnerId);
    if (!partner) return;

    const modal = document.getElementById('partner-modal');
    
    document.getElementById('partner-img').src = partner.image;
    document.getElementById('partner-name').textContent = partner.name;
    document.getElementById('partner-loc').textContent = partner.location;
    document.getElementById('partner-desc').textContent = partner.description;
    
    // Populate details
    document.getElementById('partner-offerings').textContent = partner.offerings;
    document.getElementById('partner-cost').textContent = partner.minCost;
    document.getElementById('partner-location-detail').textContent = partner.location;

    // Update Partner WhatsApp Button
    const partnerBtn = document.getElementById('partner-contact-btn');
    if (partnerBtn) {
        const message = encodeURIComponent(`Olá, vi o perfil do ${partner.name} na Morena Bruta e gostaria de fazer uma reserva.`);
        partnerBtn.href = `https://wa.me/${partner.phoneNumber}?text=${message}`;
        partnerBtn.target = "_blank";
    }

    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

// Agency Modal Data
const agencyData = {
    desc: "Localizada no coração de Cachoeira do Sul, nossa sede oferece total discrição e segurança. Dispomos de ambientes climatizados, área de lazer, piscina, suíte de alto padrão. O acesso é feito por entrada reservada, garantindo o anonimato de nossos clientes.",
    photos: [
        'img/casa2.jfif',
         'img/casa3.jfif',
          'img/casa5.jfif',
         'img/casa4.jfif',
    ]
};

// Function to open Agency Modal
function openAgencyModal() {
    const modal = document.getElementById('agency-modal');
    const mainImg = document.getElementById('agency-modal-img');
    const desc = document.getElementById('agency-modal-desc');
    const gallery = document.getElementById('agency-modal-gallery');

    // Set Initial
    mainImg.src = agencyData.photos[0];
    desc.textContent = agencyData.desc;

    // Build Gallery
    gallery.innerHTML = '';
    agencyData.photos.forEach(img => {
        const btn = document.createElement('button');
        const isActive = img === agencyData.photos[0];
        btn.className = `relative aspect-[4/3] overflow-hidden rounded-md border-2 transition-all ${isActive ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`;
        btn.innerHTML = `<img src="${img}" class="w-full h-full object-cover">`;
        
        btn.onclick = () => {
            mainImg.src = img;
            // Update active states
            gallery.querySelectorAll('button').forEach(b => {
                b.classList.remove('border-brand-red', 'opacity-100');
                b.classList.add('border-transparent', 'opacity-60');
            });
            btn.classList.remove('border-transparent', 'opacity-60');
            btn.classList.add('border-brand-red', 'opacity-100');
        };
        gallery.appendChild(btn);
    });

    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
}

// Global Event Listeners for Closers
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-close-modal');
            closeModal(modalId);
        });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});