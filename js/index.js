function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}

const nav_bar = _$("nav-bar")
const btn_1 = _$("btn1")
const btn_2 = _$("btn2")
const btn_3 = _$("btn3")
const btn_4 = _$("btn4")
const btn_5 = _$("btn5")

const info_container = _$("info-container")
const box_container_one = _$("box-container-one")
const box_container_two = _$("box-container-two")
const img_content1 = _$("img-content1")
const img_content2 = _$("img-content2")
const logo = _$("logo")

let info_image = ["img/Vector (9).png","img/Vector (8).png","img/Vector (7).png"]
let info_txt = ["A single source of truth","Intuitive interface","Or with rules"]
let tab_nav_bar = ["Home","Product","About","Contact"]
let tab_image1 = ["img/Card.png","img/Rectangle 1.png","img/Rectangle 1 (1).png","img/Rectangle 1 (2).png"]
let tab_image2 = ["img/Rectangle 1 (3).png","img/Rectangle 1 (4).png","img/Rectangle 1 (5).png"]
let tab_image3 = ["img/Card.png","img/Rectangle 1 (8).png","img/Rectangle 1 (7).png","img/Rectangle 1 (6).png"]
let tab_logo = ["img/logos_apple-app-store.png","img/logos_apiary.png","img/logos_android-icon.png","img/logos_basecamp.png","img/Vector (2).png","img/Vector (3).png"]

let data_txt = "When you add work to your Slate calendar we automatically calculate useful insights"
let content_txt = "Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
const navLink = (selector, table) => {
    table.forEach((data) => {   
  let lien = _createElts("td")
      selector.appendChild(lien)
  
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
  
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("lien_href")
      lien_href.appendChild(a)
    })
  }

  navLink(nav_bar,tab_nav_bar)

  const buttonCheck = (selector,height,width,value,backgroundColor, color,borderColor,radius,marginTop,marginLeft) => {
    let t_btn = _createElts("button")
    selector.appendChild(t_btn)

    t_btn.style.height = height + "rem"
    t_btn.style.width = width + "rem"
    t_btn.textContent = value
    t_btn.style.background = backgroundColor
    t_btn.style.color = color
    t_btn.style.borderColor = borderColor
    t_btn.style.borderRadius = radius + "px"
    t_btn.classList.add("btn_1")
    t_btn.style.marginTop = marginTop + "rem"
    t_btn.style.marginLeft = marginLeft + "rem"
    t_btn.classList.add("style-element")
    t_btn.classList.add("button-hover")
}

buttonCheck(btn_1,2.8,8,"Login","transparent","white","white",0,0.4,12)
buttonCheck(btn_2,3,9,"Try For Free","rgba(68, 82, 254, 1)","white","transparent",0,0,0)
buttonCheck(btn_3,3,9,"Learn More","transparent","white","white",0,0,"")

const image_grid = (selector,data,width,height,marginTop,marginLeft) =>{
    selector.src = data
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.marginTop = marginTop + "rem"
    selector.style.marginLeft = marginLeft + "rem"
}

  const icon_grid = (selector,table) =>{
      table.forEach((data) => {
      let t_div = _createElts("div")
      let t_img = _createElts("img")
      selector.appendChild(t_div)
      t_div.appendChild(t_img)
      image_grid(t_img,data,"1","1","-0.5")
      })
  }

const loop_info = (selector,table1,table2,data) =>{
    for (let i = 0; i < 3 ; i++){
        let t_div = _createElts("div")
        selector.appendChild(t_div)
        t_div.style.marginTop = "5%"

        let t_div1 = _createElts("div")
        t_div.appendChild(t_div1)
        t_div1.classList.add("inline")

        let t_div1_1 = _createElts("img")
        t_div1.appendChild(t_div1_1)

        let t_div1_2 = _createElts("h2")
        t_div1.appendChild(t_div1_2)

        let t_div2 = _createElts("div")
        t_div.appendChild(t_div2)

        image_grid(t_div1_1,table1[i],1.5,1.5,0,0)

        t_div1_2.textContent = table2[i]
        t_div1_2.classList.add("text")
        t_div2.textContent = data
        t_div2.classList.add("text_p")
    }
}
loop_info(info_container,info_image,info_txt,data_txt)

const graph =(selector,height,width,color,radius) => {
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.background = color
    selector.style.borderRadius = radius + "rem"
}

const box_loop_container = (selector,height,width,value,background,color,borderColor,radius,marginTop,marginLeft,src,width1,height1,marginTop1,marginLeft1,data1,data2) => {
        graph(selector,33,23,"white",1)    
        selector.classList.add("space")
        let t_div1 = _createElts("div")
        selector.appendChild(t_div1)
        t_div1.classList.add("info-title-color")

        let t_div2 = _createElts("div")
        selector.appendChild(t_div2)
        t_div2.classList.add("info-txt-element")

        let t_div3 = _createElts("div")
        selector.appendChild(t_div3)

        let t_div4 = _createElts("img")
        selector.appendChild(t_div4)

        t_div1.textContent = data1
        t_div2.textContent = data2
        buttonCheck(t_div3,height,width,value,background,color,borderColor,radius,marginTop,marginLeft)
        image_grid(t_div4,src,width1,height1,marginTop1,marginLeft1)
}

box_loop_container(box_container_one,2.8,8,"Sign up","rgba(68, 82, 254, 1)","white","transparent",0,4,6.8,"img/Macbook Pro.png",18,"auto",3,2,"Work",content_txt)
box_loop_container(box_container_two,2.8,10,"Try For Free","rgba(68, 82, 254, 1)","white","transparent",0,2,6.8,"img/Boards Notifications.png",20,"auto",1,2,"Design with real data",content_txt)

const image_grid2 = (selector,table,width,height,marginTop,marginLeft,x) => {
    table.forEach((data) => {
        let t_div = _createElts("div")
        let t_img = _createElts("img")
        selector.appendChild(t_div)
        t_div.appendChild(t_img)
        image_grid(t_img,data,width,height,marginTop,marginLeft)
        t_img.style.borderRadius = x +"px"
        })
}

const chooseImage = () => {
    const screenWidth = window.innerWidth;

    if(screenWidth >=800){
        image_grid2(img_content1,tab_image1,12,16,2,2,10)
        image_grid2(img_content2,tab_image2,20,16,2,2,10)
        buttonCheck(btn_4,3,9,"See more","transparent","white","white",0,3,44)
    }
    else{
        image_grid2(img_content1,tab_image3,17,16,2,-1,10)
        buttonCheck(btn_4,3,9,"See more","transparent","white","white",0,3,44)
    }
}

chooseImage()
window.addEventListener("resize",chooseImage)

image_grid2(logo,tab_logo,3.1,3.5,0,5,0)
buttonCheck(btn_5,3,9,"All Partners","transparent","white","white",0,2,44)