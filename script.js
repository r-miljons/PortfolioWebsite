document.querySelector(".art-btn").addEventListener("mouseenter", function(){
    document.querySelector(".art-btn span").style.paddingLeft = "1rem";
    document.querySelector(".art-btn span").style.paddingRight = "0";
});

document.querySelector(".art-btn").addEventListener("mouseleave", function(){
    document.querySelector(".art-btn span").style.paddingLeft = "";
    document.querySelector(".art-btn span").style.paddingRight = "";
});