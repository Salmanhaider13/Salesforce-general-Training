// Mobile local-navbar toggle
document.querySelector('.container').addEventListener('click', (e) => {
    const container = e.currentTarget;
    const dropdown = document.querySelector('.local-dropdown');
    container.classList.toggle('rotate');

    if (container.classList.contains('rotate')) {
        dropdown.innerHTML = '';
        const ul = document.createElement('ul');
        for (const section of ['Overview', 'macOS', 'Compare']) {
            const li = document.createElement('li');
            li.textContent = section.trim();
            li.style.fontSize = '1.5rem';
            ul.appendChild(li);
        }

        dropdown.appendChild(ul);
        dropdown.style.cssText = 'display: flex; flex-direction: column; height: 700px;';
    } else {
        dropdown.style.display = 'none';
        dropdown.innerHTML = '';
    }
});

document.onscroll=()=>{
    const sticky=document.querySelector('.choice-container');
    if(sticky.offsetTop>450){
        sticky.style.backgroundColor='rgba(239, 237, 237, 0.73)';
    }
    else{
        sticky.style.backgroundColor='#fff';
    }
}

// document.querySelectorAll('.color-option').forEach((element)=>{
//     for (let color of ['skyblue','silver','starlight','midnight']){
//         const li=document.createElement('li');
//         li.classList.add('color-item');
//         li.style.backgroundColor=color.trim();
//         element.appendChild(li);
//     }
// });