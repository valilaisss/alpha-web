const SERVICES_CATEGORIES = {
    "alfa-mobile": {
        columns: "1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "connection internet"
            "connection internet"
            "connection internet"
            "connection sim"
        `,
        cards: [
            {
                area: "connection",
                title: "Альфа-выгодная связь",
                subtitle: "50 ГБ, 500 мин — от 500 ₽",
                image: "https://alfabank.servicecdn.ru/site-upload/83/7f/1449/D_PureCard_461x432_240725-2.png",
            },
            {
                area: "internet",
                title: "Безлимитный интернет",
                subtitle: "Бесплатно и навсегда с тарифом Лайк",
                image: "https://alfabank.servicecdn.ru/site-upload/cf/af/1449/D_PureCard_655x312_240725-2.png",
            },
            {
                area: "sim",
                title: "Оформить сим",
                subtitle: "",
                color: "rgb(214, 236, 255)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png",
            }
        ]
    },

    "alfa-travel": {
        columns: "1fr 1fr 1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "avia tickets tickets train"
            "avia tickets tickets train"
            "tours tickets tickets hotel"
            "tours journey journey hotel"
        `,
        cards: [
            {
                area: "avia",
                title: "От 5% до 10% на авиабилеты",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/ab/2b/1449/D_PureCard_267x204_240725.png",
            },
            {
                area: "tickets",
                title: "Билеты с кэшбэком в Альфа-Тревел",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/2c/88/1449/D_PureCard_558x312_240725-2.png",
            },
            {
                area: "tours",
                title: "10% за туры",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/c4/41/1449/D_PureCard_267x204_240725-1.png",
            },
            {
                area: "hotel",
                title: "10% за отели",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/d1/01/1449/D_PureCard_267x204_24072.png",
            },
            {
                area: "train",
                title: "10% за ж/д билеты",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/31/5c/1449/D_PureCard_267x204_240725-2.png",
            },
            {
                area: "journey",
                title: "В путешествие",
                subtitle: "",
                color: "rgb(214, 230, 255)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png"
            }
        ]
    },

    "alfa-playbill": {
        columns: "1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "cinema concerts"
            "cinema concerts"
            "cinema concerts"
            "events concerts"
        `,
        cards: [
            {
                area: "cinema",
                title: "Персональные подборки и скидки",
                subtitle: "Подборки мероприятий от Альфа-Банка и кэшбэк до 55%",
                image: "https://alfabank.servicecdn.ru/site-upload/54/43/1449/D_PureCard_558x312_240725-1.png",
            },
            {
                area: "concerts",
                title: "Культурная жизнь в новом сервисе Афиша",
                subtitle: "Билеты на шоу, спектакли, концерты в приложении банка",
                image: "https://alfabank.servicecdn.ru/site-upload/9b/49/1449/D_PureCard_558x432_240725-1.png",
            },
            {
                area: "events",
                title: "Купить билет",
                subtitle: "",
                color: "rgb(214, 255, 231)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png"
            }
        ]
    },

    "refill": {
        columns: "1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "fuel azs"
            "fuel azs"
            "fuel azs"
            "found azs"
        `,
        cards: [
            {
                area: "fuel",
                title: "Без очередей и кассиров",
                subtitle: "Просто приезжайте, выбирайте параметры и заправляйтесь",
                image: "https://alfabank.servicecdn.ru/site-upload/7e/4a/1449/D_PureCard_558x312_240725.png",
            },
            {
                area: "azs",
                title: "Кэшбэк до 7% на АЗС",
                subtitle: "Выберите АЗС с нужным топливом в приложении Альфа-Банка и оплатите одной кнопкой",
                image: "https://alfabank.servicecdn.ru/site-presets/c9/e4/131/D_PureCard_558x432_240725.png",
            },
            {
                area: "found",
                title: "Найти заправку",
                subtitle: "",
                color: "rgb(255, 234, 238)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png"
            }
        ]
    },

    "split": {
        columns: "1fr 1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "split shopping discount"
            "split shopping discount"
            "split shopping discount"
            "split shops discount"
        `,
        cards: [
            {
                area: "split",
                title: "Забирайте покупки за 1/4 цены",
                subtitle: "",
                image: "https://alfabank.servicecdn.ru/site-upload/39/ee/1449/D_PureCard_364x432_240725.png",
            },
            {
                area: "shopping",
                title: "Никаких переплат",
                subtitle: "Вы платите 1/4 суммы сразу и ещё три таких же платежа — раз в две недели",
                image: "https://alfabank.servicecdn.ru/site-upload/45/3b/1449/D_PureCard_364x312_240725.png",
            },
            {
                area: "discount",
                title: "Скидки от партнёров",
                subtitle: "Получайте дополнительные скидки от магазинов при оплате с Подели",
                image: "https://alfabank.servicecdn.ru/site-upload/17/04/1449/D_PureCard_364x432_240725-1.png",
            },
            {
                area: "shops",
                title: "40 000 магазинов",
                subtitle: "",
                color: "rgb(255, 234, 238)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png"
            }
        ]
    },

    "insurance": {
        columns: "1fr 1fr",
        rows: "96px 96px 96px 96px",
        grid: `
            "online all"
            "online all"
            "online all"
            "online choose"
        `,
        cards: [
            {
                area: "online",
                title: "Страховой полис онлайн",
                subtitle: "Оформите быстро на сайте или в приложении",
                image: "https://alfabank.servicecdn.ru/site-upload/ed/c6/1449/D_PureCard_461x432_240725.png",
            },
            {
                area: "all",
                title: "Страхование для всех",
                subtitle: "Компенсируем траты на здоровье, дом, автомобиль и защитим ваши деньги",
                image: "https://alfabank.servicecdn.ru/site-upload/76/e5/1449/D_PureCard_655x312_240725.png",
            },
            {
                area: "choose",
                title: "Выбрать свой полис",
                subtitle: "",
                color: "rgb(235, 214, 255)",
                icon: "https://alfabank.servicecdn.ru/site-upload/cb/27/5761/arrow.png"
            }
        ]
    }
};

let useSectionControl = document.querySelector(".use-choose");
let useSectionBackground = document.querySelector("[data-use-background]");
let useSectionButtons = document.querySelectorAll("[data-use-category]");
let useCardsContainer = document.querySelector("[data-use-container]");

function renderUseSectionCards(category) {
    let currentCategory = SERVICES_CATEGORIES[category];
    if (!useCardsContainer || !currentCategory) return;

    useCardsContainer.innerHTML = "";
    if (window.innerWidth > 500) {
        useCardsContainer.style.gridTemplateAreas = currentCategory.grid;
        useCardsContainer.style.gridTemplateColumns = currentCategory.columns;
        useCardsContainer.style.gridTemplateRows = currentCategory.rows;
    } else {
        useCardsContainer.style.gridTemplateAreas = "";
        useCardsContainer.style.gridTemplateColumns = "";
        useCardsContainer.style.gridTemplateRows = "";
    }

    currentCategory.cards.forEach((card) => {
        let cardElement = document.createElement("a");
        cardElement.href = "#";
        cardElement.classList.add("service-card");

        if (window.innerWidth > 500) {
            cardElement.style.gridArea = card.area;
        }
        if (card.image) {
            cardElement.style.backgroundImage = `url(${card.image})`;
        }
        if (card.color) {
            cardElement.style.backgroundColor = card.color;
        }

        cardElement.innerHTML = `
            <div class="service-card-content">
                <div class="service-card-text">
                    <h3>${card.title}</h3>
                    ${card.subtitle ? `<p>${card.subtitle}</p>` : ""}
                </div>
                ${card.icon ? `<img src="${card.icon}" class="service-card-icon" alt="icon">` : ""}
            </div>
        `;
        useCardsContainer.appendChild(cardElement);
    });
}

function updatePillPosition(button) {
    if (!button || !useSectionBackground || !useSectionControl) return;

    let controlRect = useSectionControl.getBoundingClientRect();
    let buttonRect = button.getBoundingClientRect();
    let left = buttonRect.left - controlRect.left + useSectionControl.scrollLeft;

    useSectionBackground.style.left = `${left}px`;
    useSectionBackground.style.width = `${buttonRect.width}px`;
}

useSectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let category = button.dataset.useCategory;
        renderUseSectionCards(category);

        useSectionButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        updatePillPosition(button);
    });
});
 
function initServices() {
    let firstButton = document.querySelector('[data-use-category="alfa-mobile"]');
    if (firstButton) {
        renderUseSectionCards("alfa-mobile");
        setTimeout(() => {
            updatePillPosition(firstButton);
        }, 100);
    }
}

window.addEventListener("resize", () => {
    let activeBtn = document.querySelector("[data-use-category].active");
    if (activeBtn) {
        renderUseSectionCards(activeBtn.dataset.useCategory);
        updatePillPosition(activeBtn);
    }
});

initServices();