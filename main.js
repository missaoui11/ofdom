var count = document.getElementById("count").textContent
var price =document.getElementById("price").textContent
var pricetotal=0
function add(){
    count++
    document.getElementById("count").textContent=count
    prct()
    local()

}
function sust(){
   if(count>1) {count--
    document.getElementById("count").textContent=count}
    else{count=1
        document.getElementById("count").textContent=count}
        prct()
        local()
}
function prct(){
    pricetotal=price*count
    document.getElementById("price").textContent=pricetotal
}
function heart(){
    let heart=document.getElementById("heart")
    if(heart.style.color==="black"){
        heart.style.color="red"
    }
    else{
        heart.style.color="black"
    }
}
var div=document.getElementById("div")
 div.style.backgroundColor="#ff0"
 div.style.marginLeft='10px'
 div.style.marginTop='10px'
 var img=document.getElementById("img")
 img.style.padding="10px"

 function local(){
    localStorage.clear();
    localStorage.setItem(JSON.stringify(count),JSON.stringify(pricetotal))
 }

