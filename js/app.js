'use strict'

var names = ['bag' , 'banana','bathroom','boots', 'breakfast' ,'bubblegum','chair' , 'cthulhu' ,'dog-duck' , 'dragon' , 'pen' , 'pet-sweep','scissors','shark','sweep','tauntaun' , 'unicorn' , 'water-can' , 'wine-glass','usb' ];

var totalClicks = 0;

var lefImage = document.getElementById('leftImage');
var midImage = document.getElementById('midImage');
var rightImage = document.getElementById('rightImage');

// create the constructor

function Product(name){
    this.productName = name ;
    this.imagePath = `img/${name}.jpg` ; 
    this.clicks = 0  ;
    this.views = 0 ; 
    Product.all.push(this);
}
Product.all =[];

// array of objects
for (var i=0 ; i<names.length ; i++){
    new Product(names[i]);
}
// console.log(Product.all);

// FUNC To Render Random IMAGES
var leftProduct , midProduct , rightProduct  ; 

function renderImages(){

leftProduct = Product.all[randomNumber(0 , Product.all.length-1)];
midProduct = Product.all[randomNumber(0 , Product.all.length-1)];
rightProduct = Product.all[randomNumber(0 , Product.all.length-1)];

while(leftProduct === midProduct || leftProduct === rightProduct ||rightProduct === midProduct ){
      leftProduct = Product.all[randomNumber(0 , Product.all.length-1)];
midProduct = Product.all[randomNumber(0 , Product.all.length-1)];
}


leftImage.src = leftProduct.imagePath ;
leftImage.alt = leftProduct.productName ;
leftImage.title = leftProduct.productName ;
leftProduct.views++ ; 

midImage.src = midProduct.imagePath ;
midImage.alt = midProduct.productName ;
midImage.title = midProduct.productName ;
midProduct.views++ ; 


rightImage.src = rightProduct.imagePath ;
rightImage.alt = rightProduct.productName ;
rightImage.title = rightProduct.productName ;
rightProduct.views++ ; 


}
renderImages();



// adding event listner
var imagesSection = document.getElementById('imagesSection')

imagesSection.addEventListener('click',handleClick);

function handleClick(event){

    if(totalClicks < 5) {
        
        if(event.target.id !== 'imagesSection') {
          totalClicks++ ;
          if(event.target.id === 'leftImage') {
            leftProduct.clicks++;
          }
          if(event.target.id === 'midImage') {
            midProduct.clicks++;
          }
          if(event.target.id === 'rightImage') {
            rightProduct.clicks++;
          }
          renderImages();
        } 
      }
       else {
        renderResults();
      }
}

function renderResults () {
    var ulE1 = document.getElementById('finalResult');
    for( var i =0; i<Product.all.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${Product.all[i].productName} has: ${Product.all[i].clicks} Votes and Views ${Product.all[i].views}`;
      ulE1.append(li);
    }
  }




//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
