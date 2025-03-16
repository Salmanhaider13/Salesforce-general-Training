const Tasks = [
    {
        "label": "Task1",
        "value": "/Task1.html",
    },
    {
        "label": "Task2",
        "value": "/Registration.html",
    },
    {
        "label": "Task3",
        "value": "/Task3.html",
    },
    {
        "label": "Task4",
        "value": "/Task4.html",
    },
    {
        "label": "Task5",
        "value": "/Task5.html",
    },
    {
        "label": "Task6",
        "value": "/Task6.html",
    },
    {
        "label": "Task7",
        "value": "/Task7.html",
    }
];

let list_container=document.getElementsByClassName('list-container')[0];

const redirectToUrl=(url)=>{
    location.href=url;
}

Tasks.forEach((task)=>{
    let div=document.createElement('div');
    div.classList.add('list');
    let a=document.createElement('a');
    a.textContent=task.label;
    a.href=task.value;
    a.classList.add('list-item');
    div.appendChild(a);
    list_container.appendChild(div);
});


