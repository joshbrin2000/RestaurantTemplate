import Caesar from './images/ceaser-salad.jpg';
import CheeseP from './images/cheese-pizza.jpg';
import CheeseB from './images/cheeseburger.jpg';
import Chicken from './images/chicken-tenders.jpg';
import Mozza from './images/mozzarella-sticks.jpg';
import Pepperoni from './images/pepperoni-pizza.jpg';

function descriptDiv(el, i) {
    const descDiv = document.createElement('div');
    switch (i) {
        case 1:
            descDiv.innerHTML = '<p>Pepperoni Pizza - hand-made with care</p><p>Price: $15.99</p>';
            break;
        case 2:
            descDiv.innerHTML = '<p>Cheese Pizza - using 2-month-old marble cheese found at the dumpster at Walmart</p><p>Price: $11.99</p>';
            break;
        case 3:
            descDiv.innerHTML = '<p>Cheeseburger - popular with our kid customers</p><p>Price: $9.99</p>';
            break;
        case 4:
            descDiv.innerHTML = '<p>Chicken Tenders <sub>not to be confused with our previous menu item, Deep-Fried Chicken Beaks, of which we are not allowed to sell anymore due to so-called "Health Concerns"</sup></p><p>Price: $8.49</p>';
            break;
        case 5:
            descDiv.innerHTML = '<p>Mozzarella Sticks</p><p>Price: $4.99</p>';
            break;
        case 6:
            descDiv.innerHTML = '<p>Caesar Salad</p><p>Price: $7.99</p>';
            break;
        case 7:
            descDiv.innerHTML = '<h3>Sides</h3><br /><p>Fries: $2.99</p><p>Garden Salad: $3.49</p><p>Onion Rings (old): $2.99</p><p>Onion Rings (fresh): $4.49</p>';
            break;
        case 8:
            descDiv.innerHTML = '<h3>Drinks</h3><br /><p>Water: $0.99</p><p>Diet Soda: $2.99</p><p>Soda: $3.49</p><p>Milkshake: $4.99</p>'
            break;
        default:
            break;
    }
    el.appendChild(descDiv);
}

function pictureLoad(el, i) {
    const image = new Image();
    switch (i) {
        case 1:
            image.src = Pepperoni;
            break;
        case 2:
            image.src = CheeseP;
            break;
        case 3:
            image.src = CheeseB;
            break;
        case 4:
            image.src = Chicken;
            break;
        case 5:
            image.src = Mozza;
            break;
        case 6:
            image.src = Caesar;
            break;
        default:
            break;
    }
    el.appendChild(image);
}

export default function menuSection(el) {
    const menuHead = document.createElement('h2');
    menuHead.textContent = 'Menu';

    const menuItemGrid = document.createElement('div');
    menuItemGrid.className = 'menu-item-cont';
    for (let i=1; i<9; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.className = `menu-item sect${  i}`;
        descriptDiv(newDiv, i);
        if (i < 7){
            pictureLoad(newDiv, i);
        }
        menuItemGrid.appendChild(newDiv);
    }

    el.appendChild(menuHead);
    el.appendChild(menuItemGrid);
}
