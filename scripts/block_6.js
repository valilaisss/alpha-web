const ABOUT_CATEGORIES = {
    achievements: [
        {
            area: "employer",
            title: "Альфа-Банк — лучший работодатель России",
            subtitle: "Третий год подряд по версии HeadHunter",
            image: "https://alfabank.servicecdn.ru/site-upload/ab/d0/1449/D_CardPure_558x444_200126.png"
        },
        {
            area: "private",
            title: "Крупнейший частный банк",
            subtitle: "40 миллионов клиентов выбрали нас <br> 800+ офисов и доставка в 2500 городов",
            image: "https://alfabank.servicecdn.ru/site-upload/6e/ac/5227/D_CardPure_558x210_060525-3.png"
        },
        {
            area: "reviews",
            title: "Отзывы",
            subtitle: "Мы читаем все ваши комментарии <br> о нашей работе. И каждый день <br> стараемся быть лучше",
            image: "https://alfabank.servicecdn.ru/site-upload/bf/89/5227/D_CardPure_558x210_060525-2.png"
        }
    ],
    work: [
        {
            area: "employer",
            title: "Альфа-Будущее",
            subtitle: "Стажировки для студентов во всей стране",
            image: "https://alfabank.servicecdn.ru/site-upload/58/e6/5227/D_CardPure_558x444_060525.png"
        },
        {
            area: "private",
            title: "Вакансии в Альфа-Банке",
            subtitle: "Ждём вас в нашей команде",
            image: "https://alfabank.servicecdn.ru/site-upload/f5/34/5227/D_CardPure_558x210_060525.png"
        },
        {
            area: "reviews",
            title: "Свой в Альфе",
            subtitle: "Делитесь выгодой <br> и зарабатывайте",
            image: "https://alfabank.servicecdn.ru/site-upload/ac/70/5227/D_CardPure_558x210_060525-1.png"
        }
    ]
};

const aboutTabsBox = document.querySelector(".about-choose");
const tabsMovingPill = document.querySelector(".about-bg-pill");
const block6Buttons = document.querySelectorAll("[data-about-category]");
const cardsGridContainer = document.querySelector("[data-about-container]");

function moveSelectionPill(activeButton) {
    if (!activeButton || !tabsMovingPill || !aboutTabsBox) return;
    
    const parentRect = aboutTabsBox.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    const relativeLeft = buttonRect.left - parentRect.left + aboutTabsBox.scrollLeft;
    
    tabsMovingPill.style.left = `${relativeLeft}px`;
    tabsMovingPill.style.width = `${buttonRect.width}px`;
}

function displayAboutGrid(categoryName) {
    if (!cardsGridContainer || !ABOUT_CATEGORIES[categoryName]) return;
    
    cardsGridContainer.innerHTML = "";
    
    ABOUT_CATEGORIES[categoryName].forEach((cardData, index) => {
        const cardNode = document.createElement("div");
        cardNode.classList.add("about-card");
        
        if (index === 0) {
            cardNode.classList.add("big-card");
        }
        
        if (window.innerWidth > 768 && cardData.area) {
            cardNode.style.gridArea = cardData.area;
        }
        
        if (cardData.image) {
            cardNode.style.backgroundImage = `url('${cardData.image.trim()}')`;
        }
        
        cardNode.innerHTML = `
            <div class="about-card-text">
                <h3>${cardData.title}</h3>
                <p>${cardData.subtitle}</p>
            </div>
        `;
        
        cardsGridContainer.appendChild(cardNode);
    });
}

block6Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetCategory = btn.dataset.aboutCategory;
        displayAboutGrid(targetCategory);
        block6Buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        moveSelectionPill(btn);
    });
});

function initAboutComponent() {
    displayAboutGrid("achievements");
    const initialActiveBtn = document.querySelector('[data-about-category="achievements"]');
    if (initialActiveBtn) {
        initialActiveBtn.classList.add("active");
        moveSelectionPill(initialActiveBtn);
    }
}

window.addEventListener("resize", () => {
    const currentActiveBtn = document.querySelector("[data-about-category].active");
    if (currentActiveBtn) {
        displayAboutGrid(currentActiveBtn.dataset.aboutCategory);
        moveSelectionPill(currentActiveBtn);
    }
});

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAboutComponent);
} else {
    initAboutComponent();
}