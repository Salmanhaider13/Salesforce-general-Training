let table = document.getElementById('image-table');
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    var image = document.getElementById('img-file').files[0];
    if (!image) {
        alert('select file first!')
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        const content = e.target.result;
        createTable(content.split('\n'));
    }
    reader.readAsText(image);
});

function createTable(imageArr) {
    for (let i of imageArr) {
        let img = document.createElement('img');
        img.src = i;
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let button = document.createElement('button');
        button.textContent = "Download";
        button.addEventListener('click', function () {
            var imageUrl = i;
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    var link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'image';
                    link.click();
                })
        });
        td1.appendChild(img);
        td2.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
}