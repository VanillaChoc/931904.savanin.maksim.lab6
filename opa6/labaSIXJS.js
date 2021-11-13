left.onclick= function(){
    backr.style.width = "5vw";
    backl.style.width = "45vw";
    cat.style.width = "32vw";
    cat.style.margin = "11px";
    dog.style.display = "none";
    cat.style.display = "block";
}
mid.onclick= function(){
    cat.style.display = "block";
    dog.style.display = "block";
    backl.style.width = "25vw";
    backr.style.width = "25vw";
    dog.style.width = "23vw";
    dog.style.margin = "10 auto";
    cat.style.width = "23vw";
    cat.style.margin = "10 auto";
    
}
right.onclick= function(){
    backl.style.width = "5vw";
    backr.style.width = "45vw";
    dog.style.width = "32vw";
    dog.style.margin = "11px";
    cat.style.display = "none";
    dog.style.display = "block";
}

