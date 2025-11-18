let main = document.querySelector("main");
let arr = ["mahir", "ali", "sheriyan", "ahmad", "osama"];

main.addEventListener("mousemove",()=>{
        let h1 = document.createElement("h1");


        var x = Math.random()*100;
        var y = Math.random()*100;
        var rot = Math.random()*360;
        var scl = Math.random()*3;
        var a = Math.floor(Math.random()*arr.length)

        h1.innerHTML = arr[a]

        h1.style.position = 'absolute'

        h1.style.left = x+'%'
        h1.style.top = y+'%'
        h1.style.rotate = rot+'deg'
        h1.style.scale = scl
        
        main.appendChild(h1);
})

