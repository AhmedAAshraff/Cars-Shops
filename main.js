let btnUp = document.getElementById("btn-up");
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");



btnUp.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
onscroll = function () {
  if (scrollY >= 500) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "BMW",
    image: "33.png",
    price: 40000,
    color: "yellow",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "1-removebg-preview.png",
    price: 2340,
    color: "white",
    quantity: 1,
  },
  {
    id: 3,
    name: "mercedes",
    image: "3-removebg-preview.png",
    price: 24240,
    color: "white",
    quantity: 1,
  },
  {
    id: 4,
    name: "farare",
    image: "26-removebg-preview.png",
    price: 4240,
    color: "black",
    quantity: 1,
  },
  {
    id: 5,
    name: "mercedes",
    image: "4-removebg-preview.png",
    price: 23240,
    color: "white",
    quantity: 1,
  },
  {
    id: 6,
    name: "mercedes",
    image: "5-removebg-preview.png",
    price: 2344,
    color: "black",
    quantity: 1,
  },
  {
    id: 7,
    name: "bmw",
    image: "6-removebg-preview.png",
    price: 23440,
    color: "white",
    quantity: 1,
  },
  {
    id: 8,
    name: "bmw",
    image: "7-removebg-preview.png",
    price: 44240,
    color: "black",
    quantity: 1,
  },
  {
    id: 9,
    name: "bmw",
    image: "8-removebg-preview.png",
    price: 23440,
    color: "black",
    quantity: 1,
  },
  {
    id: 10,
    name: "bmw",
    image: "10-removebg-preview.png",
    price: 23442,
    color: "selver",
    quantity: 1,
  },
  {
    id: 11,
    name: "bmw",
    image: "11-removebg-preview.png",
    price: 23440,
    color: "gray",
    quantity: 1,
  },
  {
    id: 12,
    name: "mercedes",
    image: "12-removebg-preview.png",
    price: 23440,
    color: "black",
    quantity: 1,
  },
  {
    id: 13,
    name: "mercedes",
    image: "13-removebg-preview.png",
    price: 23440,
    color: "black",
    quantity: 1,
  },
  {
    id: 14,
    name: "mercedes",
    image: "14-removebg-preview.png",
    price: 23442,
    color: "white",
    quantity: 1,
  },
  {
    id: 15,
    name: "mg",
    image: "15-removebg-preview.png",
    price: 44240,
    color: "red",
    quantity: 1,
  },
  {
    id: 16,
    name: "4by4",
    image: "31-removebg-preview.png",
    price: 23240,
    color: "white",
    quantity: 1,
  },
  {
    id: 17,
    name: "mg",
    image: "17-removebg-preview.png",
    price: 24240,
    color: "red",
    quantity: 1,
  },
  {
    id: 18,
    name: "farare",
    image: "24-removebg-preview.png",
    price: 234424,
    color: "black",
    quantity: 1,
  },
  {
    id: 19,
    name: "farare",
    image: "19-removebg-preview.png",
    price: 2340,
    color: "blacl",
    quantity: 1,
  },
  {
    id: 20,
    name: "farare",
    image: "28-removebg-preview.png",
    price: "yellow",
    color: "blue",
    quantity: 1,
  },
  {
    id: 21,
    name: "mg",
    image: "21-removebg-preview.png",
    price: 2340,
    color: "blue",
    quantity: 1,
  },
  {
    id: 22,
    name: "bmw",
    image: "22-removebg-preview.png",
    price: 24240,
    color: "blue",
    quantity: 1,
  },
  {
    id: 23,
    name: "farare",
    image: "23-removebg-preview.png",
    price: 23440,
    color: "blue",
    quantity: 1,
  },
  {
    id: 24,
    name: "farare",
    image: "24-removebg-preview.png",
    price: 23440,
    color: "black",
    quantity: 1,
  },
  {
    id: 25,
    name: "mercedes",
    image: "44.png",
    price: 2340,
    color: "black",
    quantity: 1,
  },
  {
    id: 26,
    name: "Cheverly",
    image: "55.png",
    price: 2340,
    color: "red",
    quantity: 1,
  },
  {
    id: 27,
    name: "فراري",
    image: "66.png",
    price: 234420,
    color: "black",
    quantity: 1,
  },
];
let listCards = [];
function initapp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src="./carsphoto/${value.image}">
    <div class="title"> ${value.name}</div>
    <div class="color">color: ${value.color}</div>
    <div class="price"> ${value.price.toLocaleString()}</div>
    <div class="quantity">${value.quantity}</div>
   <button onclick="addToCard(${key})">Add to card <i class="fa-solid fa-cart-shopping"></i></button>`;
    list.appendChild(newDiv);
  });
}
initapp();

let total =document.querySelector(".total");
let  quantity = document.querySelector(".quantity");

function addToCard(key){
  if(listCards[key]==null){
    listCards[key]=products[key];
    listCards[key].quantity=1;
  }
  reloadCart();
  
}

function  reloadCart(){
  listCard.innerHTML='';
  let count = 0;
  let totalprice = 0;
  listCards.forEach((value, key)=>{
    totalprice = totalprice + value.price;
    count = count + value.quantity
    if( value!= null){
      let newDiv=document.createElement('div');
      newDiv.innerHTML =`
      <img src="./carsphoto/${value.image}">
      <div>type: ${value.name}</div>
      <div>color: ${value.color}</div>
      <div>price: ${value.price.toLocaleString()}</div>
      <div>
         <button  onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
         <div class="count">${value.quantity}</div>
         <button  onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
         </div>` ;
         listCard.appendChild(newDiv);
    }
  })
  total.innerText = totalprice.toLocaleString();
  quantity.innerText = count;
}
 
function changeQuantity(key, quantity) {
  console.log(key, quantity);
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}
var payment = document.querySelector(".payment");
var close = document.querySelector(".close");
var productButton = document.querySelector(".productButton");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});

var img = document.getElementById("changeimg");
var res;
var num = 1;
function next() {
  if (num !== 8) {
    num++;
    img.setAttribute("src", "./carsphoto/" + num + ".jpg");
  }
}
function back() {
  if (num !== 1) {
    num--;
    img.setAttribute("src", "./carsphoto/" + num + ".jpg");
  }
}
