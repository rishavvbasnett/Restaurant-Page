import "./reset.css"
import "./styles.css"
import { HomePage } from "./home.js";
import { Menu } from "./menu.js";

/* DOM nodes */
const contentBox = document.querySelector("#content")
const clear = function () {
    contentBox.replaceChildren()
}

const headerBtns = document.querySelectorAll("nav>button")
    headerBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            headerBtns.forEach(button => {
                button.style.color = "rgb(96, 73, 3)"
                button.style.backgroundColor = "rgb(234, 218, 153)"
                button.style.transform = "scale(1)"
            })
                btn.style.color = "rgb(233, 226, 204)"
                btn.style.backgroundColor = "rgb(94, 75, 2)"
                btn.style.transform = "scale(1.11)"

            if (e.target.textContent==="Home") {
                clear()
                HomePage()
            }
            if (e.target.textContent==="Menu") {
                clear()
                Menu()
            }
            if (e.target.textContent==="About Us") {
                clear()
            }
        })
    })

Menu()

/* Add event on Explore Our Menu button to open Menu page */
const exploreMenuBtn = document.querySelector("#exploreMenu")
    exploreMenuBtn.addEventListener("click", () => {
        console.log("yes")
        Menu()
    })