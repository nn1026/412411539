function on(index){
    const d=document.querySelector(".show-classdemo");
    console.log(d);
    switch(index){
        case 1:
            d.innerHTML = '<iframe src="./期中作業/card.html" frameborder="1"></iframe>'
            break;
        case 2:
            d.innerHTML = '<iframe src="./期中作業/blog.html" frameborder="1"></iframe>'
            break;
    }
}