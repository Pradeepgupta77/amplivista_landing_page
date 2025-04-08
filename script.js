

// faq open close start
const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  }); 
// faq open close End 