
function calculate() {
    let anglenew = document.querySelector('#angle').value;
    let label_angle = document.querySelector('#print_angle')
    if (anglenew) {
        let angleradians = anglenew * Math.PI / 180;
        label_angle.textContent = 'Угол в градусах - '+ angleradians;
    }
}

function phusic(){
   let size = document.querySelector('#size').value;
   let gravity;
   let select = document.querySelector('select');
   let mater = select.value;
   let label_gravity = document.querySelector('#print_gravity');
   if (mater === 'copper') {
        gravity = (size * 8.92 * 10)/1000;
        // alert(gravity + ' H сила тяжести маятника');
}  else if (mater === 'silver') {
        gravity = (size * 10.49 * 10)/1000;
        // alert(gravity + ' H сила тяжести маятника');
}  else if (mater === 'iron') {
        gravity = (size * 7.87 * 10)/1000;
        // alert(gravity + ' H сила тяжести маятника');
    }
    label_gravity.innerHTML = gravity;
}

window.onload = () => {
  const button = document.querySelector('#phusicbutton');
//   button.addEventListener('click', calculate);
  button.addEventListener('click', phusic);
};
