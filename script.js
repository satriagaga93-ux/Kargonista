
document.addEventListener('DOMContentLoaded',()=>{
  const imgs=document.querySelectorAll('.gallery img');
  const lightbox=document.createElement('div');
  lightbox.id='lightbox';
  document.body.appendChild(lightbox);
  lightbox.style.display='none';
  lightbox.style.position='fixed';
  lightbox.style.top=0;lightbox.style.left=0;
  lightbox.style.width='100%';lightbox.style.height='100%';
  lightbox.style.background='rgba(0,0,0,0.8)';
  lightbox.style.display='flex';lightbox.style.alignItems='center';
  lightbox.style.justifyContent='center';lightbox.style.zIndex=1000;
  const img=document.createElement('img');
  img.style.maxWidth='90%';img.style.maxHeight='90%';
  lightbox.appendChild(img);
  lightbox.addEventListener('click',()=>lightbox.style.display='none');
  imgs.forEach(image=>{image.addEventListener('click',e=>{img.src=e.target.src;lightbox.style.display='flex'})});
});
