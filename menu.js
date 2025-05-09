const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.querySelector(".cart-item-count");

let cart = {};

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

document.querySelectorAll(".add-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        const productBox = btn.closest(".product-box");
        const title = productBox.querySelector(".product-title").innerText;
        const price = parseInt(productBox.querySelector(".price").innerText.replace("$", ""));
        const image = productBox.querySelector("img").src;

        if (cart[title]) {
            cart[title].quantity += 1;
        } else {
            cart[title] = { price, image, quantity: 1 };
        }

        updateCartUI();
    });
});

function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    for (let title in cart) {
        const item = cart[title];
        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <div class="cart-item-info">
                <strong>${title}</strong><br>
                $${item.price} x ${item.quantity}
            </div>
            <div>
                <button onclick="removeItem('${title}')">❌</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    }

    cartTotal.innerText = total;
    cartCount.innerText = count;
    cartCount.style.visibility = count > 0 ? "visible" : "hidden";
}

function removeItem(title) {
    delete cart[title];
    updateCartUI();
}
