function element(element){ return document.querySelector(element); }

element("[name=chegada]").addEventListener("onchange", ()=>{
    element("[name=chegada]").form.submit();
});