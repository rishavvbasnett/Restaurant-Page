import "./reset.css"

const Menu = () => {
    const contentBox = document.querySelector("#content")
        contentBox.style.display = "flex"
        contentBox.style.flexDirection = "column"
        contentBox.style.paddingTop = "1rem"
        contentBox.style.gap = "3rem"

    const appetizerBox = document.createElement("div")
        appetizerBox.style.display = "flex"
        appetizerBox.style.flexDirection = "column"
        appetizerBox.style.gap = "2rem"

    const headerApps = document.createElement("h2")
        headerApps.style.margin = "0"
        headerApps.style.padding = "0"
        headerApps.id = "contentHeading"
        headerApps.style.textAlign = "center"
        headerApps.style.letterSpacing = "3px"
        headerApps.textContent = "Appetizers"
        headerApps.style.color = "rgb(152, 96, 13)"
        headerApps.style.textShadow = "0.5px 0.6px 0.7px black"
        headerApps.style.fontSize = "1.8rem"
        headerApps.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'
    
    const innerAppsBox = document.createElement("div")
        innerAppsBox.style.display = "grid"
        innerAppsBox.style.gridTemplateColumns = "repeat(auto-fit, 300px)"
        innerAppsBox.style.gap = "2rem"
        innerAppsBox.style.justifyContent = "center"

    const pic1 = document.createElement("div")
        pic1.style.minHeight = "300px"
        pic1.style.border = "2px solid black"
        pic1.style.borderRadius = "10px"
    const pic2 = document.createElement("div")
        pic2.style.minHeight = "300px"
        pic2.style.border = "2px solid black"
        pic2.style.borderRadius = "10px"
    const pic3 = document.createElement("div")
        pic3.style.minHeight = "300px"
        pic3.style.border = "2px solid black"
        pic3.style.borderRadius = "10px"
    const pic4 = document.createElement("div")
        pic4.style.minHeight = "300px"
        pic4.style.border = "2px solid black"
        pic4.style.borderRadius = "10px"

        innerAppsBox.append(pic1,pic2,pic3, pic4)
        appetizerBox.append(headerApps, innerAppsBox)
        contentBox.append(appetizerBox)
    

    const entreBox = document.createElement("div")
        entreBox.style.display = "flex"
        entreBox.style.flexDirection = "column"
        entreBox.style.gap = "2rem"

    const headerEntre = document.createElement("h2")
        headerEntre.style.margin = "0"
        headerEntre.style.padding = "0"
        headerEntre.id = "contentHeading"
        headerEntre.style.textAlign = "center"
        headerEntre.style.letterSpacing = "3px"
        headerEntre.textContent = "Entrée"
        headerEntre.style.color = "rgb(152, 96, 13)"
        headerEntre.style.textShadow = "0.5px 0.6px 0.7px black"
        headerEntre.style.fontSize = "1.8rem"
        headerEntre.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'
    
    const innerEntreBox = document.createElement("div")
        innerEntreBox.style.display = "grid"
        innerEntreBox.style.gridTemplateColumns = "repeat(auto-fit, 300px)"
        innerEntreBox.style.gap = "2rem"
        innerEntreBox.style.justifyContent = "center"

    const p1 = document.createElement("div")
        p1.style.minHeight = "300px"
        p1.style.border = "2px solid black"
        p1.style.borderRadius = "10px"
    const p2 = document.createElement("div")
        p2.style.minHeight = "300px"
        p2.style.border = "2px solid black"
        p2.style.borderRadius = "10px"
    const p3 = document.createElement("div")
        p3.style.minHeight = "300px"
        p3.style.border = "2px solid black"
        p3.style.borderRadius = "10px"
    const p4 = document.createElement("div")
        p4.style.minHeight = "300px"
        p4.style.border = "2px solid black"
        p4.style.borderRadius = "10px"

        innerEntreBox.append(p1,p2,p3, p4)
        entreBox.append(headerEntre, innerEntreBox)
        contentBox.append(entreBox)


}

export { Menu }