const colors = ['skyblue', 'green', 'yellow', 'brown', 'gray', 'orange', 'red', 'purple', 'pink', 'cyan', 'magenta', 'lightgreen', 'lightblue', 'black'];

const handleDrop = (e) => {
    e.preventDefault();
    const first_circle = document.getElementById('first-circle');
    const child_circle = document.createElement('div');
    child_circle.className = 'child-circle';
    child_circle.style.backgroundColor = window.getComputedStyle(first_circle).getPropertyValue('background-color');
    while (true) {
        let color = colors[Math.round(Math.random() * colors.length)];
        if (color !== first_circle.style.backgroundColor) {
            first_circle.style.backgroundColor = color;
            break;
        }
    }
    const target_circle = e.target;
    target_circle.ondrop='';
    child_circle.ondrop=(e)=>{
        handleDrop(e);
    };
    target_circle.appendChild(child_circle);
}

document.getElementById('second-circle').ondragover = (e) => {
    e.preventDefault();
}

document.getElementById('second-circle').ondrop = (e) => {
    handleDrop(e);
};