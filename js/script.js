function element(elemento){ return document.querySelector(elemento) }

element("#submit1").addEventListener("click", () => {
    const local = element("#locais1");
    
    if(local.style.display == "none" || local.style.display == "")
    {
        local.style.display = "flex";
    }else
    {
        local.style.display = "none";
    }
});

element("#submit2").addEventListener("click", () => {
    const local = element("#locais2");
    
    if(local.style.display == "none" || local.style.display == "")
    {
        local.style.display = "flex";
    }else
    {
        local.style.display = "none";
    }
});