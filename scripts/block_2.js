const CARD_CATEGORIES = {
  all: [
    {
      title: "Дебетовые карты",
      subtitle: "Суперкэшбэк до 100%",
      image: "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "Кредитные карты",
      subtitle: "Обслуживание 0 ₽",
      image: "https://alfabank.servicecdn.ru/site-upload/91/be/1449/D_CardPromo_267x298_230524.png",
      href: "#",
    },
    {
      title: "Кредиты",
      subtitle: "Оформление онлайн",
      image: "https://alfabank.servicecdn.ru/site-upload/b3/74/2330/CardPromo_267x298_121123-4.png",
      href: "#",
    },
    {
      title: "Накопления",
      subtitle: "Доход с первого месяца",
      image: "https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png",
      href: "#",
    },
    {
      title: "Инвестиции",
      subtitle: "Начните зарабатывать",
      image: "https://alfabank.servicecdn.ru/site-upload/20/9a/1449/D_CardPromo_267x298-15122025.png",
      href: "#",
    },
    {
      title: "Ипотека",
      subtitle: "Одобрим за 60 секунд",
      image: "https://alfabank.servicecdn.ru/site-upload/90/85/2330/CardPromo_267x298_121123-3.png",
      href: "#",
    },
    {
      title: "Alfa Only",
      subtitle: "Ваш премиальный сервис",
      image: "https://alfabank.servicecdn.ru/site-upload/c9/0c/1449/D_CardPromo_267x298_071024.png",
      href: "#",
    },
    {
      title: "Для детей и семьи",
      subtitle: "Карты с кэшбэком",
      image: "https://alfabank.servicecdn.ru/site-upload/0d/ce/1449/D_CardPromo_267x298_120924.png",
      href: "#",
    },
  ],
  "small-business": [
    {
      title: "Регистрация бизнеса",
      subtitle: "Онлайн за 0 ₽",
      image: "https://alfabank.servicecdn.ru/site-upload/07/a9/7110/D_CardPromo_267x298_221223-8.jpg",
      href: "#",
    },
    {
      title: "Счёт для бизнеса",
      subtitle: "Бесплатно",
      image: "https://alfabank.servicecdn.ru/site-upload/f4/4d/7110/D_CardPromo_267x298_221223-1.jpg",
      href: "#",
    },
    {
      title: "Кредиты",
      subtitle: "На развитие бизнеса",
      image: "https://alfabank.servicecdn.ru/site-upload/97/89/1449/D_CardPromo_267x298_3_18042025.png",
      href: "#",
    },
    {
      title: "Эквайринг",
      subtitle: "Комиссия от 1%",
      image: "https://alfabank.servicecdn.ru/site-upload/68/28/7110/D_CardPromo_267x298_221223-10.jpg",
      href: "#",
    },
    {
      title: "Карты",
      subtitle: "С кэшбэком до 10%",
      image: "https://alfabank.servicecdn.ru/site-upload/0c/91/1449/D_CardPromo_267x298_5_18042025.png",
      href: "#",
    },
    {
      title: "Депозиты",
      subtitle: "Онлайн от 1 дня",
      image: "https://alfabank.servicecdn.ru/site-upload/ce/a3/60/D_CardPromo_267x298_dep.png",
      href: "#",
    },
    {
      title: "Отраслевые решения",
      subtitle: "Для любого бизнеса",
      image: "https://alfabank.servicecdn.ru/site-upload/6b/a8/7110/D_CardPromo_267x298_221223-6.jpg",
      href: "#",
    },
    {
      title: "Всё для малого бизнеса",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/ae/91/7110/D_CardPromo_267x298_221223-7.jpg",
      href: "#",
      extraClass: "card-special-2"
    },
  ],
  "large-business": [
    {
      title: "Расчётный счёт",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/07/a9/7110/D_CardPromo_267x298_221223-8.jpg",
      href: "#",
    },
    {
      title: "Кредиты",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/b8/47/7110/D_CardPromo_267x298_221223-9.jpg",
      href: "#",
    },
    {
      title: "Эквайринг",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/68/28/7110/D_CardPromo_267x298_221223-10.jpg",
      href: "#",
    },
    {
      title: "Факторинг",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/ca/fa/7110/D_CardPromo_267x298_221223-11.jpg",
      href: "#",
    },
    {
      title: "Зарплатный проект",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/00/16/7110/D_CardPromo_267x298_221223-12.jpg",
      href: "#",
    },
    {
      title: "ВЭД",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/12/05/7110/D_CardPromo_267x298_221223-13.jpg",
      href: "#",
    },
    {
      title: "Инвестбанк",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/1e/ff/7110/D_CardPromo_267x298_221223-14.jpg",
      href: "#",
    },
    {
      title: "Всё для крупного бизнеса",
      subtitle: "",
      image: "https://alfabank.servicecdn.ru/site-upload/4b/c2/7110/D_CardPromo_267x298_221223-15.jpg",
      href: "#",
      extraClass: "card-special"
    },
  ],
};

const CATEGORY_TEXT = {
  all: "",
  "small-business": "Для компании с оборотом до 500 млн ₽ в год",
  "large-business": "Для компании с оборотом от 500 млн ₽ в год",
};

let segmentedControl = document.querySelector(".segmented-control");
let controlBackground = document.querySelector("[data-card-background]");
let controlButtons = document.querySelectorAll("[data-card-category]");
let cardsContainer = document.querySelector("[data-cards-container]");
let categoryDescription = document.querySelector("[data-category-description]");

function initTabs() {
  renderCards("all");
  if (categoryDescription) categoryDescription.textContent = CATEGORY_TEXT["all"];

  let activeBtn = document.querySelector("[data-card-category='all']");
  if (activeBtn && controlBackground && segmentedControl) {
    controlBackground.style.width = `${activeBtn.offsetWidth}px`;
    controlBackground.style.left = `${activeBtn.getBoundingClientRect().left - segmentedControl.getBoundingClientRect().left}px`;
  }
}

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let category = button.dataset.cardCategory;
    
    renderCards(category);
    
    if (categoryDescription) {
      categoryDescription.textContent = CATEGORY_TEXT[category] || "";
    }

    for (let btn of controlButtons) {
      btn.classList.remove("active");
    }
    
    controlBackground.style.width = `${button.offsetWidth}px`;
    controlBackground.style.left = `${button.getBoundingClientRect().left - segmentedControl.getBoundingClientRect().left}px`;
    button.classList.add("active");
  });
});

function renderCards(category) {
  cardsContainer.innerHTML = "";
  CARD_CATEGORIES[category].forEach((card) => {
    let cardElement = document.createElement("a");
    cardElement.href = card.href || "#";
    cardElement.classList.add("block-2-card");
    if (card.extraClass) {
      cardElement.classList.add(card.extraClass);
    }
    cardElement.innerHTML = `
        <div class="block-2-card-content">
            <h3>${card.title}</h3>
            <p>${card.subtitle || ""}</p>
        </div>
      `;
    cardElement.style.backgroundImage = `url(${card.image})`;
    cardsContainer.appendChild(cardElement);
    console.log(card);
  });
}

window.addEventListener("resize", () => {
  let currentActive = document.querySelector(".block-2-tab-btn.active");
  if (currentActive && controlBackground && segmentedControl) {
    controlBackground.style.width = `${currentActive.offsetWidth}px`;
    controlBackground.style.left = `${currentActive.getBoundingClientRect().left - segmentedControl.getBoundingClientRect().left}px`;
  }
});

initTabs();