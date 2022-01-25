// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;

  const calculatedSubtotalPrice = price * quantity;

  const subtotalPrice = product.querySelector(".subtotal span");
  subtotalPrice.innerText = calculatedSubtotalPrice;

  return calculatedSubtotalPrice;

}

function calculateAll() {
  
  // ITERATION 2
  const allProducts = Array.from(document.getElementsByClassName("product"));

  allProducts.forEach((element)=> updateSubtotal(element));

  // ITERATION 3
  let totalValue = 0;

  allProducts.forEach((element)=>{
    totalValue += updateSubtotal(element);
  })

  document.querySelector("h2#total-value span").textContent = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {

  const arrCreateProductInputs = Array.from(document.querySelectorAll(".create-product input"))
  const createProductName = arrCreateProductInputs[0].value;
  const createProductPrice = arrCreateProductInputs[1].value;

  const newProduct = document.querySelector(".product").cloneNode(true);

  newProduct.querySelector(".name span").innerText = createProductName;
  newProduct.querySelector(".price span").textContent = createProductPrice;
  newProduct.querySelector(".btn-remove").addEventListener("click", removeProduct);

  document.querySelector("tbody").appendChild(newProduct);

  const allCreateInputs = document.querySelectorAll(".create-product input");
  allCreateInputs.forEach((element)=> element.value = "");

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = Array.from(document.getElementsByClassName("btn-remove"));
  removeButtons.forEach((element)=>{
    element.addEventListener("click", removeProduct);
  });

  const createProductBtn = document.querySelector(".create-product .btn");
  createProductBtn.addEventListener("click", createProduct);

});
