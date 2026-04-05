const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('active');
      const icon = faq.querySelector('.faq-toggle');
      if (icon) icon.textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      const icon = item.querySelector('.faq-toggle');
      if (icon) icon.textContent = '−';
    }
  });
});