const breakfastItems = [
  {
    name: 'The Big Lemon Tree Breakfast',
    price: '8.30',
    description: 'Two rashers of back bacon, three quality butchers chipolatas, poached egg, ramekin of beans, sautéed mushrooms, potatoes, oven-roasted tomatoes and toast.<br><strong>Or 5 items for £5.50!</strong>'   
  },
  {
    name: 'Bacon or Sausage Ciabata',
    price: '5.20',
    description: 'Served on a toasted Ciabatta roll with a side of dressed rocket leaves.'
  },
  {
    name: 'Mushrooms On Toast (V)',
    price: '5.50',
    description: 'Sauteed button mushrooms on toast, drizzled with olive oil and garnished with dressed rocket leaves.'
  },
  {
    name: 'Eggs Anyhow (V)',
    price: '5.70',
    description: '2 free range eggs fried, poached or scrambled and served on toast. Top with two extra bits of bacon or sausages for <strong>£2.00</strong>'
  },
  {
    name: 'The Vegetarian LemonTree (V)',
    price: '8.20',
    description: 'Vegetarian sausage, poached egg, 2 hash browns, sauteed mushrooms, tomato, ramekin of beans and toast.'
  },
  {
    name: 'Eggs Benedict OR Florentine',
    price: '7.00',
    description: 'English muffin topped with our home cooked gammon, poached eggs and hollindaise sauce, with dressed leaves.<br>Florentine - swap the gammon for wilted spinach.'
  },
  {
    name: 'Bacon OR Sausage Sandwich',
    price: '4.50',
    description: '<strong>Add an egg for 90p!</strong>'
  },
  {
    name: 'The Healthy LemonTree (GF)',
    price: '7.30',
    description: '2 rashers of sliced bacon on a bed of dressed baby spinach, rocket, goats cheese, topped with a poached egg.'
  },
  {
    name: 'Cowboy Beans',
    price: '7.00',
    description: 'Homemade beans with bacon and chorizo served on a slice of homemade sourdough toast and a side of dressed rocket leaves.'
  },
  {
    name: 'VeggieBoy Beans',
    price: '6.40',
    description: 'Cowboy beans but without the meaty bits.'
  }
];

const mainsItems = [
  {
    name: 'The LemonTree Dog',
    price: '8.30',
    description: 'Our 9 inch quality butchers sausage served in a homemade brioche bun, with a base of sweet mustard, chopped gherkins and peppers. Topped with caramelised red onion chutney and American mustard. Served with chips and homemade coleslaw.'
  },
  {
    name: 'The LemonTree Chilli Dog',
    price: '9.30',
    description: 'Everything you get with the LemonTree Dog, but topped with our delicious homemade Chilli. Served with chips and homemade coleslaw.'   
  },
  {
    name: 'The LemonTree Toastie (V)',
    price: '6.65',
    description: '2 slices of toasted homemade sourdough, crammed with swiss cheese and caramelised onion chutney, served with a dressed salad and homemade coleslaw.'
  },
  {
    name: 'The LemonTree Mensieur',
    price: '7.75',
    description: '2 slices of toasted homemade sourdough with home baked gammon, swiss cheese and wholegrain mustard mayonnaise, served with a dressed salad and homemade coleslaw.'
  },
  {
    name: 'Classic burger',
    price: '9.95',
    description: 'A 180g homemade beef patty with a base of sweet mustard, chopped gherkins and peppers, topped with mature Cheddar cheese, baby gem lettuce, red onion and tomato. Served in a homemade brioche bun with chips and coleslaw.<br><strong>Add Bacon for £1.00!</strong>'
  },
  {
    name: 'Gammon, Egg and Chips (GF)',
    price: '8.50',
    description: 'Home baked gammon, 2 poached free-range eggs and chips.'
  },
  {
    name: 'Jacket Potato (GF)',
    price: '6.80',
    description: 'Choose from: Tuna, chicken mayonnaise, homemade chilli, homemade or heinz beans, cheese (cheddar, goats cheese, swiss or brie), prawns in marie rose sauce. Served with dressed salad and homemade coleslaw. (Please note we do not put butter on our potatoes unless requested.)<br><strong>Add an extra topping for £1.00</strong>'
  },
  {
    name: 'Chicken Fajita',
    price: '6.85',
    description: 'Chicken cooked in a medium spiced fajita mix with peppers, onion and garlic, served in a 12" wrap with a side salad and homemade coleslaw, topped with sour cream.'
  },
  {
    name: 'Chilli Nachos',
    price: '6.85',
    description: 'Nacho tortilla chips covered with our homemade chilli and topped with cheese and sour cream.' 
  }
];

const nibblesItems = [
  {
    name: 'Piece of Cake',
    price: '2.60'
  },
  {
    name: 'Scones',
    price: '2.20'
  },
  {
    name: 'Sausage Rolls',
    price: '2.40'
  },
  {
    name: 'Hot Chilli Sausage Rolls',
    price: '2.40'
  },
  {
    name: 'Round of toast',
    price: '1.25'
  },
  {
    name: 'Large Toasted Teacake',
    price: '2.20'
  },
  {
    name: 'Bowl of chips',
    price: '2.40'
  },
  {
    name: 'Bowl of Cheesy Chips',
    price: '2.80'
  },
  {
    name: 'Warm Garlic Ciabatta',
    price: '2.80'
  }
];

const sandwichItems = [
  {
    name: 'Gammon OR Cheese',
    sPrice: '4.70',
    wPrice: '4.95',
    cPrice: '5.20'
  },
  {
    name: 'Bacon & Brie',
    sPrice: '5.40',
    wPrice: '5.80',
    cPrice: '6.10'
  },
  {
    name: 'Brie & Cranberry (V)',
    sPrice: '5.20',
    wPrice: '5.50',
    cPrice: '6.00'
  },
  {
    name: 'Goats Cheese, Redcurrant Jelly & Baby Spinach',
    sPrice: '5.50',
    wPrice: '5.95',
    cPrice: '6.30'
  },
  {
    name: 'Bacon, Chicken & Chorizo',
    sPrice: '5.75',
    wPrice: '6.00',
    cPrice: '6.50'
  },
  {
    name: 'Prawns in Marie Rose Sause',
    sPrice: '6.20',
    wPrice: '6.50',
    cPrice: '6.80'
  },
  {
    name: 'Tuna Mayo & Cucumber',
    sPrice: '5.20',
    wPrice: '5.70',
    cPrice: '6.20'
  },
  {
    name: 'Warmed Grilled Chicken Mayo & Baby Gem Lettuce',
    sPrice: '5.50',
    wPrice: '6.00',
    cPrice: '6.30'
  },
  {
    name: 'BLT',
    sPrice: '5.50',
    wPrice: '6.00',
    cPrice: '6.30'
  },
  {
    name: 'Bacon, Chicken & Avocado',
    sPrice: '5.95',
    wPrice: '6.25',
    cPrice: '6.50'
  }
];

const extrasItems = [
  {
    name: 'Homemade Beans',
    price: '1.60'
  },
  {
    name: 'Heinz Beans',
    price: '1.40'
  },
  {
    name: 'Coleslaw',
    price: '1.40'
  },
  {
    name: 'Avocado',
    price: '1.80'
  },
  {
    name: 'Bacon',
    price: '2.00'
  },
  {
    name: 'Sausages',
    price: '2.00'
  },
  {
    name: 'Extra Egg',
    price: '90p'
  },
  {
    name: 'Black pudding',
    price: '1.00'
  },
];

// Query selectors
const breakfast = document.querySelector('.c-menu__menu-section-breakfast');
const mains = document.querySelector('.c-menu__menu-section-mains');
const sandwiches = document.querySelector('.c-menu__menu-section-sandwiches');
const nibbles = document.querySelector('.c-menu__menu-section-nibbles');
const extras = document.querySelectorAll('.c-menu__extras');

function addExtras(){
  extras.forEach((section) => {
    extrasItems.forEach((menuItem) => {
      section.innerHTML += `
        <div class="c-menu__item">  
          <div class="c-menu__item-name">${menuItem.name}</div>
          <p class="c-menu__item-price">${menuItem.price}</p>
        </div>
      `;
    });  
  });
}


// Generate breakfasts
function generateBreakfasts() {
  breakfastItems.forEach((menuItem) => {
    breakfast.innerHTML += `
      <div class="c-menu__item">
        <div class="c-menu__item-name">${menuItem.name}</div>
        <p class="c-menu__item-price">${menuItem.price}</p>
        <p>${menuItem.description}</p>
      </div>
    `;
  });
  addExtras();
}


// Generate main meals
function generateMains() {
  mainsItems.forEach((menuItem) => {
    mains.innerHTML += `
      <div class="c-menu__item">
        <div class="c-menu__item-name">${menuItem.name}</div>
        <p class="c-menu__item-price">${menuItem.price}</p>
        <p>${menuItem.description}</p>
      </div>
    `;
  });
}


// Generate sandwiches
function generateSandwiches() {
  sandwichItems.forEach((menuItem) => {
    sandwiches.innerHTML += `
      <div class="c-menu__item">
        <div class="c-menu__item-name c-menu__sandwiches-name">
          ${menuItem.name}
        </div>
        <div class="c-menu__sandwiches-prices">
          <div>${menuItem.sPrice}</div>
          <div>${menuItem.wPrice}</div>
          <div>${menuItem.cPrice}</div>
        </div>
      </div>
    `;
  });
}


// Generate nibbles
function generateNibbles() {
  nibblesItems.forEach((menuItem) => {
    nibbles.innerHTML += `
      <div class="c-menu__item">
        <div class="c-menu__item-name">
          ${menuItem.name}
        </div>
        <div>${menuItem.price}</div>
      </div>
    `;
  });
}


// **************************** Menu tabs ****************************

// On the menu page, displays the lunch menu as a default
document.getElementById('Breakfast').style.display = "block";

function openMenu(evt, menuName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

function generateMenu() {
  generateBreakfasts();
  generateMains();
  generateSandwiches();
  generateNibbles();
}

generateMenu();