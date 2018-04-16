
const Cat = function(name, faveFood, image) {
  this.name = name;
  this.faveFood = faveFood;
  this.image = image;
}

const catFoods = ["Tuna", "Chicken", "Salmon", "Meat Sticks"];

const getRandomItemFromArray = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

const cats = [
  new Cat("George", getRandomItemFromArray(catFoods), 'images/7518847568_IMG_2149.JPG'),
  new Cat("George", getRandomItemFromArray(catFoods), 'images/IMG_0024.JPG'),
  new Cat("George", getRandomItemFromArray(catFoods), 'images/IMG_0046.JPG'),
  new Cat("Ruby", getRandomItemFromArray(catFoods), 'images/IMG_0176.JPG'),
  new Cat("George + Ruby", getRandomItemFromArray(catFoods), 'images/IMG_0380.JPG'),
  new Cat("George + Ruby", getRandomItemFromArray(catFoods), 'images/IMG_0729.JPG'),
  new Cat("George + Ruby", getRandomItemFromArray(catFoods), 'images/IMG_0745.JPG'),
  new Cat("George + Ruby", getRandomItemFromArray(catFoods), 'images/IMG_1383.JPG'),
  new Cat("George", getRandomItemFromArray(catFoods), 'images/IMG_2031.JPG'),
  new Cat("Ruby", getRandomItemFromArray(catFoods), 'images/IMG_2354.JPG'),
  new Cat("George", getRandomItemFromArray(catFoods), 'images/IMG_2409.JPG'),
  new Cat("George", getRandomItemFromArray(catFoods), 'images/IMG_5863.JPG'),
];

document.addEventListener('DOMContentLoaded', () => {

  const catImages = document.querySelectorAll('img');
  const catsList = document.querySelector('#cats');

  const createCat = function(cat, catsList) {
    const catItem = document.createElement('ul');

    const catName = document.createElement('li');
    catName.textContent = `Name: ${cat.name}`;

    const catFaveFood = document.createElement('li');
    catFaveFood.textContent = `Fave Food: ${cat.faveFood}`;

    const catImage = document.createElement('img');
    catImage.src = cat.image;

    catItem.appendChild(catName);
    catItem.appendChild(catFaveFood);
    catItem.appendChild(catImage);

    catsList.appendChild(catItem);
  };

  catsList.innerHTML ='';
  for(let i=0; i < cats.length; i++) {
    createCat(cats[i], catsList);
  };


});
