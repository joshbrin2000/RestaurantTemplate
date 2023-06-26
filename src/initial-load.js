export default function compile() {
    const contentId = document.getElementById('content');

    const headEl = document.createElement('div');
    headEl.className = "head-cont";
    
    const title = document.createElement('h1');
    title.textContent = "Jerry's Pizza";

    headEl.appendChild(title);
    contentId.appendChild(headEl);

    const footEl = document.createElement('div');
    footEl.className = "foot-cont";

    const credit = document.createElement('p');
    credit.innerHTML = 'Photo by <a href="https:unsplash.com/@pablopacheco_videografo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Pacheco</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    
    footEl.appendChild(credit);
    contentId.appendChild(footEl);

    const mainEl = document.createElement('div');
    mainEl.className = 'main';
    const menuEl = document.createElement('div');
    menuEl.className = 'menu';
    const menuPraise = document.createElement('p');
    menuPraise.textContent = "aglihraui afabfae faewbwffefb ew bewkewabewfbfbewfb bbe abuffbfba bfbb abeb akfbbaw bfkfbifbwabew b bfewwejfbwef bfaw bwk";
    menuEl.appendChild(menuPraise);
    mainEl.appendChild(menuEl);
    contentId.appendChild(mainEl);
}