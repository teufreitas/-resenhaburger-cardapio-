// DADOS COMPLETOS DOS PRODUTOS RESENHABURGER
const products = {
    'mais-pedidos': [
        {
            id: 1,
            name: "Baratino ⭐",
            description: "Pão brioche, 2x carne smash (80g cada), queijo cheddar, maionese artesanal",
            price: 24.90,
            category: "hamburgueres",
            badge: "⭐ Mais Pedido",
            image: "🍔",
            type: "smash"
        },
        {
            id: 2,
            name: "Combo Massa ⭐",
            description: "Lá Ele + Batata Frita + Refri 350ml",
            price: 42.90,
            category: "combos",
            badge: "⭐ Mais Pedido",
            image: "📦",
            type: "combo"
        },
        {
            id: 3,
            name: "Sem Miséria 👑",
            description: "NOSSO MAIOR! Pão duplo, 300g carne, queijos, bacon, ovo, calabresa, onion rings, todos os molhos",
            price: 49.90,
            category: "hamburgueres",
            badge: "👑 Premium",
            image: "👑",
            type: "premium"
        }
    ],
    
    'hamburgueres': [
        {
            id: 1,
            name: "Baratino ⭐",
            description: "Pão brioche, 2x carne smash (80g cada), queijo cheddar, maionese artesanal",
            price: 24.90,
            badge: "⭐ Mais Pedido",
            image: "🍔",
            type: "smash"
        },
        {
            id: 4,
            name: "Piriguete",
            description: "Pão australiano, carne smash, queijo prato, bacon, molho especial",
            price: 27.90,
            image: "🍔",
            type: "smash"
        },
        {
            id: 5,
            name: "Pivete",
            description: "Pão brioche, carne smash, duplo cheddar, cebola caramelizada",
            price: 26.50,
            image: "🍔",
            type: "smash"
        },
        {
            id: 6,
            name: "Tô na larica",
            description: "Pão tradicional, carne smash, queijo, picles, molho barbecue",
            price: 25.90,
            image: "🍔",
            type: "smash"
        },
        {
            id: 7,
            name: "Cheiro Mole",
            description: "Pão brioche, carne smash, queijo coalho, vinagrete",
            price: 26.90,
            image: "🍔",
            type: "smash"
        },
        {
            id: 8,
            name: "Lá Ele 👑",
            description: "Pão brioche, 180g carne, queijo, ovo, calabresa, maionese temperada",
            price: 32.90,
            badge: "👑 Premium",
            image: "🍔",
            type: "premium"
        },
        {
            id: 9,
            name: "Namoral",
            description: "Pão australiano, 200g carne, queijo cheddar, bacon, onion rings",
            price: 34.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 10,
            name: "Pega visão",
            description: "Pão preto, 180g carne, queijo gorgonzola, cogumelos",
            price: 36.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 11,
            name: "To de Rango",
            description: "Pão brioche, 200g carne, queijo, bacon, cebola crispy",
            price: 33.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 12,
            name: "Na pegada",
            description: "Pão australiano, 180g carne, queijo, barbecue, cebola roxa",
            price: 31.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 13,
            name: "Barril dobrado",
            description: "Pão brioche, 2x 180g carne, duplo queijo, duplo bacon",
            price: 42.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 14,
            name: "É barril",
            description: "Pão tradicional, 180g carne, queijo, salada completa",
            price: 29.90,
            image: "🍔",
            type: "premium"
        },
        {
            id: 3,
            name: "Sem Miséria 👑",
            description: "NOSSO MAIOR! Pão duplo, 300g carne, queijos, bacon, ovo, calabresa, onion rings, todos os molhos",
            price: 49.90,
            badge: "👑 Premium",
            image: "👑",
            type: "premium"
        }
    ],
    
    'combos': [
        {
            id: 15,
            name: "Muvuca",
            description: "Baratino + Batata Frita + Refri 350ml",
            price: 34.90,
            image: "📦",
            type: "combo"
        },
        {
            id: 2,
            name: "Combo Massa ⭐",
            description: "Lá Ele + Batata Frita + Refri 350ml",
            price: 42.90,
            badge: "⭐ Mais Pedido",
            image: "📦",
            type: "combo"
        },
        {
            id: 16,
            name: "Na Cocó",
            description: "Piriguete + Anéis de Cebola + Refri 350ml",
            price: 38.90,
            image: "📦",
            type: "combo"
        },
        {
            id: 17,
            name: "Migué",
            description: "Pivete + Batata Frita + 2 Refris 350ml",
            price: 39.90,
            image: "📦",
            type: "combo"
        },
        {
            id: 18,
            name: "Maresia",
            description: "Namoral + Batata Frita + Refri 350ml",
            price: 44.90,
            image: "📦",
            type: "combo"
        },
        {
            id: 19,
            name: "Paletada",
            description: "Pega visão + Batata Frita + Refri 350ml",
            price: 46.90,
            image: "📦",
            type: "combo"
        },
        {
            id: 20,
            name: "Sem miséria big",
            description: "Sem miséria + Batata Frita + 2 Refris 350ml",
            price: 59.90,
            image: "📦",
            type: "combo"
        }
    ],
    
    'acompanhamentos': [
        {
            id: 21,
            name: "Batata Frita",
            description: "Porção individual crocante",
            price: 12.90,
            image: "🍟"
        },
        {
            id: 22,
            name: "Batata Frita Cheddar Bacon",
            description: "Com cheddar derretido e bacon",
            price: 18.90,
            image: "🍟"
        },
        {
            id: 23,
            name: "Onion Rings",
            description: "Anéis de cebola empanados",
            price: 14.90,
            image: "🧅"
        },
        {
            id: 24,
            name: "Nuggets (6 unidades)",
            description: "Frango empanado crocante",
            price: 16.90,
            image: "🍗"
        }
    ],
    
    'bebidas': [
        {
            id: 25,
            name: "Refrigerante 350ml",
            description: "Coca-Cola, Guaraná, Fanta",
            price: 6.90,
            image: "🥤"
        },
        {
            id: 26,
            name: "Refrigerante 600ml",
            description: "Coca-Cola, Guaraná, Fanta",
            price: 9.90,
            image: "🥤"
        },
        {
            id: 27,
            name: "Refrigerante 2L",
            description: "Coca-Cola, Guaraná",
            price: 14.90,
            image: "🥤"
        },
        {
            id: 28,
            name: "Água Mineral 500ml",
            description: "Com ou sem gás",
            price: 4.90,
            image: "💧"
        },
        {
            id: 29,
            name: "Suco Natural 500ml",
            description: "Laranja, Maracujá, Limão",
            price: 8.90,
            image: "🧃"
        }
    ],
    
    'promocoes': [
        {
            id: 15,
            name: "Combo Muvuca 🔥",
            description: "Baratino + Batata + Refri por preço especial!",
            price: 34.90,
            originalPrice: 39.90,
            badge: "🔥 Promoção",
            image: "🔥",
            type: "promo"
        },
        {
            id: 30,
            name: "Fritas + Refri 🔥",
            description: "Batata Frita + Refri 350ml",
            price: 15.90,
            originalPrice: 19.80,
            badge: "🔥 Promoção",
            image: "🔥",
            type: "promo"
        },
        {
            id: 31,
            name: "Duplo Baratino 🔥",
            description: "2x Baratino + 2x Refri 350ml",
            price: 54.90,
            originalPrice: 63.60,
            badge: "🔥 Promoção",
            image: "🔥",
            type: "promo"
        }
    ]
};

// VARIÁVEIS GLOBAIS
let cart = JSON.parse(localStorage.getItem('resenhaburger_cart')) || [];
let customerPoints = parseInt(localStorage.getItem('resenhaburger_points')) || 0;
let customerId = localStorage.getItem('resenhaburger_id') || generateCustomerId();
let customerName = localStorage.getItem('resenhaburger_nome') || '';

// FUNÇÃO PARA GERAR ID DO CLIENTE
function generateCustomerId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const id = 'RB' + timestamp.toString().slice(-6) + random.toString().padStart(3, '0');
    localStorage.setItem('resenhaburger_id', id);
    return id;
}

// INICIALIZAR SISTEMA DE PONTOS
function initializePoints() {
    if (!localStorage.getItem('resenhaburger_points_initialized')) {
        customerPoints = 0;
        localStorage.setItem('resenhaburger_points', '0');
        localStorage.setItem('resenhaburger_points_initialized', 'true');
    }
    updatePointsDisplay();
}

// ATUALIZAR DISPLAY DE PONTOS
function updatePointsDisplay() {
    const pointsElement = document.getElementById('pointsDisplay');
    if (pointsElement) {
        const pointsText = customerPoints > 0 ? 
            `${customerPoints} pontos (R$ ${(customerPoints/10).toFixed(2)} em desconto)` : 
            '0 pontos';
        pointsElement.innerHTML = `<i class="fas fa-trophy"></i><span>${pointsText}</span>`;
    }
}

// CARREGAR PRODUTOS POR CATEGORIA
function loadProducts(category) {
    const container = document.getElementById('productsContainer');
    const categoryProducts = products[category] || [];
    
    // Mostrar loading
    container.innerHTML = '<div class="loading"><i class="fas fa-hamburger fa-spin"></i> Carregando...</div>';
    
    // Simular delay de carregamento
    setTimeout(() => {
        container.innerHTML = '';
        
        if (categoryProducts.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                    <i class="fas fa-utensils" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                    <h3 style="color: #666;">Nenhum produto nesta categoria</h3>
                    <p>Em breve novidades!</p>
                </div>
            `;
            return;
        }
        
        categoryProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.animation = 'fadeIn 0.5s ease';
            
            const originalPriceHTML = product.originalPrice 
                ? `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                     <s style="color: #999; font-size: 14px;">R$ ${product.originalPrice.toFixed(2)}</s>
                     <span style="background: #FF4444; color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">
                         Economize R$ ${(product.originalPrice - product.price).toFixed(2)}
                     </span>
                   </div>`
                : '';
            
            const badgeHTML = product.badge 
                ? `<div class="product-badge">${product.badge}</div>` 
                : '';
            
            productCard.innerHTML = `
                ${badgeHTML}
                <div class="product-image">
                    <span style="font-size: 48px;">${product.image || '🍔'}</span>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        ${originalPriceHTML}
                        R$ ${product.price.toFixed(2)}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, '${category}')">
                        <i class="fas fa-plus"></i> Adicionar ao Carrinho
                    </button>
                </div>
            `;
            
            container.appendChild(productCard);
        });
    }, 300);
}

// ADICIONAR AO CARRINHO
function addToCart(productId, category) {
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) {
        showNotification('Produto não encontrado!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
    
    // UPSELL AUTOMÁTICO
    setTimeout(() => {
        if (category === 'hamburgueres' && !cart.some(item => item.name.includes('Batata'))) {
            if (confirm(`🧠 **Upsell Inteligente**\n\nQuer adicionar uma Batata Frita por apenas R$ 9,90?`)) {
                const batata = products.acompanhamentos.find(p => p.name.includes('Batata Frita') && !p.name.includes('Cheddar'));
                if (batata) {
                    addToCart(batata.id, 'acompanhamentos');
                }
            }
        }
        
        // Upsell de bebida no final
        if (cart.length >= 2 && !cart.some(item => item.name.includes('Refri') || item.name.includes('Água') || item.name.includes('Suco'))) {
            if (confirm(`🥤 **Complete seu pedido**\n\nDeseja adicionar uma bebida para acompanhar?`)) {
                loadProducts('bebidas');
                showNotification('Navegue para a aba "Bebidas" para escolher!', 'info');
            }
        }
    }, 500);
}

// REMOVER DO CARRINHO
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            const itemName = cart[itemIndex].name;
            cart.splice(itemIndex, 1);
            showNotification(`${itemName} removido do carrinho!`, 'warning');
        }
    }
    
    saveCart();
    updateCartDisplay();
}

// SALVAR CARRINHO NO LOCALSTORAGE
function saveCart() {
    localStorage.setItem('resenhaburger_cart', JSON.stringify(cart));
    updateCartCount();
}

// ATUALIZAR CONTADOR DO CARRINHO
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        if (totalItems > 0) {
            cartCountElement.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                cartCountElement.style.animation = '';
            }, 500);
        }
    }
}

// ATUALIZAR DISPLAY DO CARRINHO
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #666;">
                <i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 20px; opacity: 0.3;"></i>
                <h4 style="margin-bottom: 10px;">Carrinho vazio</h4>
                <p>Adicione itens para fazer seu pedido!</p>
            </div>
        `;
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style.animation = 'fadeIn 0.3s ease';
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color: #666;">R$ ${item.price.toFixed(2)} × ${item.quantity}</small>
            </div>
            <div style="text-align: right;">
                <strong style="color: #FF0000;">R$ ${itemTotal.toFixed(2)}</strong>
                <div class="item-controls">
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" title="Remover um">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span style="min-width: 30px; text-align: center; font-weight: bold;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="addToCart(${item.id}, '')" title="Adicionar mais">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Calcular pontos que serão ganhos
    const pontosAGanhar = Math.floor(total);
    
    cartTotal.textContent = total.toFixed(2);
    
    // Adicionar informação de pontos
    const pontosInfo = document.querySelector('.points-info');
    if (pontosInfo) {
        pontosInfo.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <strong>${pontosAGanhar} pontos a ganhar!</strong><br>
            <small>Acumule ${100 - customerPoints % 100} pontos para seu próximo desconto!</small>
        `;
    }
    
    updateCartCount();
}

// TOGGLE CARRINHO (ABRIR/FECHAR)
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
    
    // Atualizar display quando abrir
    if (cartSidebar.classList.contains('active')) {
        updateCartDisplay();
    }
}

// FINALIZAR PEDIDO (WHATSAPP)
function checkout() {
    if (cart.length === 0) {
        showNotification('Adicione itens ao carrinho primeiro!', 'error');
        toggleCart();
        return;
    }
    
    const notes = document.getElementById('orderNotes').value;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const pontosAGanhar = Math.floor(total);
    
    // Verificar se cliente está cadastrado
    if (!customerName) {
        const nome = prompt("👤 **Cadastro Rápido**\n\nPara acumular pontos, informe seu nome:");
        if (nome && nome.trim() !== '') {
            customerName = nome.trim();
            localStorage.setItem('resenhaburger_nome', customerName);
            showNotification(`Cadastro realizado, ${customerName}!`, 'success');
        }
    }
    
    // Gerar mensagem do pedido
    let message = `*🍔 PEDIDO RESENHABURGER 🍔*\n`;
    message += `*ID do Pedido:* ${generateOrderId()}\n`;
    message += `*ID do Cliente:* ${customerId}\n`;
    message += `*Cliente:* ${customerName || 'Não informado'}\n`;
    message += `\n*📋 ITENS DO PEDIDO:*\n`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `\n${index + 1}. ${item.quantity}x ${item.name}\n`;
        message += `   R$ ${item.price.toFixed(2)} × ${item.quantity} = R$ ${itemTotal.toFixed(2)}`;
    });
    
    message += `\n\n*💰 VALORES:*\n`;
    message += `Subtotal: R$ ${total.toFixed(2)}\n`;
    message += `Taxa de entrega: A combinar\n`;
    message += `*TOTAL APROXIMADO: R$ ${total.toFixed(2)}*\n`;
    
    message += `\n*🎯 PONTOS:*\n`;
    message += `Pontos atuais: ${customerPoints}\n`;
    message += `Pontos a ganhar: ${pontosAGanhar}\n`;
    message += `Próximo desconto em: ${100 - (customerPoints % 100)} pontos\n`;
    
    if (notes) {
        message += `\n*📝 OBSERVAÇÕES:*\n${notes}\n`;
    }
    
    message += `\n*📍 ENDEREÇO DE ENTREGA:*\n`;
    message += `(Será confirmado pelo WhatsApp)\n`;
    
    message += `\n*⏰ PREVISÃO DE ENTREGA:*\n`;
    message += `40-60 minutos após confirmação\n`;
    
    message += `\n*📞 CONTATO:*\n`;
    message += `WhatsApp: (71) 99999-9999\n`;
    
    message += `\n_📍 *ResenhaBurger* - Hambúrguer Artesanal 100% Baiano_`;
    
    // URL do WhatsApp - SUBSTITUIR PELO NÚMERO REAL
    const phone = "5571999999999"; // FORMATO: 55 + DDD + NÚMERO (sem espaços, parênteses ou hífens)
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Salvar pedido no histórico
    saveOrderToHistory(total, pontosAGanhar);
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Mostrar confirmação
    showOrderConfirmation(total, pontosAGanhar);
}

// GERAR ID DO PEDIDO
function generateOrderId() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `RB${day}${month}${hour}${minute}`;
}

// SALVAR PEDIDO NO HISTÓRICO
function saveOrderToHistory(total, pontos) {
    const order = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        items: [...cart],
        total: total,
        pointsEarned: pontos,
        notes: document.getElementById('orderNotes').value
    };
    
    let orderHistory = JSON.parse(localStorage.getItem('resenhaburger_order_history')) || [];
    orderHistory.unshift(order); // Adicionar no início
    localStorage.setItem('resenhaburger_order_history', JSON.stringify(orderHistory.slice(0, 50))); // Manter últimos 50 pedidos
}

// MOSTRAR CONFIRMAÇÃO DO PEDIDO
function showOrderConfirmation(total, pontos) {
    // Atualizar pontos
    customerPoints += pontos;
    localStorage.setItem('resenhaburger_points', customerPoints.toString());
    
    // Mostrar mensagem de sucesso
    const confirmationHTML = `
        <div style="text-align: center; padding: 30px; max-width: 400px; margin: 0 auto;">
            <div style="background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 24px;">
                <i class="fas fa-check"></i>
            </div>
            <h3 style="color: #25D366; margin-bottom: 10px;">Pedido Enviado! 🎉</h3>
            <p style="margin-bottom: 15px; color: #666;">
                Seu pedido foi enviado para o WhatsApp da ResenhaBurger!
            </p>
            <div style="background: #f9f9f9; border-radius: 10px; padding: 15px; margin-bottom: 20px;">
                <p style="margin-bottom: 5px;">
                    <strong>Valor do pedido:</strong> R$ ${total.toFixed(2)}
                </p>
                <p style="margin-bottom: 5px;">
                    <strong>Pontos ganhos:</strong> ${pontos} pontos
                </p>
                <p style="margin-bottom: 0;">
                    <strong>Pontos totais:</strong> ${customerPoints} pontos
                </p>
            </div>
            <p style="font-size: 14px; color: #888;">
                <i class="fas fa-info-circle"></i>
                Aguarde a confirmação da hamburgueria pelo WhatsApp.
            </p>
        </div>
    `;
    
    // Limpar carrinho
    cart = [];
    saveCart();
    updateCartDisplay();
    updatePointsDisplay();
    
    // Fechar carrinho
    toggleCart();
    
    // Mostrar modal de confirmação
    showCustomModal('Pedido Confirmado!', confirmationHTML);
}

// NOTIFICAÇÃO
function showNotification(message, type = 'success') {
    const colors = {
        success: '#25D366',
        error: '#FF4444',
        warning: '#FFAA00',
        info: '#0099FF'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 350px;
    `;
    
    notification.innerHTML = `
        <i class="fas ${icons[type]}" style="font-size: 20px;"></i>
        <div>${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// MODAL PERSONALIZADO
function showCustomModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="animation: fadeIn 0.3s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0; color: #333;">${title}</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">
                    ×
                </button>
            </div>
            ${content}
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="background: #FF0000; color: white; border: none; padding: 10px 30px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                    OK
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// VERIFICAR E MOSTRAR CUPOM DE DESCONTO
function checkForDiscount() {
    if (customerPoints >= 100) {
        const discountAmount = Math.floor(customerPoints / 100) * 10;
        showCustomModal('🎉 DESCONTO DISPONÍVEL!', `
            <div style="text-align: center; padding: 20px;">
                <div style="background: linear-gradient(45deg, #FFD700, #FFAA00); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="color: #000; margin-bottom: 10px;">R$ ${discountAmount.toFixed(2)} DE DESCONTO!</h2>
                    <p style="color: #000;">Você tem ${customerPoints} pontos!</p>
                </div>
                <p style="color: #666; margin-bottom: 20px;">
                    Use seu desconto no próximo pedido!<br>
                    Cada 100 pontos = R$ 10,00 de desconto
                </p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                    <strong>CUPOM:</strong> 
                    <code style="background: white; padding: 5px 10px; border-radius: 3px; font-family: monospace;">
                        RESENHA${customerId.slice(-6)}
                    </code>
                </div>
            </div>
        `);
    }
}

// INICIALIZAR APLICAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    // Configurar abas
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            loadProducts(category);
        });
    });
    
    // Carregar produtos iniciais
    loadProducts('mais-pedidos');
    
    // Inicializar carrinho e pontos
    updateCartDisplay();
    updatePointsDisplay();
    initializePoints();
    
    // Verificar se é primeira visita
    const firstVisit = !localStorage.getItem('resenhaburger_first_visit');
    if (firstVisit) {
        setTimeout(() => {
            showCustomModal('👋 Bem-vindo à ResenhaBurger!', `
                <div style="text-align: center; padding: 20px;">
                    <div style="background: #FF0000; color: white; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                        <h3 style="margin: 0;">🍔 RESENHABURGER</h3>
                        <p style="margin: 5px 0 0; opacity: 0.9;">Hambúrguer Artesanal 100% Baiano</p>
                    </div>
                    <p style="color: #666; margin-bottom: 15px;">
                        <strong>Sistema de Pontos:</strong><br>
                        Cada R$ 1,00 gasto = 1 ponto acumulado!
                    </p>
                    <div style="background: #FFF9E6; border-left: 4px solid #FFD700; padding: 10px; margin-bottom: 20px; text-align: left;">
                        <p style="margin: 0; color: #333;">
                            <strong>💰 100 pontos = R$ 10,00 de desconto!</strong><br>
                            Acumule e aproveite!
                        </p>
                    </div>
                    <p style="font-size: 14px; color: #888;">
                        Seu ID de cliente: <strong>${customerId}</strong>
                    </p>
                </div>
            `);
            localStorage.setItem('resenhaburger_first_visit', 'true');
        }, 1000);
    }
    
    // Verificar desconto a cada 30 segundos
    setInterval(checkForDiscount, 30000);
    
    // Adicionar animação de pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    // Verificar se há nome salvo
    const savedName = localStorage.getItem('resenhaburger_nome');
    if (savedName) {
        customerName = savedName;
        document.querySelector('.slogan').innerHTML += `<br><small style="font-size: 10px;">Olá, ${savedName.split(' ')[0]}! 👋</small>`;
    }
});

// FECHAR MODAL
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}