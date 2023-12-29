const apiUrl = "https://api.thecatapi.com/v1/images/search";
const imageArea = document.getElementById("cat-image")
const overlayElement = document.getElementById("overlay");
const loadCatImage = ({url})=>{
    
    const imgElement = document.getElementById("img-element");
    imgElement.src = url;
    // imageArea.appendChild(imgElement);
}
const sleepTime = () => 
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('resolved');
    });
    
})
const getRandomCat = async () => {
    overlayElement.style.display = "flex";
    
const response = await fetch(apiUrl);
const data = await response.json();

loadCatImage(data[0]);
overlayElement.style.display = "none";
};
getRandomCat();