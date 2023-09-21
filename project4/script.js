var elem=document.querySelectorAll(".elem")
// var elemImg=document.querySelector("#elem1 img")

// elem.addEventListener("mousemove",(dets)=>{
//     elemImg.style.left=dets.x+"px"
//     elemImg.style.top=dets.y+"px"
// })
// elem.addEventListener("mouseenter",(dets)=>{
//     elemImg.style.opacity=1
// })
// elem.addEventListener("mouseleave",(dets)=>{
//     elemImg.style.opacity=0
// })

elem.forEach(function(val){
    // console.log(val.childNodes[3])
    
    val.addEventListener("mouseenter",()=>{
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity=0
    })
val.addEventListener("mousemove",(dets)=>{
    val.childNodes[3].style.left=dets.x+"px"
    // val.childNodes[3].style.top=dets.y-(1*(dets.y))+"px"
})

})