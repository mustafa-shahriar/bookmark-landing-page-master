document.querySelector(".h-icon").addEventListener("click",()=>{
    const menubar =document.querySelector(".h-icon");
    const ul=document.querySelector(".mobilemenuicon");
    if(menubar.src.includes("icon-hamburger.svg")){
        menubar.src="images/xmark-solid.svg";
        ul.classList.remove("hide");
        document.querySelector("#main-logo").src="images/white-logo.svg";
    }else{
        menubar.src="images/icon-hamburger.svg";
        ul.classList.add("hide");
        document.querySelector("#main-logo").src="images/logo-bookmark.svg";
    }
});


featureContent=[
    {
        heading:"Bookmark in one click",
        paragraph:"Organize your bookmarks however you like.Our simple drag-drop interface gives you complete control over how you manage your favorite sites.",
        img:"images/illustration-features-tab-1.svg"
    },
    {
        heading:"Intelligent search",
        paragraph:"Our powerful search feature will help you find saved sites in no times at all.No need to trawl through all of you bookmarks.",
        img:"images/illustration-features-tab-2.svg"
    },
    {
        heading:"Share your bookmarks",
        paragraph:"Easily share bookmarks and collections with others.Create a shareable link that you can send at the click of a button.",
        img:"images/illustration-features-tab-3.svg"
    }
]



for(let i=0;i<3;i++){
    document.querySelector(`.btn${i}tab`).addEventListener("click",()=>{callme(i)});
}

function callme(i){

  document.querySelector("#h1").innerHTML=featureContent[i].heading;
  document.querySelector("#p").innerHTML=featureContent[i].paragraph;
  document.querySelector("#img").src=featureContent[i].img;

  const element1=document.querySelector(".btn0tab");
  const element2=document.querySelector(".btn1tab");
  const element3=document.querySelector(".btn2tab");

if(element1.classList.contains("Strongborder")){
  element1.classList.remove("Strongborder");
}
if(element2.classList.contains("Strongborder")){
  element2.classList.remove("Strongborder");
}
if(element3.classList.contains("Strongborder")){
  element3.classList.remove("Strongborder");
}

document.querySelector(`.btn${i}tab`).classList.add("Strongborder");
document.querySelector(".feature .container").classList.remove("ani");

 setTimeout(()=>{
  document.querySelector(".feature .container").classList.add("ani");
},300)

}

callme(0);


const queBtn = document.getElementsByClassName("que");

for( let i = 0 ; i < queBtn.length ; i++ ){
  queBtn[i].addEventListener("click" , ()=>{
    const paragraph = queBtn[i].nextElementSibling;
 
    paragraph.classList.toggle("show");

    const imgElement = queBtn[i].querySelector("img");
    const source = imgElement.getAttribute("src");

    if (source === "images/chevron-down-solid.svg") {
      imgElement.setAttribute("src", "images/chevron-up-solid.svg");
    } else {
      imgElement.setAttribute("src", "images/chevron-down-solid.svg");
    }
 
  } )
}


document.querySelector("#contactBtn").addEventListener("click" , validatemail);

function validatemail() {
  const mail =document.querySelector("#mailInput").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(! emailPattern.test(mail) ) {
    document.querySelector("#worning").style.display = "block" ;

    document.querySelector("#makeRed").style.backgroundColor = "red";
  }else {
    document.querySelector("#worning").style.display = "none" ;

    document.querySelector("#makeRed").style.backgroundColor = "";

    document.querySelector("#mailInput").value = "";

  }
}