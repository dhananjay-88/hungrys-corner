        const items = [
            { id: 1, name: "Burger", price: 120, img: "images/burger.jpg" },
            { id: 2, name: "Pizza", price: 250, img: "images/pizza.jpg" },
            { id: 3, name: "Pasta", price: 180, img: "images/pasta.jpg" },
            { id: 4, name: "Fries", price: 100, img: "images/fries.jpg" },
            { id: 5, name: "Sandwich", price: 90, img: "images/sandwich.jpg" },
            { id: 6, name: "Salad", price: 150, img: "images/salad.jpg" },
            { id: 7, name: "Coffee", price: 70, img: "images/coffee.jpg" },
            { id: 8, name: "Tea", price: 50, img: "images/tea.jpg" },
            { id: 9, name: "Smoothie", price: 130, img: "images/smoothie.jpg" },
            { id: 10, name: "Ice Cream", price: 110, img: "images/icecream.jpg" },
            { id: 11, name: "Momos", price: 140, img: "images/momos.jpg" },
            { id: 12, name: "Noodles", price: 160, img: "images/noodles.jpg" },
        ];

        const cart = {};

        function renderMenu() {
            const menu = document.getElementById("menu");
            items.forEach(item => {
                const itemBox = document.createElement("div");
                itemBox.className = "menu-item";
                itemBox.innerHTML = `
          <img src="${item.img}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <div class="controls">
            <button onclick="updateCart(${item.id}, -1)">-</button>
            <span id="qty-${item.id}">0</span>
            <button onclick="updateCart(${item.id}, 1)">+</button>
          </div>
        `;
                menu.appendChild(itemBox);
            });
        }

        function updateCart(id, change) {
            if (!cart[id]) cart[id] = 0;
            cart[id] += change;
            if (cart[id] < 0) cart[id] = 0;
            document.getElementById(`qty-${id}`).textContent = cart[id];
            renderCart();
        }

        function renderCart() {
            const sidebar = document.getElementById("cart-sidebar");
            const cartItemsDiv = document.getElementById("cart-items");
            const totalDiv = document.getElementById("total");
            cartItemsDiv.innerHTML = "";
            let total = 0;
            let hasItems = false;

            for (const id in cart) {
                if (cart[id] > 0) {
                    const item = items.find(i => i.id == id);
                    const itemTotal = cart[id] * item.price;
                    total += itemTotal;
                    hasItems = true;

                    const div = document.createElement("div");
                    div.className = "cart-item";
                    div.innerHTML = `
            <span>${item.name} x${cart[id]}</span>
            <span>₹${itemTotal}</span>
          `;
                    cartItemsDiv.appendChild(div);
                }
            }

            totalDiv.textContent = `Total: ₹${total}`;
            sidebar.style.display = hasItems ? "block" : "none";
        }

        function closeCart() {
            document.getElementById("cart-sidebar").style.display = "none";
        }

        renderMenu();