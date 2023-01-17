let togglebtn = document.querySelector('.togglebtn');
let links = document.querySelector('ul');
let layer  =document.querySelector('.layer');
let closeBtn = document.querySelector('.closeBtn');

togglebtn.onclick = ()=>{
   links.classList.toggle('open')
   layer.classList.toggle('links-layer');
   closeBtn.classList.add('close');
   closeBtn.classList.remove('hide');
   togglebtn.classList.add('hide');
};

closeBtn.onclick = ()=>{
   links.classList.toggle('open')
   layer.classList.toggle('links-layer');
   closeBtn.classList.add('hide');
   togglebtn.classList.remove('hide');
};