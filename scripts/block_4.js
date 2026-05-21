const CURRENCY_DATA = {
  online: {
    label: "Онлайн",
    rates: {
      USD: { sell: "67,54", buy: "73,74" },
      EUR: { sell: "78,55", buy: "85,25" },
      CNY: { sell: "10,34", buy: "10,47" }
    }
  },
  cash: {
    label: "Наличные",
    rates: {
      USD: { sell: "70,2", buy: "73,5" },
      EUR: { sell: "87", buy: "89,5" },
      CNY: { sell: "10,6", buy: "11" }
    }
  }
};

const dropdownWrap = document.querySelector(".currency-dropdown-wrap");
const pillBtn = document.getElementById("currency-pill-btn");
const pillText = pillBtn.querySelector(".pill-text");
const menuItems = document.querySelectorAll(".currency-dropdown-menu .menu-item");

function updateCurrencyRates(type) {
  const currentRates = CURRENCY_DATA[type].rates;

  Object.keys(currentRates).forEach((currencyCode) => {
    const row = document.querySelector(`[data-currency-row="${currencyCode}"]`);
    if (row) {
      const sellField = row.querySelector('[data-currency-field="sell"]');
      const buyField = row.querySelector('[data-currency-field="buy"]');

      if (sellField) sellField.textContent = currentRates[currencyCode].sell;
      if (buyField) buyField.textContent = currentRates[currencyCode].buy;
    }
  });
}

pillBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownWrap.classList.toggle("open");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.dataset.value;
    pillText.textContent = CURRENCY_DATA[selectedValue].label;
    pillBtn.dataset.activeType = selectedValue;

    menuItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    updateCurrencyRates(selectedValue);
    dropdownWrap.classList.remove("open");
  });
});

document.addEventListener("click", () => {
  dropdownWrap.classList.remove("open");
});