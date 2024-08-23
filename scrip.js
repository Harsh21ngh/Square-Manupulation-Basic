let x1=document.getElementById("b1");
x1.addEventListener("mouseenter",function(){ 
    let r=Math.floor(Math.random()*100);
    x1.innerHTML=`<h1>${r}</h1>`;
})

x1.addEventListener("mouseleave",function(){ 
    x1.innerHTML="<h1>1</h1>";
})


let x2=document.getElementById("b2");
let clr="red";
x2.addEventListener("mouseenter",function(){ 
    if(clr=="red"){
        x2.style.backgroundColor="red";
        clr="green";
    }

    else if(clr=="green"){
        x2.style.backgroundColor="green";
        clr="blue";
    }

    else{
        x2.style.backgroundColor="blue";
        clr="red";
    }
    
})

x2.addEventListener("mouseleave",function(){ 
    x2.style.backgroundColor="";
})



let x3=document.getElementById("b3");
x3.addEventListener("mouseenter",function(){ 
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    x3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    
})

x3.addEventListener("mouseleave",function(){ 
    x3.style.backgroundColor="";
})

let x4=document.getElementById("b4");
x4.addEventListener("click",function(){ 
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    x1.style.backgroundColor=`rgb(${r1},0,255)`;
    x2.style.backgroundColor=`rgb(255,${r2},0)`;
    x3.style.backgroundColor=`rgb(0,255,${r3})`;
    
})

x4.addEventListener("mouseleave",function(){ 
    x1.style.backgroundColor="";
    x2.style.backgroundColor="";
    x3.style.backgroundColor="";
})
