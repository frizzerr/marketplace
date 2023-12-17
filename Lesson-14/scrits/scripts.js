let productsGrid = document.getElementById('products-grid'); 
let productsArray = []; 
let xhr = new XMLHttpRequest(); 
let url = 'https://onlinemagazinchik-e5a7.restdb.io/rest'; 
 
xhr.open('GET',url+'/products'); 
 
xhr.setRequestHeader("content-type", "application/json"); 
xhr.setRequestHeader("x-apikey", "6575bf843514afbd0adcf179"); 
xhr.setRequestHeader("cache-control", "no-cache"); 
 
xhr.responseType = 'json'; 
xhr.onload = function(){ 
 let products = xhr.response; 
 productsGrid.innerHTML = null; 
 products.forEach(p=>{ 
  productsArray.push(p); 
  let pElem = document.createElement('div'); 
  pElem.classList.add('product'); 
  pElem.innerHTML=` 
              <h2 class="product-name">${p.name}</h2> 
              <img class="product-photo" src='${p.photo_url}'> 
              <p class='product-price'><b>Price: </b>${p.price}</p> 
              <p class='product-desc'><b>Description: </b>${p.description}</p> 
              <button onclick="addProductToCart('${p._id}')">Buy</button>`; 
         productsGrid.append(pElem); 
 }) 
} 
xhr.send();

// function addProductsToCart {
//     xhr.open('GET', `${url}/products/${_id}`)
//     xhr.responseType = 'json'
//     xhr.onload = function() {

//     }
// }

// let cartProd = document.getElementById('cart-products');
// let cart = []

// if(localStorage.getItem('cart')){
//     cart = JSON.parse(localStorage.getItem('cart'))
//     drawCartProducts()
// }

// function openCart() {
//     cartProd.classList.toggle('hide')
// }

// function addProductsToCart(id){
//     let product = productsArray.find(function(p){
//         return p._id == id
//     })

//     cart.push(product)
//     drawCartProducts()
//     localStorage.setItem("cart", JSON.stringify(cart))

// }

// function drawCartProducts(){
//     if(cart.length == 0) return cartProd.innerHTML = 'PUSTO'
//     cartProd.innerHTML = null
//     let sum = 0
//     cartProd.forEach(function(p){
//         cartProd.innerHTML += `
//         <p><img scr="${p.photo_url}">${p.name} | ${p.price}</p>
//         <hr>
//         `
//         sum += p.price


//     })
//     cartProd.innerHTML +=`
//     <p>Total price: ${sum}lei</p>
//     <button onclick="buyAll()">KUPITE PJ</button>
//     `
// }

// let orderBlock = document.getElementById('order-block')
// let modal = document.getElementById('myModal')
// let span = document.getElementsByClassName('close')[0]

// window.onclick = function() {
//     if(event.target == modal){
//         modal.style.display = 'none'
//     }
// }

// function buyAll() {
//     modal.style.display = 'block'
//     orderBlock.innerHTML = null
//     let sum = null
//     cart.forEach(function(p){
//         orderBlock.innerHTML += `
//         <div class="item" >
//         <img width="100px" src="${p.photo_url}">
//         <h2>${p.name} | ${p.price}</h2>
        
//         </div>
//         `
//         sum += p.price
//     })
//     document.getElementById('price').innerHTML = sum + 'lei'
    
// }

// document.getElementById('order-form').addEventListener('submit', function(e){ 
 
//     e.preventDefault(); 
//     let data= JSON.stringify({ 
//         "name": e.target['name'].value, 
//         "address": e.target['address'].value, 
//         "phone": e.target['phone'].value, 
//         "products": localStorage.getItem('cart') 
//         }) 
 
//         var xhr = new XMLHttpRequest(); 
 
//         xhr.open('POST', url+"/zakazi") 
 
//         // mesto dlya 3strochek iz restdb.io 
 
//         xhr.send(data); 
//         modal.style.display = "none"; 
//         cart = []; 
//         cartProd.innerHTML = 'DENGI SPISANI SKORO VAM POZVONIAT'; 
//         localStorage.setItem("cart",'[]') 
// })
