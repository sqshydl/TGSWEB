var cartItems = [];

function addToCart(productName, price) {
    var item = {
        name: productName,
        price: price,
        quantity: 1
    };
    var existingItem = cartItems.find((item) => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(item);
    }
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    if (cartItems.length === 0) {
        cartElement.innerHTML = "<p>Keranjang belanja kosong.</p>";
    } else {
        var totalPrice = 0;
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            cartElement.innerHTML += "<div class='cart-item'>" +
                "<h3>" + item.name + "</h3>" +
                "<p>Harga: Rp" + item.price + " x " + item.quantity + "</p>" +
                "<button onclick='removeFromCart(" + i + ")'>Hapus</button>" +
                "<input type='number' value='" + item.quantity + "' min='1' onchange='updateQuantity(" + i + ", this.value)'>" +
                "</div>";
            totalPrice += item.price * item.quantity;
        }

        document.getElementById("checkout").innerHTML = "<p>Total Harga: Rp" + totalPrice + "</p>" +
            "<input type='number' id='inputMoney' placeholder='Jumlah Uang'>" +
            "<button onclick='checkout()'>Bayar</button>";
    }
}

function updateQuantity(index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    updateCart();
}

function checkout() {
    var totalPrice = 0;
    for (var i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price * cartItems[i].quantity;
    }
    var inputMoney = parseInt(document.getElementById("inputMoney").value);
    var change = inputMoney - totalPrice;

    if (cartItems.length === 0) {
        alert("Keranjang belanja kosong. Tidak dapat melakukan pembayaran.");
    } else if (inputMoney < totalPrice) {
        alert("Jumlah uang kurang. Mohon isi dengan jumlah yang cukup.");
    } else {
        alert("Pembayaran berhasil! Kembalian Anda: Rp" + change);
        cartItems = [];
        document.getElementById("inputMoney").value = "";
        updateCart();
        document.getElementById("change").innerHTML = "<p>Kembalian: Rp" + change + "</p>";
    }
}
