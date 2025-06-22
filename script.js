// Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((acc, i) => {
  acc.addEventListener('click', () => {
    if(acc.classList.contains('active')) {
      // do nothing if already active for Alim 2nd year
      if(i === 0) return;
      acc.classList.remove('active');
      acc.nextElementSibling.classList.remove('active');
    } else {
      // Close all except Alim 2nd year (first)
      accordions.forEach((a, idx) => {
        if(idx !== 0) {
          a.classList.remove('active');
          a.nextElementSibling.classList.remove('active');
        }
      });
      acc.classList.add('active');
      acc.nextElementSibling.classList.add('active');
    }
  });
});

// Creator alert
document.getElementById('creatorName').addEventListener('click', function(e){
  e.preventDefault();
  alert('User ID: 038\nName: Tahmid Hasan\nClass: আলিম ২য় বর্ষ');
});
