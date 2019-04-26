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

let breakfast = document.querySelector('.c-menu__menu-section-breakfast');

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
