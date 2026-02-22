// ========= CONFIGURAÇÃO =========
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ID/exec'; // Substitua pela sua URL

// ========= PRODUTOS (LISTA ÚNICA) =========
const produtos = [
    // Mais Pedidos (IDs 1-4)
    { id: 1, nome: 'Baratino', preco: 24.90, categoria: 'mais-pedidos', tags: ['bestseller'], imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400', descricao: '🥩120g • 🧀Prato • 🥒Picles • 🧅Cebola roxa • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho da casa' },
    { id: 2, nome: 'Resenha 👑', preco: 42.90, categoria: 'mais-pedidos', tags: ['bestseller'], imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: '🥩180g premium • 🧀Cheddar • 🥓Bacon • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Maionese artesanal • 🥫Molho barbecue' },
    { id: 3, nome: 'Sem Miséria 🔥', preco: 52.90, categoria: 'mais-pedidos', tags: ['bestseller'], imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: '2x🥩180g premium • 2x🧀Prato • 🥓Bacon • 🥚Ovo • 🌶️Calabresa • 🧀Cheddar cremoso • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho especial' },
    { id: 4, nome: 'Nuggets 15 un', preco: 29.90, categoria: 'mais-pedidos', tags: ['bestseller'], imagem: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400', descricao: '15 nuggets crocantes + 2 molhos (barbecue e mostarda e mel)' },

    // Smash (IDs 5-10)
    { id: 5, nome: 'É Barril', preco: 27.90, categoria: 'smash', tags: [], imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: '🥩120g • 🧀Prato • 🥓Bacon • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho da casa' },
    { id: 6, nome: 'Pivete', preco: 28.90, categoria: 'smash', tags: [], imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba743b1?w=400', descricao: '🥩120g • 🧀Prato • 🥚Ovo frito • 🥬Alface • 🍅Tomate • 🥖Pão tradicional • 🥫Maionese artesanal' },
    { id: 7, nome: 'Piriguete', preco: 29.90, categoria: 'smash', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: '🥩120g • 🧀Cheddar • 🥓Bacon • 🥫Molho barbecue • 🥬Alface • 🍅Tomate • 🥖Pão Brioche' },
    { id: 8, nome: 'Namoral', preco: 31.90, categoria: 'smash', tags: [], imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: '🥩120g • 🧀Prato • 🥓Bacon • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho especial' },
    { id: 9, nome: 'Pega Visão', preco: 35.90, categoria: 'smash', tags: ['duplo'], imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: '2x🥩120g • 2x🧀Prato • 🧅Cebola roxa • 🥬Alface • 🍅Tomate • 🥖Pão tradicional • 🥫Molho da casa' },
    { id: 10, nome: 'Tô na Larica', preco: 38.90, categoria: 'smash', tags: ['duplo'], imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: '2x🥩120g • 🧀Prato • 🥓Bacon • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho especial' },

    // Premium (IDs 11-15)
    { id: 11, nome: 'Lá Ele', preco: 44.90, categoria: 'premium', tags: [], imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: '🥩180g premium • 🧀Prato • 🌶️Calabresa • 🥓Bacon • 2🥚Ovos • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho da casa' },
    { id: 12, nome: 'Cheiro Mole', preco: 43.90, categoria: 'premium', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: '🥩180g premium • 🧀Coalho grelhado • 🥓Bacon • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho barbecue' },
    { id: 13, nome: 'Na Pegada', preco: 41.90, categoria: 'premium', tags: [], imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: '🥩180g premium • 🧀Cheddar • 🧅Cebola caramelizada • 🥬Alface • 🍅Tomate • 🥖Pão tradicional • 🥫Molho especial' },
    { id: 14, nome: 'Barril Dobrado', preco: 49.90, categoria: 'premium', tags: ['duplo'], imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: '2x🥩180g premium • 2x🧀Prato • 🧅Cebola roxa • 🥬Alface • 🍅Tomate • 🥖Pão Brioche • 🥫Molho da casa' },
    { id: 15, nome: 'Tô de Rango', preco: 38.90, categoria: 'premium', tags: [], imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: '🥩180g premium • 🧀Prato • 🥬Alface • 🍅Tomate • 🧅Cebola roxa • 🥖Pão tradicional • 🥫Molho da casa' },

    // Combos (IDs 16-22)
    { id: 16, nome: 'Combo Muvuca', preco: 42.90, categoria: 'combos', tags: ['combo'], economia: 9.90, imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'É Barril + Batata M + Refri 350ml' },
    { id: 17, nome: 'Combo Massa', preco: 46.90, categoria: 'combos', tags: ['combo'], economia: 10.90, imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: 'Namoral + Batata M + Refri 350ml' },
    { id: 18, nome: 'Combo Na Cocó', preco: 59.90, categoria: 'combos', tags: ['combo'], economia: 15.90, imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: 'Resenha 👑 + Batata Cheddar Bacon G + Refri 600ml' },
    { id: 19, nome: 'Combo Migué', preco: 36.90, categoria: 'combos', tags: ['combo'], economia: 8.90, imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: 'Baratino + Batata P + Refri 350ml' },
    { id: 20, nome: 'Combo Maresia', preco: 54.90, categoria: 'combos', tags: ['combo'], economia: 12.90, imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Na Pegada + Batata Cheddar Bacon M + Refri 600ml' },
    { id: 21, nome: 'Combo Paletada', preco: 56.90, categoria: 'combos', tags: ['combo'], economia: 17.90, imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: 'Cheiro Mole + Batata Cheddar Bacon G' },
    { id: 22, nome: 'Combo Sem Miséria Big', preco: 72.90, categoria: 'combos', tags: ['combo'], economia: 20.90, imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: 'Sem Miséria + Batata Cheddar Bacon G + Refri 1L' },

    // Promoções (IDs 23-26)
    { id: 23, nome: '2 Smash por R$42,90', preco: 42.90, categoria: 'promocoes', tags: ['promo'], economia: 12.90, imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descricao: 'Baratino + É Barril' },
    { id: 24, nome: 'Batata + Refri R$21,90', preco: 21.90, categoria: 'promocoes', tags: ['promo'], economia: 5.90, imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Batata M + Refri 350ml' },
    { id: 25, nome: 'Combo Resenha + Batata', preco: 52.90, categoria: 'promocoes', tags: ['promo'], economia: 10.90, imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400', descricao: 'Resenha 👑 + Batata Cheddar Bacon M' },
    { id: 26, nome: 'Família Resenha', preco: 134.90, categoria: 'promocoes', tags: ['promo'], economia: 35.90, imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', descricao: '2x Resenha 👑 + 1x Sem Miséria + 2x Batata Cheddar Bacon G + 2x Refri 1L' },

    // Acompanhamentos (IDs 27-34, mais ID 4)
    { id: 27, nome: 'Batata Frita P', preco: 12.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Porção individual' },
    { id: 28, nome: 'Batata Frita M', preco: 18.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Porção média' },
    { id: 29, nome: 'Batata Frita G', preco: 24.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Porção grande' },
    { id: 30, nome: 'Batata Cheddar Bacon P', preco: 22.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Batata frita com cheddar cremoso e farofa de bacon' },
    { id: 31, nome: 'Batata Cheddar Bacon M', preco: 29.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Batata frita com cheddar cremoso e farofa de bacon' },
    { id: 32, nome: 'Batata Cheddar Bacon G', preco: 35.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', descricao: 'Batata frita com cheddar cremoso e farofa de bacon' },
    { id: 33, nome: 'Nuggets 6 un', preco: 14.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400', descricao: '6 nuggets crocantes + 2 molhos' },
    { id: 34, nome: 'Nuggets 10 un', preco: 22.90, categoria: 'acompanhamentos', tags: [], imagem: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400', descricao: '10 nuggets crocantes + 2 molhos' },

    // Bebidas (IDs 35-38)
    { id: 35, nome: 'Refrigerante 350ml', preco: 8.90, categoria: 'bebidas', tags: ['bebida'], imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', descricao: 'Coca, Guaraná, Fanta, Sprite, Pepsi', variacoes: true },
    { id: 36, nome: 'Refrigerante 600ml', preco: 12.90, categoria: 'bebidas', tags: ['bebida'], imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', descricao: 'Coca, Guaraná, Fanta, Sprite, Pepsi', variacoes: true },
    { id: 37, nome: 'Refrigerante 1L', preco: 16.90, categoria: 'bebidas', tags: ['bebida'], imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', descricao: 'Coca, Guaraná, Fanta, Sprite, Pepsi', variacoes: true },
    { id: 38, nome: 'Água Mineral 500ml', preco: 6.90, categoria: 'bebidas', tags: ['bebida'], imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', descricao: 'Com ou sem gás', variacoes: true }
];

// ========= VARIÁVEIS GLOBAIS =========
let cart = [];
let subtotal = 0;
let pointsDiscount = 0;
let total = 0;
let clienteAtual = { telefone: '', pontos: 0, pedidos: 0 };
let currentEditingItem = null;
let upsellTimeout = null;
let currentDrinkProduct = null;
let currentItemProduct = null;
let pendingItemData = null;

// ========= INICIALIZAÇÃO =========
document.addEventListener('DOMContentLoaded', () => {
    renderAllCategories();
    startSlider();
    loadCartFromStorage();
    loadPointsFromStorage();
    setupEventListeners();
    updateBusinessStatus();
    setInterval(updateBusinessStatus, 60000);
    setupSearch();
    setupPopularCounts();
    setupMascaraTelefone();
});

// ========= RENDERIZAÇÃO DOS CARDS =========
function renderAllCategories() {
    const categoryIds = {
        'mais-pedidos': [1,2,3,4],
        'smash': [1,5,6,7,8,9,10],
        'premium': [2,3,11,12,13,14,15],
        'combos': produtos.filter(p => p.categoria === 'combos').map(p => p.id),
        'promocoes': produtos.filter(p => p.categoria === 'promocoes').map(p => p.id),
        'acompanhamentos': [...produtos.filter(p => p.categoria === 'acompanhamentos').map(p => p.id), 4],
        'bebidas': produtos.filter(p => p.categoria === 'bebidas').map(p => p.id)
    };

    for (let cat in categoryIds) {
        const container = document.getElementById(`products-${cat}`);
        if (!container) continue;
        container.innerHTML = '';
        const ids = categoryIds[cat];
        ids.forEach(id => {
            const prod = produtos.find(p => p.id === id);
            if (prod) container.appendChild(createCard(prod));
        });
    }
}

function createCard(prod) {
    const card = document.createElement('div');
    card.className = `card ${prod.categoria}`;
    card.setAttribute('data-id', prod.id);
    card.setAttribute('data-categoria', prod.categoria);
    
    const imgDiv = document.createElement('div');
    imgDiv.className = 'card-image';
    const img = document.createElement('img');
    img.src = prod.imagem;
    img.alt = prod.nome;
    img.loading = 'lazy';
    imgDiv.appendChild(img);
    
    if (prod.tags && prod.tags.length) {
        const primeiraTag = prod.tags[0];
        if (primeiraTag === 'bestseller' || primeiraTag === 'combo' || primeiraTag === 'promo' || primeiraTag === 'bebida') {
            const tagSpan = document.createElement('span');
            tagSpan.className = `card-tag ${primeiraTag}`;
            if (primeiraTag === 'bestseller') tagSpan.textContent = '🔥 Mais Pedido';
            else if (primeiraTag === 'combo') tagSpan.textContent = '🎁 Combo';
            else if (primeiraTag === 'promo') tagSpan.textContent = '🔥 Promo';
            else if (primeiraTag === 'bebida') tagSpan.textContent = '🥤 Bebida';
            imgDiv.appendChild(tagSpan);
        }
    }
    
    if (prod.economia) {
        const economiaSpan = document.createElement('span');
        economiaSpan.className = 'card-tag economy';
        economiaSpan.textContent = `💰 Economize R$ ${prod.economia.toFixed(2)}`;
        imgDiv.appendChild(economiaSpan);
    }
    
    card.appendChild(imgDiv);
    
    const content = document.createElement('div');
    content.className = 'card-content';
    
    const nome = document.createElement('h3');
    nome.textContent = prod.nome;
    content.appendChild(nome);
    
    const preco = document.createElement('div');
    preco.className = 'card-price';
    preco.textContent = `R$ ${prod.preco.toFixed(2)}`;
    content.appendChild(preco);
    
    const icons = document.createElement('div');
    icons.className = 'card-icons';
    const descricaoIcones = prod.descricao.split(' • ').map(item => {
        const span = document.createElement('span');
        span.textContent = item;
        return span;
    });
    descricaoIcones.forEach(span => icons.appendChild(span));
    content.appendChild(icons);
    
    const btn = document.createElement('button');
    btn.className = 'add-to-cart';
    btn.innerHTML = '<i class="fas fa-cart-plus"></i> Adicionar';
    btn.onclick = (e) => {
        e.stopPropagation();
        if (prod.variacoes) {
            if (prod.nome.includes('Água')) {
                showWaterModal(prod);
            } else {
                showDrinkModal(prod);
            }
        } else if (['mais-pedidos', 'smash', 'premium', 'acompanhamentos'].includes(prod.categoria)) {
            openItemModal(prod);
        } else if (prod.categoria === 'promocoes') {
            if (![24, 26].includes(prod.id)) {
                openItemModal(prod);
            } else {
                addToCart(prod);
            }
        } else {
            addToCart(prod);
        }
    };
    content.appendChild(btn);
    
    card.appendChild(content);
    return card;
}

// ========= FUNÇÕES DO CARRINHO =========
function addToCart(produto, variacao = null, obs = '', quantidade = 1) {
    let nomeFinal = produto.nome;
    let precoFinal = produto.preco;
    if (variacao) {
        nomeFinal = `${produto.nome} - ${variacao.nome}`;
        precoFinal = variacao.preco;
    }
    
    const item = {
        id: Date.now() + Math.random(),
        productId: produto.id,
        name: nomeFinal,
        price: precoFinal,
        quantity: quantidade,
        obs: obs,
        imagem: produto.imagem,
        categoria: produto.categoria
    };
    
    cart.push(item);
    updateTotals();
    renderCart();
    saveCartToStorage();
    showNotification(`${quantidade}x ${nomeFinal} adicionado!`, 'success');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateTotals();
    renderCart();
    saveCartToStorage();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateTotals();
            renderCart();
            saveCartToStorage();
        }
    }
}

function updateTotals() {
    subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    total = Math.max(0, subtotal - pointsDiscount);
    document.getElementById('cart-count').textContent = cart.reduce((c, i) => c + i.quantity, 0);
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('points-discount').textContent = `-R$ ${pointsDiscount.toFixed(2)}`;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
    updateCheckoutButton();
    updatePointsProgress();
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty-state');
    const removeSelectedBtn = document.getElementById('remove-selected-btn');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (removeSelectedBtn) removeSelectedBtn.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        if (removeSelectedBtn) removeSelectedBtn.style.display = 'block';
        
        container.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <input type="checkbox" class="item-checkbox" data-id="${item.id}">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    ${item.obs ? `<div class="item-obs">${item.obs}</div>` : ''}
                    <button class="edit-obs" onclick="openEditObs(${item.id})">
                        <i class="fas fa-pencil-alt"></i> Editar
                    </button>
                </div>
                <div class="item-details">
                    <div class="item-quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span class="item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <div class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            container.appendChild(li);
        });
    }
}

function removerSelecionados() {
    const checkboxes = document.querySelectorAll('#cart-items .item-checkbox:checked');
    const ids = Array.from(checkboxes).map(cb => parseFloat(cb.dataset.id));
    cart = cart.filter(item => !ids.includes(item.id));
    updateTotals();
    renderCart();
    saveCartToStorage();
    showNotification('Itens removidos', 'success');
}

function openEditObs(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        currentEditingItem = item;
        document.getElementById('obs-text').value = item.obs || '';
        document.getElementById('obs-modal').classList.add('active');
    }
}

function saveObs() {
    if (currentEditingItem) {
        currentEditingItem.obs = document.getElementById('obs-text').value;
        renderCart();
        saveCartToStorage();
        fecharObsModal();
    }
}

function fecharObsModal() {
    document.getElementById('obs-modal').classList.remove('active');
    currentEditingItem = null;
    document.getElementById('obs-text').value = '';
}

function limparCarrinho() {
    if (cart.length === 0) return;
    if (confirm('Limpar todo o carrinho?')) {
        cart = [];
        pointsDiscount = 0;
        updateTotals();
        renderCart();
        saveCartToStorage();
    }
}

// ========= MODAL PARA ITENS NORMAIS =========
function openItemModal(produto) {
    currentItemProduct = produto;
    document.getElementById('item-modal-title').textContent = produto.nome;
    document.getElementById('item-modal-price').textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById('item-quantity').value = 1;
    document.getElementById('item-obs').value = '';
    document.getElementById('item-modal').classList.add('active');
}

function closeItemModal() {
    document.getElementById('item-modal').classList.remove('active');
    currentItemProduct = null;
    pendingItemData = null;
}

// ========= MODAL DE BEBIDAS =========
function showDrinkModal(produto) {
    currentDrinkProduct = produto;
    document.getElementById('drink-modal-title').textContent = `Escolha o sabor:`;
    const optionsDiv = document.getElementById('drink-options');
    const adicionalCoca = { 35: 1.0, 36: 1.5, 37: 2.0 };
    const sabores = ['Coca-Cola', 'Guaraná Antarctica', 'Fanta Laranja', 'Sprite', 'Pepsi'];
    
    optionsDiv.innerHTML = '';
    sabores.forEach(sabor => {
        let preco = produto.preco;
        if (sabor === 'Coca-Cola' && adicionalCoca[produto.id]) {
            preco += adicionalCoca[produto.id];
        }
        const label = document.createElement('label');
        label.className = 'drink-radio-item';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'drink-choice';
        radio.value = sabor;
        radio.dataset.preco = preco;
        const spanName = document.createElement('span');
        spanName.className = 'drink-name';
        spanName.textContent = sabor;
        const spanPrice = document.createElement('span');
        spanPrice.className = 'drink-price';
        spanPrice.textContent = `R$ ${preco.toFixed(2)}`;
        label.appendChild(radio);
        label.appendChild(spanName);
        label.appendChild(spanPrice);
        optionsDiv.appendChild(label);
    });
    
    document.getElementById('drink-quantity').value = 1;
    document.getElementById('drink-modal').classList.add('active');
}

function showWaterModal(produto) {
    currentDrinkProduct = produto;
    document.getElementById('drink-modal-title').textContent = `Escolha o tipo:`;
    const optionsDiv = document.getElementById('drink-options');
    const tipos = ['Com gás', 'Sem gás'];
    optionsDiv.innerHTML = '';
    tipos.forEach(tipo => {
        const label = document.createElement('label');
        label.className = 'drink-radio-item';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'drink-choice';
        radio.value = tipo;
        radio.dataset.preco = produto.preco;
        const spanName = document.createElement('span');
        spanName.className = 'drink-name';
        spanName.textContent = tipo;
        const spanPrice = document.createElement('span');
        spanPrice.className = 'drink-price';
        spanPrice.textContent = `R$ ${produto.preco.toFixed(2)}`;
        label.appendChild(radio);
        label.appendChild(spanName);
        label.appendChild(spanPrice);
        optionsDiv.appendChild(label);
    });
    document.getElementById('drink-quantity').value = 1;
    document.getElementById('drink-modal').classList.add('active');
}

function closeDrinkModal() {
    document.getElementById('drink-modal').classList.remove('active');
    currentDrinkProduct = null;
}

// ========= UPSELL DE BEBIDAS =========
function getDrinkVariations(produto) {
    if (produto.nome.includes('Água')) {
        return [
            { nome: 'Com gás', preco: produto.preco },
            { nome: 'Sem gás', preco: produto.preco }
        ];
    } else if (produto.nome.includes('Refrigerante')) {
        const sabores = ['Coca-Cola', 'Guaraná Antarctica', 'Fanta Laranja', 'Sprite', 'Pepsi'];
        const adicionalCoca = { 35: 1.0, 36: 1.5, 37: 2.0 };
        return sabores.map(sabor => {
            let preco = produto.preco;
            if (sabor === 'Coca-Cola' && adicionalCoca[produto.id]) {
                preco += adicionalCoca[produto.id];
            }
            return { nome: sabor, preco };
        });
    }
    return [];
}

function openUpsellDrinkModal() {
    const modal = document.getElementById('upsell-drink-modal');
    const list = document.getElementById('upsell-drink-list');
    list.innerHTML = '';

    const bebidas = produtos.filter(p => p.categoria === 'bebidas');
    bebidas.forEach(prod => {
        const variacoes = getDrinkVariations(prod);
        variacoes.forEach(varObj => {
            const label = document.createElement('label');
            label.className = 'drink-radio-item';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'upsell-drink';
            radio.value = `${prod.id}-${varObj.nome}`;
            radio.dataset.productId = prod.id;
            radio.dataset.variationName = varObj.nome;
            radio.dataset.price = varObj.preco;

            const spanName = document.createElement('span');
            spanName.className = 'drink-name';
            let tamanho = prod.nome.replace('Refrigerante', '').replace('Água Mineral', '').trim();
            spanName.textContent = `${varObj.nome} ${tamanho}`;

            const spanPrice = document.createElement('span');
            spanPrice.className = 'drink-price';
            spanPrice.textContent = `R$ ${varObj.preco.toFixed(2)}`;

            label.appendChild(radio);
            label.appendChild(spanName);
            label.appendChild(spanPrice);
            list.appendChild(label);
        });
    });

    modal.classList.add('active');
}

function closeUpsellDrinkModal() {
    document.getElementById('upsell-drink-modal').classList.remove('active');
}

function confirmUpsellDrink() {
    const selected = document.querySelector('input[name="upsell-drink"]:checked');
    if (!selected) {
        showNotification('Selecione uma bebida', 'warning');
        return;
    }
    const productId = parseInt(selected.dataset.productId);
    const variationName = selected.dataset.variationName;
    const price = parseFloat(selected.dataset.price);
    const produto = produtos.find(p => p.id === productId);
    if (produto) {
        // Fecha o modal de upsell
        closeUpsellDrinkModal();
        // Adiciona a bebida
        addToCart(produto, { nome: variationName, preco: price });
        // Se houver item pendente, adiciona e fecha o modal do item
        if (pendingItemData) {
            addToCart(pendingItemData.produto, null, pendingItemData.obs, pendingItemData.quantidade);
            pendingItemData = null;
            closeItemModal();
        }
    }
}

function triggerUpsell(produto) {
    if (upsellTimeout) clearTimeout(upsellTimeout);
    openUpsellDrinkModal();
}

function closeUpsellPopup() {
    document.getElementById('upsell-popup').style.display = 'none';
    if (upsellTimeout) clearTimeout(upsellTimeout);
}

// ========= SISTEMA DE PONTOS =========
function buscarPontosCliente() {
    const telefone = document.getElementById('clienteTelefone').value.replace(/\D/g, '');
    if (telefone.length < 10) return;
    
    clienteAtual.telefone = telefone;
    clienteAtual.pontos = Math.floor(Math.random() * 300);
    clienteAtual.pedidos = Math.floor(Math.random() * 5) + 1;
    
    document.getElementById('cliente-pontos').textContent = clienteAtual.pontos;
    document.getElementById('points-system').style.display = 'block';
    updatePointsProgress();
    savePointsToStorage();
}

function updatePointsProgress() {
    const pontos = clienteAtual.pontos;
    const faltam = Math.max(0, 150 - pontos);
    document.getElementById('points-to-next').textContent = faltam;
    const progresso = Math.min(100, (pontos / 150) * 100);
    document.getElementById('points-progress-fill').style.width = progresso + '%';
    
    if (pontos >= 150 && clienteAtual.pedidos >= 1) {
        document.getElementById('points-discount-container').style.display = 'block';
    } else {
        document.getElementById('points-discount-container').style.display = 'none';
        document.getElementById('usarPontosCheckbox').checked = false;
        pointsDiscount = 0;
        updateTotals();
    }
}

function aplicarDescontoPontos() {
    if (document.getElementById('usarPontosCheckbox').checked) {
        pointsDiscount = 10.00;
        clienteAtual.pontos -= 150;
        document.getElementById('cliente-pontos').textContent = clienteAtual.pontos;
    } else {
        pointsDiscount = 0;
    }
    updateTotals();
    updatePointsProgress();
    savePointsToStorage();
}

function savePointsToStorage() {
    localStorage.setItem('resenha_cliente', JSON.stringify(clienteAtual));
}

// ========= BUSCA DE CEP =========
function buscarCEP() {
    const cep = document.getElementById('clienteCEP').value.replace(/\D/g, '');
    if (cep.length !== 8) return;
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                document.getElementById('clienteEndereco').value = endereco;
            } else {
                showNotification('CEP não encontrado', 'warning');
            }
        })
        .catch(() => showNotification('Erro ao buscar CEP', 'error'));
}

// ========= MÁSCARA DE TELEFONE =========
function setupMascaraTelefone() {
    const telInput = document.getElementById('clienteTelefone');
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            value = value.replace(/^(\d*)/, '($1');
        }
        e.target.value = value;
    });
}

// ========= CHECKOUT WHATSAPP (ORIGINAL) =========
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'warning');
        return;
    }
    
    const nome = document.getElementById('clienteNome').value.trim();
    const tel = document.getElementById('clienteTelefone').value.trim();
    const end = document.getElementById('clienteEndereco').value.trim();
    if (!nome || !tel || !end) {
        showNotification('Preencha nome, telefone e endereço!', 'warning');
        return;
    }
    
    if (!estaNoHorarioFuncionamento()) {
        const msg = encodeURIComponent(`Olá! Quero fazer um pedido mas vi que está fora do horário.`);
        window.open(`https://wa.me/557133121092?text=${msg}`, '_blank');
        return;
    }
    
    const ref = document.getElementById('clienteReferencia').value;
    const obsGerais = document.getElementById('observacoes').value;
    
    let message = `*RESENHABURGER - NOVO PEDIDO*%0A%0A`;
    message += `*ITENS:*%0A`;
    cart.forEach(item => {
        message += `➤ ${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}%0A`;
        if (item.obs) message += `   Obs: ${item.obs}%0A`;
    });
    message += `%0A*RESUMO:*%0A`;
    message += `Subtotal: R$ ${subtotal.toFixed(2)}%0A`;
    if (pointsDiscount > 0) message += `Desconto: -R$ ${pointsDiscount.toFixed(2)}%0A`;
    message += `*TOTAL: R$ ${total.toFixed(2)}*%0A%0A`;
    message += `*DADOS:*%0A`;
    message += `Nome: ${nome}%0A`;
    message += `WhatsApp: ${tel}%0A`;
    message += `Endereço: ${end}%0A`;
    if (ref) message += `Referência: ${ref}%0A`;
    if (obsGerais) message += `Obs: ${obsGerais}%0A`;
    
    window.open(`https://wa.me/557133121092?text=${encodeURIComponent(message)}`, '_blank');
}

// ========= MODAL DE CONFIRMAÇÃO DE CHECKOUT =========
function abrirModalConfirmacaoCheckout() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'warning');
        return;
    }
    
    const modal = document.getElementById('checkout-confirm-modal');
    const list = document.getElementById('checkout-items-list');
    list.innerHTML = '';
    
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'checkout-item';
        div.innerHTML = `
            <input type="checkbox" class="checkout-item-checkbox" data-id="${item.id}">
            <span class="item-name">${item.name}</span>
            <span class="item-quantity">x${item.quantity}</span>
            <span class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</span>
        `;
        list.appendChild(div);
    });
    
    modal.classList.add('active');
}

function fecharModalConfirmacaoCheckout() {
    document.getElementById('checkout-confirm-modal').classList.remove('active');
}

function confirmarCheckout() {
    const checkboxes = document.querySelectorAll('#checkout-items-list .checkout-item-checkbox:checked');
    const ids = Array.from(checkboxes).map(cb => parseFloat(cb.dataset.id));
    if (ids.length > 0) {
        cart = cart.filter(item => !ids.includes(item.id));
        updateTotals();
        renderCart();
        saveCartToStorage();
    }
    fecharModalConfirmacaoCheckout();
    checkoutWhatsApp();
}

// ========= NOVA FUNÇÃO: VERIFICAR HORÁRIO =========
function estaNoHorarioFuncionamento() {
    const agora = new Date();
    const dia = agora.getDay();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const horaAtual = horas + minutos/60;
    const diasAbertos = [0,4,5,6];
    return diasAbertos.includes(dia) && horaAtual >= 18.5 && horaAtual < 23;
}

// ========= NOTIFICAÇÕES =========
function showNotification(msg, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = `notification notification-${tipo}`;
    notif.innerHTML = `<i class="fas ${tipo === 'success' ? 'fa-check-circle' : tipo === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i> ${msg}`;
    notif.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: ${tipo === 'success' ? '#25D366' : tipo === 'warning' ? '#FF9800' : '#2196F3'};
        color: white; padding: 12px 20px; border-radius: 10px; z-index: 2002; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s;
    `;
    document.body.appendChild(notif);
    setTimeout(() => { notif.remove(); }, 3000);
}

// ========= STORAGE =========
function saveCartToStorage() {
    localStorage.setItem('resenha_cart', JSON.stringify(cart));
    localStorage.setItem('resenha_subtotal', subtotal);
    localStorage.setItem('resenha_total', total);
}
function loadCartFromStorage() {
    const saved = localStorage.getItem('resenha_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateTotals();
        renderCart();
    }
}
function loadPointsFromStorage() {
    const saved = localStorage.getItem('resenha_cliente');
    if (saved) {
        clienteAtual = JSON.parse(saved);
        document.getElementById('cliente-pontos').textContent = clienteAtual.pontos;
        if (clienteAtual.telefone) {
            document.getElementById('clienteTelefone').value = clienteAtual.telefone;
            document.getElementById('points-system').style.display = 'block';
            updatePointsProgress();
        }
    }
}

// ========= CONTADORES DE POPULARIDADE =========
function setupPopularCounts() {
    const categorias = ['mais-pedidos', 'smash', 'premium', 'combos', 'promocoes', 'acompanhamentos', 'bebidas'];
    categorias.forEach(cat => {
        const count = Math.floor(Math.random() * 30) + 10;
        document.getElementById(`count-${cat}`).textContent = `📦 ${count} pedidos na última hora`;
    });
}

// ========= UTILITÁRIOS =========
function toggleCart(open) {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    if (open === true) {
        sidebar.classList.add('open'); overlay.classList.add('active');
    } else if (open === false) {
        sidebar.classList.remove('open'); overlay.classList.remove('active');
    } else {
        sidebar.classList.toggle('open'); overlay.classList.toggle('active');
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function updateBusinessStatus() {
    const agora = new Date();
    const dia = agora.getDay();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const horaAtual = horas + minutos/60;
    const aberto = (dia === 0 || dia >= 4) && horaAtual >= 18.5 && horaAtual < 23;
    const status = document.getElementById('status-indicator');
    const text = document.getElementById('status-text');
    if (aberto) {
        status.classList.add('open'); status.classList.remove('closed');
        text.textContent = 'Aberto agora';
    } else {
        status.classList.add('closed'); status.classList.remove('open');
        text.textContent = 'Fechado agora';
    }
}

function updateCheckoutButton() {
    const btn = document.getElementById('checkout-btn');
    btn.disabled = cart.length === 0;
    btn.innerHTML = `<i class="fab fa-whatsapp"></i> Finalizar no WhatsApp ${cart.length ? `(R$ ${total.toFixed(2)})` : ''}`;
}

function setupEventListeners() {
    document.getElementById('obs-confirm').onclick = saveObs;
    
    document.getElementById('item-confirm-yes').addEventListener('click', () => {
        if (!currentItemProduct) return;
        pendingItemData = {
            produto: currentItemProduct,
            quantidade: parseInt(document.getElementById('item-quantity').value) || 1,
            obs: document.getElementById('item-obs').value
        };
        openUpsellDrinkModal();
    });
    
    document.getElementById('item-confirm-no').addEventListener('click', () => {
        if (!currentItemProduct) return;
        const produto = currentItemProduct;
        const quantidade = parseInt(document.getElementById('item-quantity').value) || 1;
        const obs = document.getElementById('item-obs').value;
        closeItemModal();
        addToCart(produto, null, obs, quantidade);
    });
    
    document.getElementById('drink-confirm').addEventListener('click', () => {
        if (!currentDrinkProduct) return;
        const selected = document.querySelector('input[name="drink-choice"]:checked');
        if (!selected) {
            showNotification('Selecione uma opção', 'warning');
            return;
        }
        const variacao = {
            nome: selected.value,
            preco: parseFloat(selected.dataset.preco)
        };
        const quantidade = parseInt(document.getElementById('drink-quantity').value) || 1;
        const produto = currentDrinkProduct;
        closeDrinkModal();
        addToCart(produto, variacao, '', quantidade);
    });
    
    document.getElementById('upsell-drink-confirm').addEventListener('click', confirmUpsellDrink);
    
    document.getElementById('checkout-confirm-btn').addEventListener('click', confirmarCheckout);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
            closeUpsellPopup();
        }
    });
}

function setupSearch() {
    document.getElementById('search-btn').onclick = () => {
        const termo = document.getElementById('search-input').value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const nome = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = nome.includes(termo) ? 'flex' : 'none';
        });
    };
    document.getElementById('search-input').addEventListener('input', function(e) {
        if (e.target.value === '') {
            document.querySelectorAll('.card').forEach(c => c.style.display = 'flex');
        }
    });
}

// ========= SLIDER =========
let slideIndex = 0;
let sliderInterval;

function startSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;
    showSlide(slideIndex);
    sliderInterval = setInterval(() => { nextSlide(); }, 5000);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function nextSlide() { slideIndex++; showSlide(slideIndex); resetSlider(); }
function prevSlide() { slideIndex--; showSlide(slideIndex); resetSlider(); }
function goToSlide(n) { slideIndex = n; showSlide(slideIndex); resetSlider(); }
function resetSlider() { clearInterval(sliderInterval); startSlider(); }

// Expor funções globais
window.scrollToSection = scrollToSection;
window.toggleCart = toggleCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.limparCarrinho = limparCarrinho;
window.buscarPontosCliente = buscarPontosCliente;
window.aplicarDescontoPontos = aplicarDescontoPontos;
window.fecharObsModal = fecharObsModal;
window.closeDrinkModal = closeDrinkModal;
window.closeUpsellPopup = closeUpsellPopup;
window.openEditObs = openEditObs;
window.buscarCEP = buscarCEP;
window.closeUpsellDrinkModal = closeUpsellDrinkModal;
window.confirmUpsellDrink = confirmUpsellDrink;
window.closeItemModal = closeItemModal;
window.removerSelecionados = removerSelecionados;
window.abrirModalConfirmacaoCheckout = abrirModalConfirmacaoCheckout;
window.fecharModalConfirmacaoCheckout = fecharModalConfirmacaoCheckout;