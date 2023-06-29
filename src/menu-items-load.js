export default function menuSection(el) {
    const menuHead = document.createElement('h2');
    menuHead.textContent = 'Menu';

    const menuItemGrid = document.createElement('div');
    menuItemGrid.className = 'menu-item-cont';
    for (let i=1; i<11; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'menu-item ' + i;
        pictureLoad(newDiv, i);
        menuItemGrid.appendChild(newDiv);
    }

    el.appendChild(menuHead);
    el.appendChild(menuItemGrid);
}

function pictureLoad(el, i) {
    let image = new Image();
    switch (i) {
        case 1:
            image.src = '../src/pepperoni-pizza.jpg';
            break;
        case 2:
            image.src = '../src/cheese-pizza.jpg';
            break;
        case 3:
            image.src = '../src/cheeseburger.jpg';
            break;
        case 4:
            image.src = '../src/chicken-tenders.jpg'
            break;
        default:
            break;
    }
    el.appendChild(image);
}