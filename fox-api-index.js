const apiUrl = "https://randomfox.ca/floof/";
const imageArea = document.getElementById("fox-image")
const overlayElement = document.getElementById("overlay");
const loadFoxImage = ({image})=>{
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imageArea.appendChild(imgElement);
}
const sleepTime = () => 
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('resolved');
    }, 1000);
    
})
const getRandomFox = async () => {
    overlayElement.style.display = "flex";
    await sleepTime();
const response = await fetch(apiUrl);
const data = await response.json();
imageArea.innerHTML = "";
loadFoxImage(data);
overlayElement.style.display = "none";
};
getRandomFox();