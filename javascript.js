var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box")
var button=document.getElementById("popup-button")

button.addEventListener("click",function()
{
overlay.style.display="block"
box.style.display="block"
}

)
// selecting cancel button
 var cancelbook=document.getElementById("cancelbook")
 cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
box.style.display="none"
 })
// selecting  contianer,add button,title,author,discription
 var contianer=document.querySelector(".container")
var addbutton=document.getElementById("addbook")
var title=document.getElementById("booktitle-input")
var auhtor=document.getElementById("bookauthor-input")
var discription=document.getElementById("book-discription")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","books-container")
    div.innerHTML=`<h1>${title.value}</h1>
    <h3>${auhtor.value}</h3>
    <p>${discription.value}</p>
    <button onclick="deletebook(event)">delete</button>`


contianer.append(div)
overlay.style.display="none"
box.style.display="none"
})
// adding functoin to delete
function deletebook(event){
    event.target.parentElement.remove()
}