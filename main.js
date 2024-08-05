
// document.getElementById('search-bar').addEventListener('click',function(){
//     var searchInput = document.getElementById('search-input');

//     if(searchInput.style.display === 'none' || searchInput.style.display === ' '){
//         searchInput.style.display = 'block';
//         searchInput.focus()
//     }else{
//         searchInput.style.display = 'none'
//     }
// })

document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
        searchInput.focus(); // Optional: To automatically focus the input field
    } else {
        searchInput.style.display = 'none';
    }
});