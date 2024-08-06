
const search = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const uploadButton = document.querySelector('.img_upload button');
const fileInput = document.querySelector('.img_upload input[type="file"]');
const button = document.getElementById('btn')
const fileUpload = document.getElementById('file-upload');
const myForm = document.getElementById('myForm');







// search event 

search.addEventListener('click',()=>{
    if(searchInput.style.display === 'none' || searchInput.style.display === ''){
        searchInput.style.display = 'block';
        searchInput.focus();
    }else{
        searchInput.style.display = 'none';
    }
})


// image upload

document.addEventListener('DOMContentLoaded',()=> {
    if (uploadButton && fileInput) {
        uploadButton.addEventListener('click',()=> {
            fileInput.click();
        });
    } else {
        console.error('Upload button or file input not found');
    }
});


button.addEventListener('click',()=>{
    fileUpload.click();
});

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    // let isValid = true;
});
