export default function menuSection(el) {
    const menuHead = document.createElement('h2');
    menuHead.textContent = 'Menu';

    const menuItemGrid = document.createElement('div');
    menuItemGrid.className = 'menu-item-cont';
    for (let i=1; i<9; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'menu-item sect' + i;
        descriptDiv(newDiv, i);
        pictureLoad(newDiv, i);
        menuItemGrid.appendChild(newDiv);
    }

    el.appendChild(menuHead);
    el.appendChild(menuItemGrid);
}

function descriptDiv(el, i) {
    let descDiv = document.createElement('div');
    switch (i) {
        case 1:
            descDiv.innerHTML = '<p>Pepperoni Pizza - hand-made with care</p><br /><p>Price: $15.99</p>';
            break;
        case 2:
            descDiv.innerHTML = '<p>Cheese Pizza - using 2-month-old marble cheese found at the dumpster at Walmart</p><br /><p>Price: $11.99</p>';
            break;
        case 3:
            descDiv.innerHTML = '<p>Cheeseburger - popular with our kid customers</p><br /><p>Price: $9.99</p>';
            break;
        case 4:
            descDiv.innerHTML = '<p>Chicken Tenders <sub>not to be confused with our previous menu item, Deep-Fried Chicken Beaks, of which we are not allowed to sell anymore due to so-called "Health Concerns"</sup></p><br /><p>Price: $8.49</p>';
            break;
        case 5:
            descDiv.innerHTML = '<p>Mozzarella Sticks</p><br /><p>Price: $4.99</p>';
            break;
        case 6:
            descDiv.innerHTML = '<p>Caesar Salad</p><br /><p>Price: $7.99</p>';
            break;
        default:
            break;
    }
    el.appendChild(descDiv);
}

function pictureLoad(el, i) {
    let image = new Image();
    switch (i) {
        case 1:
            image.src = '../src/images/pepperoni-pizza.jpg';
            break;
        case 2:
            image.src = '../src/images/cheese-pizza.jpg';
            break;
        case 3:
            image.src = '../src/images/cheeseburger.jpg';
            break;
        case 4:
            image.src = '../src/images/chicken-tenders.jpg';
            break;
        case 5:
            image.src = '../src/images/mozzarella-sticks.jpg';
            break;
        case 6:
            image.src = '../src/images/ceaser-salad.jpg';
            break;
        default:
            break;
    }
    el.appendChild(image);
}