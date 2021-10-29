document.querySelectorAll ('.accordion_btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion_btn--active');

        if (button.classList.contains('accordion_btn--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }else {
            accordionContent.style.maxHeight = 0;
        }
    });
});