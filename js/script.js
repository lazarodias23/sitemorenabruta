// Utility to render cards (Used in models.html and homepage carousel)
function createModelCard(model) {
    const isOnline = model.services.online;
    const isPresencial = model.services.presencial;
    
    return `
    <div class="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-brand-red transition-all duration-300 cursor-pointer fade-in" onclick="openModelModal('${model.id}')">
        <div class="relative aspect-[3/4] overflow-hidden">
            <img src="${model.coverImage}" alt="${model.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div class="absolute top-4 right-4 flex flex-col gap-2 items-end">
                ${isOnline ? '<span class="bg-black/70 backdrop-blur-sm text-white p-1.5 rounded text-[10px] uppercase font-bold border border-white/10" title="Atende Online"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2" ry="2"/></svg></span>' : ''}
                ${isPresencial ? '<span class="bg-brand-red/90 backdrop-blur-sm text-white p-1.5 rounded text-[10px] uppercase font-bold" title="Atende Presencial"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg></span>' : ''}
            </div>

            <div class="absolute bottom-0 left-0 p-6 w-full">
                <span class="text-brand-red text-xs font-bold uppercase tracking-widest mb-1 block">${model.category}</span>
                <h3 class="text-2xl font-serif text-white group-hover:text-brand-red transition-colors">${model.name}</h3>
                <div class="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span class="text-zinc-300 text-sm flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        ${model.location}
                    </span>
                    <span class="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">Ver Fotos</span>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Logic for Models Page (Filtering)
if (document.getElementById('models-grid')) {
    let activeRegion = 'Todas';
    let activeService = 'all';

    function renderFilteredModels() {
        const grid = document.getElementById('models-grid');
        grid.innerHTML = '';
        
        const filtered = modelsData.filter(model => {
            if (activeRegion !== 'Todas' && model.location !== activeRegion) return false;
            if (activeService === 'presencial' && !model.services.presencial) return false;
            if (activeService === 'online' && !model.services.online) return false;
            return true;
        });

        if (filtered.length > 0) {
            filtered.forEach(model => {
                grid.innerHTML += createModelCard(model);
            });
        } else {
            grid.innerHTML = `
                <div class="col-span-full text-center py-20 bg-zinc-900/20 rounded-xl border border-dashed border-zinc-800">
                    <p class="text-xl text-zinc-500 font-serif mb-4">Nenhuma acompanhante encontrada com estes filtros.</p>
                    <button id="clear-filters-msg" class="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline">Limpar Filtros</button>
                </div>`;
            document.getElementById('clear-filters-msg')?.addEventListener('click', clearFilters);
        }
    }

    function clearFilters() {
        activeRegion = 'Todas';
        activeService = 'all';
        updateUI();
        renderFilteredModels();
    }

    function updateUI() {
        // Update Region Buttons
        document.querySelectorAll('.filter-region-btn').forEach(btn => {
            if (btn.dataset.region === activeRegion) {
                btn.className = 'filter-region-btn px-4 py-2 rounded-full text-xs uppercase font-bold tracking-wide transition-all bg-brand-red text-white shadow-lg shadow-red-900/40';
            } else {
                btn.className = 'filter-region-btn px-4 py-2 rounded-full text-xs uppercase font-bold tracking-wide transition-all bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white';
            }
        });

        // Update Service Buttons
        document.querySelectorAll('.filter-service-btn').forEach(btn => {
            const isActive = btn.dataset.service === activeService;
            const baseClass = "flex items-center gap-2 px-4 py-2 rounded text-xs uppercase font-bold tracking-wide transition-all border";
            if (isActive) {
                btn.className = `${baseClass} border-brand-red bg-brand-red/10 text-white`;
            } else {
                btn.className = `${baseClass} border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-500`;
            }
        });

        // Toggle "Clear" button visibility
        const clearBtn = document.getElementById('top-clear-filters');
        if (activeRegion !== 'Todas' || activeService !== 'all') {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    }

    // Initialize Filters
    document.querySelectorAll('.filter-region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeRegion = btn.dataset.region;
            updateUI();
            renderFilteredModels();
        });
    });

    document.querySelectorAll('.filter-service-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeService = btn.dataset.service;
            updateUI();
            renderFilteredModels();
        });
    });

    document.getElementById('top-clear-filters').addEventListener('click', clearFilters);

    // Initial Render
    renderFilteredModels();
}

// Logic for Agency Page (Carousel)
if (document.getElementById('agency-carousel')) {
    const container = document.getElementById('agency-carousel');
    modelsData.forEach(model => {
        const card = document.createElement('div');
        card.className = "min-w-[280px] w-[280px] sm:min-w-[320px] snap-center bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-brand-red transition-all duration-300 cursor-pointer group";
        card.onclick = () => openModelModal(model.id);
        card.innerHTML = `
            <div class="h-96 relative overflow-hidden">
                <img src="${model.coverImage}" alt="${model.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div class="absolute bottom-0 left-0 p-6">
                    <h3 class="text-2xl font-serif text-white">${model.name}</h3>
                    <p class="text-brand-red text-xs font-bold uppercase tracking-widest">${model.category}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
