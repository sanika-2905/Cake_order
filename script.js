let cart = [];

// 1. Add item to cart array
function addToCart(name, price) {
    const item = {
        id: Date.now(), // Unique ID for removing later
        name: name,
        price: price
    };
    
    cart.push(item);
    updateCartUI();
    showToast(name);
}

// 2. Remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// 3. Update all numbers and the list display
function updateCartUI() {
    // Update count in Navbar
    document.getElementById('cart-count').innerText = cart.length;

    const listContainer = document.getElementById('cart-items-list');
    const totalDisplay = document.getElementById('cart-total-amount');
    
    listContainer.innerHTML = ""; // Clear existing list
    let total = 0;

    if (cart.length === 0) {
        listContainer.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        cart.forEach(item => {
            total += item.price;
            listContainer.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} - ₹${item.price}</span>
                    <button class="remove-btn" onclick="removeItem(${item.id})">Cancel</button>
                </div>
            `;
        });
    }

    totalDisplay.innerText = total;
}

// 4. Toggle the visibility of the Cart Window
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const currentDisplay = modal.style.display;
    modal.style.display = (currentDisplay === 'flex') ? 'none' : 'flex';
}

// 5. Success Toast
function showToast(name) {
    const toast = document.getElementById('toast');
    toast.innerText = `Added ${name} to cart! 🍰`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Close Modal when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Custom Order Submission
document.getElementById('orderForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Sanika's Cakes has received your custom request. We will contact you shortly.");
    this.reset();
});