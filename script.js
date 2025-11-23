let angleradians;

function calculate() {
    let anglenew = document.querySelector('#angle').value;
    if (anglenew) {
        angleradians = anglenew * Math.PI / 180;
        alert(`Результат: ${angleradians.toFixed(2)}`);
    }
}

function phusic(){
   let size = document.querySelector('#size').value;
   let gravity;
   let select = document.querySelector('select');
   let mater = select.value;
   if (mater === 'copper') {
        gravity = (size * 8.92 * 10)/1000;
        // alert(gravity + ' H сила тяжести маятника');
    }  else if (mater === 'silver') {
        gravity = (size * 10.49 * 10)/1000;
        // alert(gravity + ' H сила тяжести маятника');
    }  else if (mater === 'iron') {
        gravity = (size * 7.87 * 10)/1000;
    }
    alert(gravity + ' H сила тяжести маятника');
}

window.onload = () => {
  const button = document.querySelector('#phusicbutton');
//   button.addEventListener('click', calculate);
  button.addEventListener('click', phusic);
};
