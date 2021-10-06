const btn = document.querySelector('.btn');
const imgdiv =document.querySelector('#imgdiv')
const getimage = async () => {
    //call the URL
    const url = await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
    getNewImage(url.message)
    
}

function getNewImage(imge){

    imgdiv.innerHTML =`<img src='${imge}' width='100px' height='100px'></img>`
    
}
getimage();

btn.addEventListener('click',getimage);