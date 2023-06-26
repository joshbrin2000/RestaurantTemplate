function headerLoad() {
    const contentId = document.getElementById('content');

    const headEl = document.createElement('div');
    headEl.className = "head-cont";
    
    const title = document.createElement('h1');
    title.textContent = "Jerry's Pizza";

    headEl.appendChild(title);
    contentId.appendChild(headEl);
}

function footerLoad() {
    const contentId = document.getElementById('content');

    const footEl = document.createElement('div');
    footEl.className = "foot-cont";

    const credit = document.createElement('p');
    credit.innerHTML = '<p>Photo by <a href="https:unsplash.com/@pablopacheco_videografo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Pacheco</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>';
    
    footEl.appendChild(credit);
    contentId.appendChild(footEl);
}

function menuSection(el) {
    const menuHead = document.createElement('h2');
    menuHead.textContent = 'Menu';

    const menuItemGrid = document.createElement('div');
    menuItemGrid.className = 'menu-item-cont';
    for (let i=1; i<11; i++){
        let newDiv = document.createElement('div');
        newDiv.textContent = i;
        menuItemGrid.appendChild(newDiv);
    }

    el.appendChild(menuHead);
    el.appendChild(menuItemGrid);
}

function mainLoad() {
    const contentId = document.getElementById('content');

    const mainEl = document.createElement('div');
    mainEl.className = 'main';
    const menuEl = document.createElement('div');
    menuEl.className = 'menu';
    const hRaveRev = document.createElement('h2');
    hRaveRev.textContent = "Customers are raving about Jerry's Pizza!";
    const menuReviewEl = document.createElement('div');
    menuReviewEl.className = "review-cont";
    menuReviewEl.innerHTML = "<p class='review-note'>I ate here and it was kinda alright</p>";
    menuReviewEl.innerHTML += "<p class='review-author'>-Tim Shim</p>"
    menuReviewEl.innerHTML += "<p class='review-note'>It's cheap...and that's about it</p>";
    menuReviewEl.innerHTML += "<p class='review-author'>-Doreen Meen</p>"
    menuReviewEl.innerHTML += "<p class='review-note'>At least I didn't get food poisoning</p>";
    menuReviewEl.innerHTML += "<p class='review-author'>-Tom Dom</p>"
    menuEl.appendChild(hRaveRev);
    menuEl.appendChild(menuReviewEl);
    mainEl.appendChild(menuEl);
    contentId.appendChild(mainEl);

    menuSection(menuEl);
}

export default function compile() {
    headerLoad();
    footerLoad();
    mainLoad(); 
}