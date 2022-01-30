// Random profile generator using AJAX & API's with Javascript
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let authors = data.results;
        console.log(authors);
        for (i = 0; i < authors.length; i++) {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
            image.src = authors[i].picture.large;
            div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-1 .flex-ajax-row-1').appendChild(div);
        }
    });

let title = str => str[0].toUpperCase() + str.slice(1);

function mustafa() {
    return '5'
}
mustafa()

function resp() {
    return resp.json();
}

var mustafa = number => 5 + number;
mustafa()



// sound.seek(7);


// challenge 7: wikipedia