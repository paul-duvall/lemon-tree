const breakfastItems = [
  {
    name: 'The Big Lemon Tree Breakfast',
    price: '8.30',
    description: 'Two rashers of back bacon, three quality butchers chipolatas, poached egg, ramekin of beans, sautéed mushrooms, potatoes, oven-roasted tomatoes and toast.',
    extra: 'Or 5 items for £5.50!'    
  },
  {
    name: 'Bacon or Sausage Ciabata',
    price: '5.20',
    description: 'Served on a toasted Ciabatta roll with a side of dressed rocket leaves.',
    extra: ''    
  },
  {
    name: '',
    price: '',
    description: '',
    extra: ''    
  },
];

const mainsItems = [
  {
    name: 'The LemonTree Dog',
    price: '8.30',
    description: 'Our 9 inch quality butchers sausage served in a homemade brioche bun, with a base of sweet mustard, chopped gherkins and peppers. Topped with caramelised red onion chutney and American mustard. Served with chips and homemade coleslaw.',
    extra: ''    
  },
  {
    name: 'The LemonTree Chilli Dog',
    price: '9.30',
    description: 'Everything you get with the LemonTree Dog, but topped with our delicious homemade Chilli. Served with chips and homemade coleslaw.',
    extra: ''    
  },
  {
    name: 'The LemonTree Toastie (V)',
    price: '6.65',
    description: '2 slices of toasted homemade sourdough, crammed with swiss cheese and caramelised onion chutney, served with a dressed salad and homemade coleslaw.',
    extra: ''    
  },
  {
    name: '',
    price: '',
    description: '',
    extra: ''    
  },
];

let breakfast = document.querySelector('.c-menu__menu-section-breakfast');
let mains = document.querySelector('.c-menu__menu-section-mains')

breakfastItems.forEach((menuItem) => {
  breakfast.innerHTML += `
  <div class="c-menu__item">
    <div class="c-menu__item-name">${menuItem.name}</div>
    <p class="c-menu__item-price">${menuItem.price}</p>
    <p class="c-menu__item-desc">${menuItem.description}</p>
  </div>
`;
if(menuItem.extra) {
  breakfast.innerHTML += `
  <div class="c-menu__item c-menu__item-extra">
    <p>${menuItem.extra}</p>
  </div>
  `;
}
});

mainsItems.forEach((menuItem) => {
  mains.innerHTML += `
  <div class="c-menu__item">
    <div class="c-menu__item-name">${menuItem.name}</div>
    <p class="c-menu__item-price">${menuItem.price}</p>
    <p class="c-menu__item-desc">${menuItem.description}</p>
  </div>
`;
if(menuItem.extra) {
  mains.innerHTML += `
  <div class="c-menu__item c-menu__item-extra">
    <p>${menuItem.extra}</p>
  </div>
  `;
}
});

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
