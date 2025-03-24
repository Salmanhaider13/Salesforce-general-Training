// script.js (optimized version)
import menuDetails from './menu-details.js';

const backgroundImages = [
    'https://www.apple.com/v/home/cd/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_large.jpg',
    'https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg',
    'https://www.apple.com/v/home/cd/images/heroes/mac-studio/hero_macstudio_avail__9in6vrtrzfmi_large.jpg',
    'https://www.apple.com/in/home/promos/ipad/images/promo_ipad__fioegapg12qi_large.jpg',
    'https://www.apple.com/v/home/cd/images/promos/iphone-family/promo_iphone_family__ofrg9zdy1teq_large.jpg',
    'https://www.apple.com/v/home/cd/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg',
    'https://www.apple.com/v/home/cd/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_large.jpg',
    'https://www.apple.com/v/home/cd/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg',
    'https://www.apple.com/in/home/promos/ipad-pro/images/promo_ipadpro_avail__s271j89g8kii_small.jpg',
];

// Button behavior
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        location.href = 'Buy.html';
    });
});

// Set background images
document.querySelectorAll('.service-showcase, .service-card').forEach((el, i) => {
    el.style.backgroundImage = `url(${backgroundImages[i] || ''})`;
});

// Dropdown menu functionality
const createDropdownContent = (elementName, dropdown) => {
    dropdown.innerHTML = '';
    dropdown.style.display = 'flex';
    Object.entries(menuDetails[elementName]).forEach(([section, items], index) => {
        const ul = document.createElement('ul');
        const title = document.createElement('li');
        title.textContent = section;
        title.style.cssText = 'font-weight: lighter; font-size: 0.8rem;';
        ul.appendChild(title);

        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            if (index === 0) {
                li.style.cssText = 'font-weight: 600; font-size: 1.5rem; color: black;';
            }
            ul.appendChild(li);
        });
        dropdown.appendChild(ul);
    });
};

document.querySelectorAll('.navbar-item').forEach(item => {
    const dropdown = document.querySelector('.dropdown');
    const elementName = item.textContent.trim();
    
    if (menuDetails[elementName]) {
        item.addEventListener('mouseenter', () => createDropdownContent(elementName, dropdown));
        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
            dropdown.innerHTML = '';
        });
    }
});

// Mobile navbar toggle
document.querySelector('.container').addEventListener('click', (e) => {
    const container = e.currentTarget;
    const dropdown = document.querySelector('.dropdown');
    container.classList.toggle('change');

    if (container.classList.contains('change')) {
        dropdown.innerHTML = '';
        const ul = document.createElement('ul');
        Object.keys(menuDetails).forEach(section => {
            const li = document.createElement('li');
            li.textContent = section.trim();
            li.style.fontSize = '3rem';
            ul.appendChild(li);
        });
        dropdown.appendChild(ul);
        dropdown.style.cssText = 'display: flex; flex-direction: column; height: 700px;';
    } else {
        dropdown.style.display = 'none';
        dropdown.innerHTML = '';
    }
});