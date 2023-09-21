var arr=[
    {dp:"https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1608739360695-0152a27174df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1528046530702-338a48cb3e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1630568321786-82abecde2366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZ2lybHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1605614339747-6ad39bd5e7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwZ2lybHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1605614307370-f7a1e58ae751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}

]

var clutter=""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
var storiyan=document.querySelector("#storiyan")
storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#card h1").style.display="none"
    document.querySelector("#card i").style.display="none"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
        document.querySelector("#card h1").style.display="block"
        document.querySelector("#card i").style.display="block"
    },3000)
})

