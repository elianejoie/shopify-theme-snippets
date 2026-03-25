document.querySelector('#addon').addEventListener('change', function() {
  let basePrice = 500;
  let addonPrice = this.checked ? 100 : 0;
 
  let total = basePrice + addonPrice;
  document.querySelector('#price').innerText = '₱' + total;
});
