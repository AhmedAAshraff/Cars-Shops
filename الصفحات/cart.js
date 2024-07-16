let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

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
    price: 4000000,
    color:"red",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "1-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "3-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "26-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "4-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "5-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "6-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "7-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "8-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "10-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "11-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "12-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "13-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "14-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "15-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "31-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "17-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "24-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "19-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "28-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "21-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "22-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "mercedes",
    image: "23-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
    {
    id: 2,
    name: "mercedes",
    image: "24-removebg-preview.png",
    price: 2344240,
    color:"blue",
    quantity: 1,
  },
  
];
let listCards = [];
function initapp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src="../carsphoto/${value.image}">
    <div class="title">${value.name}</div>
    <div class="color">color: ${value.color}</div>
    <div class="price">${value.price.toLocaleString()}</div>
   <button onclick="addToCard(${key})">Add to card <i class="fa-solid fa-cart-shopping"></i></button>`;
    list.appendChild(newDiv);
  });
}
initapp();



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
      <img src="../carsphoto/${value.image}">
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
let btnUp=document.getElementById('btn-up');

btnUp.onclick = function(){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}
onscroll = function(){
  if(scrollY>= 500){
    btnUp.style.display="block";
  }else{
    btnUp.style.display="none"
  }
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
