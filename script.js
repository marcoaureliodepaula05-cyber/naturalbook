const cart=[];
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function addToCart(name,price){cart.push({name,price});renderCart();document.getElementById('cartDialog').showModal();}
function renderCart(){document.getElementById('cartCount').innerText=cart.length;const el=document.getElementById('cartItems');el.innerHTML=cart.length?cart.map((i,idx)=>`<div class="cart-row"><span>${i.name}</span><strong>${money(i.price)}</strong><button onclick="removeItem(${idx})">remover</button></div>`).join(''):'<p>Seu carrinho está vazio.</p>';document.getElementById('cartTotal').innerText=money(cart.reduce((s,i)=>s+i.price,0));}
function removeItem(i){cart.splice(i,1);renderCart();}
function openCart(){renderCart();document.getElementById('cartDialog').showModal();}
function closeCart(){document.getElementById('cartDialog').close();}
function checkout(){if(!cart.length)return alert('Adicione um produto ao carrinho.');if(!document.getElementById('terms').checked)return alert('É necessário aceitar os Termos de Uso e a Política de Privacidade.');alert('Pedido simulado com sucesso. Integração de pagamento preparada para Pix, cartão e boleto.');}
