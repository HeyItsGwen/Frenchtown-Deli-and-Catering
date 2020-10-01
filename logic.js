//button selectors
let homeButton = document.getElementById('homeButton');
let homeLogo = document.getElementById('homeLogo');
let cateringButton = document.getElementById('cateringButton');
let gratuitiesButton = document.getElementById('gratuitiesButton');
let reviewsButton = document.getElementById('reviewsButton');
let contactButton = document.getElementById('contactButton');

//article selectors
let homeArticle = document.getElementById('homeArticle');
let contactArticle = document.getElementById('contactArticle');
let cateringArticle = document.getElementById('cateringArticle');
let gratuitiesArticle = document.getElementById('gratuitiesArticle');
let reviewsArticle = document.getElementById('reviewsArticle');

//menu button selectors
let buffetButton= document.getElementById('buffetButton');
let alacarteButton= document.getElementById('alacarteButton');
let boxlunchButton= document.getElementById('boxlunchButton');
let partytrayButton= document.getElementById('partytrayButton');
let appetizerButton= document.getElementById('appetizerButton');
let barmenuButton= document.getElementById('barmenuButton');

//menu selectors
let buffetMenu= document.getElementById('buffetMenu');
let alacarteMenu= document.getElementById('alacarteMenu');
let boxlunchMenu= document.getElementById('boxlunchMenu');
let partytrayMenu= document.getElementById('partytrayMenu');
let appetizerMenu= document.getElementById('appetizerMenu');
let barMenu= document.getElementById('barMenu');

let elemArray = [homeArticle, cateringArticle, gratuitiesArticle, reviewsArticle, contactArticle];

let menuArray = [buffetMenu, alacarteMenu, boxlunchMenu, partytrayMenu, appetizerMenu, barMenu];

const show = (id) => {
    id.classList.add('d-flex');
}
  
const showMenu = (id) => {
    id.classList.remove('d-none');
}

const hide = (id) => {
    id.classList.remove('d-flex');
    id.classList.add('d-none');
}

const fillMenu = (id) => {
    
}

const containsFlex = (elem) => {
    return elem.classList.contains('d-flex');
}

const hideAllSections = () => {
    for (let i in elemArray) {
        if (elemArray[i].classList.contains('d-flex')){
            hide(elemArray[i]);
        }
    }
}

const hideAllMenus = () => {
    for (let i in elemArray) {
        if (!menuArray[i].classList.contains('d-none')){
            menuArray[i].classList.add('d-none')
        }
    }
}

homeButton.addEventListener('click', () => {
    hideAllSections();
    show(homeArticle);
});
homeLogo.addEventListener('click', () => {
    hideAllSections();
    show(homeArticle);
});

const showContact = () => {
    hideAllSections();
    show(contactArticle);
}

contactButton.addEventListener('click', () => {
    hideAllSections();
    show(contactArticle);
});
cateringButton.addEventListener('click', () => {
    hideAllSections();
    show(cateringArticle);
});
reviewsButton.addEventListener('click', () => {
    hideAllSections();
    show(reviewsArticle);
});
gratuitiesButton.addEventListener('click', () => {
    hideAllSections();
    show(gratuitiesArticle);
});

buffetButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(buffetMenu);
});
alacarteButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(alacarteMenu);
});
boxlunchButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(boxlunchMenu);
});
partytrayButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(partytrayMenu);
});
appetizerButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(appetizerMenu);
});
barmenuButton.addEventListener('click', () => {
    hideAllMenus();
    showMenu(barMenu);
});