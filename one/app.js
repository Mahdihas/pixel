

let setData;
let setData1;

const showCard = () => {
    url = 'data.json'
    fetch(url)
    .then(res=>res.json())
      .then(data => {
        setData = data;
        setData1 = data;
        displayCard(data);
      })
}

const displayCard = (data) => {
    
    const cardContainer = document.getElementById('homepage-content');


     
    data.forEach(datas => {
        
        const {id,name,img,price}=datas;
        
        const card = document.createElement('div');
        card.innerHTML = `
           
        <div class="card bg-base-100 shadow-2xl p-4">
              <figure class="">
                <img
                  src="${img}"
                  alt="Shoes"
                  class="rounded-lg w-[300px] h-[300px]"
                />
              </figure>

              <div class="mt-[20px]">
                <div class="flex justify-between">
                  <h2 class="card-title">${name}</h2>
                  <div class="flex text-lg">
                    <span class="mr-4"
                      ><i class="fa-solid fa-heart text-slate-500"></i
                    ></span>
                    <span
                      ><i class="fa-solid fa-square-minus text-red-700"></i
                    ></span>
                  </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3 class="card-title">Price: ${price}</h3>
                <div class="mt-2 flex justify-between">
                <label for="my-modal" class="btn modal-button btn-outline">
                <i class="fa-solid fa-circle-info mr-2"></i> See Details
                </label>

              
                

                  <button
                  onclick="handleBuyNow('${id}',this)"
                    class="btn btn-outline btn-secondary w-[45%] mx-auto block"
                  >
                    <i class="fa-solid fa-bag-shopping mr-2"></i>Buy Now
                  </button>
                </div>
              </div>
            </div> 
        `
        cardContainer.appendChild(card)

    })

    
}
showCard()
let count = 0;
let newPrice = 0;
let tax = 0;
const handleBuyNow = (id,element) => {
  
  count++;
  const badge = document.getElementById('badge').innerText = count;
  const productCount = document.getElementById('product-count').innerText = count;
  const product = setData.find((item) => item.id === id);
  const { name, img, price } = product;
  newPrice = newPrice+price;
  tax = newPrice * 0.1;
  const cardContainers = document.getElementById('cart-items-container');
  
  const div = document.createElement('div');
  div.classList.add('flex','justify-between','items-center','id')

  div.innerHTML = `

  
  <img src="${img}" class="w-[50px] inline pt-4" alt="">
  <p class=" px-4 inline ">${name}</p>
  <p class="inline"><i onclick="remove('${id}')" class=" text-end fa-solid fa-trash-can"></i></p>
  `;
  cardContainers.appendChild(div);
  document.getElementById("price").innerText = newPrice.toFixed(2);
  document.getElementById("tax-count").innerText = tax.toFixed(2);
  document.getElementById("total-price").innerText = (newPrice + tax).toFixed(2);


  // button disabled
  element.disabled = true;
 
  element.style.backgroundColor = 'gray'

//   console.log(cardArray.length);

}
const handleClear =() => {
  
  document.getElementById("cart-items-container").innerHTML = "";
  document.getElementById("price").innerText = '';
  document.getElementById("tax-count").innerText = '';
  document.getElementById("total-price").innerText = '';
  const badge = document.getElementById('badge').innerText = '0';
  const productCount = document.getElementById('product-count').innerText = '0';



}

const remove = (id) => {
  

  const product = setData1.filter((item) => item.id !== id);
  document.getElementById("cart-items-container").style.display='none'
  



  console.log(product);



}