
// script.js - simple interactivity
document.addEventListener('DOMContentLoaded',function(){
  const btn = document.getElementById('mobile-toggle');
  if(btn){
    btn.addEventListener('click',()=>{
      const nav = document.getElementById('nav-links');
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  }
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      if(!name || !email){ alert('Please enter name and email.'); return; }
      alert('Thanks '+name+' — your message was sent (demo).');
      form.reset();
    });
  }
});
