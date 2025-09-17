document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.buy').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const card = e.target.closest('.card');
      const title = card.querySelector('h3').textContent;
      alert(title + " — more info coming soon!");
    });
  });
});