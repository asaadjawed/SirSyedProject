const changeNavColor = ()=>{
    if(scrollY>10)
    {
        document.querySelector("nav").backgroundColor = "red"
    }
}


document.addEventListener("scroll", changeNavColor);