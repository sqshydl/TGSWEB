document.addEventListener("DOMContentLoaded", function () {
    const itemForm = document.getElementById("item-form");
    const itemInput = document.getElementById("item-input");
    const itemList = document.getElementById("item-list");
    const filterInput = document.getElementById("filter");
    const clearButton = document.getElementById("clear");
  
    // Tambahkan item ke daftar belanja
    itemForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const newItemText = itemInput.value.trim();
      if (newItemText !== "") {
        const newItem = document.createElement("li");
        newItem.innerHTML = `${newItemText}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
        itemList.appendChild(newItem);
        itemInput.value = "";
      }
    });
  
    // Hapus item dari daftar belanja
    itemList.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-item")) {
        const item = e.target.closest('li');
        itemList.removeChild(item);
      }
    });
  
    // Filter item pada daftar belanja
    filterInput.addEventListener("input", function () {
      const filterText = filterInput.value.toLowerCase();
      const items = itemList.querySelectorAll("li");
      Array.from(items).forEach(function (item) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterText)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  
    // Hapus semua item
    clearButton.addEventListener("click", function () {
      itemList.innerHTML = "";
    });
  });
      