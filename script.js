// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
   
//   fetch('https://imdb-api.com/en/API/Title/k_1234567/tt1832382', requestOptions)
//     .then(res => res.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

var searchEl = document.querySelector('#search')
var submitButton = document.querySelector('#submit')
var searchFormEl = document.querySelector('#search-form')

var baseUrl = 'https://imdb-api.com'
// var baseUrl = 'https://www.google.com'
var searchUrl = `${baseUrl}/API/SearchMovie`

var submitSearch = (event) => {
    event.preventDefault()

    if(searchEl.value == ''){
        alert("Please enter a movie name first!");
    } else{
        url = `${searchUrl}/k_fp9014yi/${searchEl.value}`
        console.log("Working")
    }
    getMovie();
    
    // location.assign(`./search-results.html?search_term=${searchEl.value}`)
}

submitButton.addEventListener('click', submitSearch)

var getMovie = (url) => {
    fetch(url).then(res => {console.log(res); return res.json()})
    .then(console.log(res.json))

}