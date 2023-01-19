const search_text = document.getElementById('search_text');
const button = document.getElementById('searchBtn');
const recieved = document.getElementById('results');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
	}
};

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (search_text.value !== null) {
        find()
    } else {
        recieved.style.display = 'none';
    }
})





function find() {
    //for the search
    fetch(`https://gogoanime2.p.rapidapi.com/search?keyw=${search_text.value}&page=1`, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('results').innerHTML = ''
        let start = document.createElement('h3')
        let midd = document.createElement('ul')

        start.innerHTML = 'Search Results'
        start.classList.add('rHeading')
        midd.classList.add('found-list')
        midd.classList.add('view')

        let found = ''
        data.forEach(anime => {
            found += `<li>
                    <img src="${anime.animeImg}" alt="">
                    <div class="desc">
                        <h3>${anime.animeTitle}</h3>
                        <h4>${anime.status}</h4>
                    </div>
                </li>
        `
        })
        
        midd.innerHTML = found;
        document.getElementById('results').appendChild(start);
        document.getElementById('results').appendChild(midd);
    })
    
}



fetch('https://gogoanime2.p.rapidapi.com/genre/action?page=-11', options)
.then(response => response.json())
.then(data => {
    // console.log(data)
    let action = '';
    data.forEach(anime => {
        action += `<li>
                        <img src="${anime.animeImg}" alt="">
                        <div class="desc">
                            <h3>${anime.animeTitle}</h3>
                            <h4>${anime.releasedDate}</h4>
                        </div>
                    </li>`
                    document.querySelector('.action-list').innerHTML = action;
                });
    

})
fetch('https://gogoanime2.p.rapidapi.com/genre/adventure?page=-11', options)
.then(response => response.json())
.then(data => {
    // console.log(data)
    let adventure = '';
    data.forEach(anime => {
        adventure += `<li>
                        <img src="${anime.animeImg}" alt="">
                        <div class="desc">
                            <h3>${anime.animeTitle}</h3>
                            <h4>${anime.releasedDate}</h4>
                        </div>
                    </li>`
                    document.querySelector('.adventure-list').innerHTML = adventure;
                });
    

})
fetch('https://gogoanime2.p.rapidapi.com/genre/magic?page=-11', options)
.then(response => response.json())
.then(data => {
    // console.log(data)
    let magic = '';
    data.forEach(anime => {
        magic += `<li>
                        <img src="${anime.animeImg}" alt="">
                        <div class="desc">
                            <h3>${anime.animeTitle}</h3>
                            <h4>${anime.releasedDate}</h4>
                        </div>
                    </li>`
                    document.querySelector('.magic-list').innerHTML = magic;
                });
    

})
fetch('https://gogoanime2.p.rapidapi.com/genre/sci-fi?page=-11', options)
.then(response => response.json())
.then(data => {
    // console.log(data)
    let sciFi = '';
    data.forEach(anime => {
        sciFi += `<li>
                        <img src="${anime.animeImg}" alt="">
                        <div class="desc">
                            <h3>${anime.animeTitle}</h3>
                            <h4>${anime.releasedDate}</h4>
                        </div>
                    </li>`
                    document.querySelector('.sci-fi-list').innerHTML = sciFi;
                });
    

})