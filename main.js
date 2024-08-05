
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
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.querySelector('.img_upload button');
    const fileInput = document.querySelector('.img_upload input[type="file"]');

    if (uploadButton && fileInput) {
        uploadButton.addEventListener('click', function() {
            fileInput.click();
        });
    } else {
        console.error('Upload button or file input not found');
    }
});
