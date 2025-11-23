let angleradians;
function calculate() {
    let anglenew = document.querySelector('#angle').value;
    if (anglenew) {
        angleradians = anglenew * Math.PI / 180;
        alert(`Результат: ${angleradians.toFixed(2)}`);
    }
}
function material_m(){
   let select = document.querySelector('select');
   let mater = select.value;
   if (mater === 'copper'){
        alert(angleradians * 1000)
   }
   if (mater === 'silver'){
        alert(angleradians * 0)
   }
   if (mater === 'iron'){
        alert(angleradians * 1)
   }
}
window.onload = () => {
  const button = document.querySelector('#phusicbutton');
  button.addEventListener('click', calculate);
  button.addEventListener('click', material_m);
};
