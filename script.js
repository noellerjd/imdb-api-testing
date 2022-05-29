var searchEl = document.querySelector('#search')
var submitButton = document.querySelector('#submit')
var searchFormEl = document.querySelector('#search-form')

var baseUrl = 'https://imdb-api.com'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var submitSearch = (event) => {
    event.preventDefault()

    if(searchEl.value == ''){
        alert("Please enter a movie name first!");
    } else{
        fetch(`https://imdb-api.com/API/SearchMovie/k_fp9014yi/${searchEl.value}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log ('error', error));
    }
}

submitButton.addEventListener('click', submitSearch)
