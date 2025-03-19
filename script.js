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

//Set button behaviour
for(const element of document.getElementsByTagName('button')){
    element.addEventListener('click',(event)=>{
        event.preventDefault();
        event.stopPropagation();
        location.href='Buy.html';
    })
}

// Set background images
document.querySelectorAll('.service-showcase, .service-card').forEach((element, index) => {
    element.style.backgroundImage = `url(${backgroundImages[index] || ''})`;
});

// Dropdown menu functionality
const navbarItems = document.querySelectorAll('.navbar-item');
navbarItems.forEach(item => {
    const dropdown = document.querySelector('.dropdown');
    const elementName = item.textContent.trim();
    if (menuDetails[elementName]) {

    item.addEventListener('mouseenter', () => {
        dropdown.innerHTML = '';
        dropdown.style.display = 'flex';
            Object.entries(menuDetails[elementName]).forEach(([section, items],index) => {
                const sectionUl = document.createElement('ul');
                const sectionTitle = document.createElement('li');
                sectionTitle.textContent = section;
                sectionTitle.style.fontWeight = 'lighter';
                sectionTitle.style.fontSize = '0.8rem';
                sectionUl.appendChild(sectionTitle);

                items.forEach(itemText => {
                    const li = document.createElement('li');
                    li.textContent = itemText;
                    if(index===0){
                        li.style.fontWeight='600';
                        li.style.fontSize='1.5rem';
                        li.style.color='black';
                    }
                    sectionUl.appendChild(li);
                });
                dropdown.appendChild(sectionUl);
            });
            document.querySelector('.navbar').appendChild(dropdown);
            
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
            dropdown.innerHTML = '';
        });
    }
}
);

//toggle to mobile view navbar
document.querySelector('.container').addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('change');
    const dropdown=document.querySelector('.dropdown');
    if (event.currentTarget.classList.contains('change')) {

        const sectionul = document.createElement('ul');
        Object.keys(menuDetails).forEach(section => {
            const sectionli = document.createElement('li');
            sectionli.textContent = section.trim();
            sectionli.style.fontSize='3rem';
            sectionul.appendChild(sectionli);
        });
        dropdown.appendChild(sectionul);
        document.querySelector('.navbar').appendChild(dropdown);
        dropdown.style.display = 'flex';
        dropdown.style.flexDirection = 'column';
        dropdown.style.height='700px';
    }
    else {
        dropdown.style.display = 'none';
        dropdown.innerHTML='';
    }
});