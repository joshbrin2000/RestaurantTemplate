export default function compile() {
    const contentId = document.getElementById('content');
    console.log(contentId);

    const headEl = document.createElement('div');
    headEl.className = "head-cont";
    
    const title = document.createElement('h1');
    title.textContent = "Jerry's Pizza";
    headEl.appendChild(title);
    contentId.appendChild(headEl);
}

//div class="head-cont">
    //<h1>Jerry's Pizza</h1>
//</div>
//<div class="main">
    //<div class="menu">
        //<p>aglihraui afabfae faewbwffefb ew bewkewabewfbfbewfb bbe abuffbfba bfbb abeb akfbbaw bfkfbifbwabew b bfewwejfbwef bfaw bwk</p>
    //</div>
//</div>
//<div class="foot-cont">
    //<p>Photo by <a href="https://unsplash.com/@pablopacheco_videografo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        //Pablo Pacheco</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
//</div>