import "./reset.css"
import "./styles.css"
import homepageImg from "./images/homepageImg.jpg"


console.log("TEST TEST")

const pageLoad = () => {
    const header = document.createElement("h1")
    header.textContent = "Welcome to Singha Thai"

    const leftBox = document.createElement("div")
        leftBox.classList.add("leftBox")
    const leftText = document.createElement("p")
        leftText.textContent = "At Singha Thai, we are passionate about bringing the authentic flavors of Thailand to your table. Our dishes are carefully crafted to tantalize your taste buds and transport you to the bustling streets of Bangkok. Come and experience the true essence of Thai cuisine with us."
    const leftBtn = document.createElement("button")
        leftBtn.textContent = "Explore our Menu"

    leftBox.appendChild(leftText)
    leftBox.appendChild(leftBtn)


    const rightBox = document.createElement("div")
        rightBox.classList.add("rightBox")
    const rightImg = document.createElement("img")
        rightImg.src = homepageImg

    rightBox.appendChild(rightImg)
    const contentBox = document.querySelector("#content")
    contentBox.appendChild(header)
    contentBox.appendChild(leftBox)
    contentBox.appendChild(rightBox)
}
export { pageLoad }