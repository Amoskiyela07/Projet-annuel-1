const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        //Close all others items 
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.
                contains('active')) {
                    otherItem.classList.remove('active');
                }
        });

        //Toggle current item
        item.classList.toggle('active');
    });
});