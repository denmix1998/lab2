document.addEventListener('DOMContentLoaded', function() {
    // Управление секциями с меню (если используется меню для навигации между страницами)
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.classList.remove('active'));
            
            const activeSection = document.getElementById(sectionId);
            activeSection.classList.add('active');
        });
    });

    // Обработка отправки формы регистрации сайта
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Пример обработки данных формы
            const formData = new FormData(registrationForm);
            console.log('Форма регистрации отправлена');
            console.log('Данные формы:', Object.fromEntries(formData));

            // Здесь можно добавить код для отправки данных на сервер
        });
    }

    // Обработка отправки формы заказа
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Пример обработки данных формы
            const formData = new FormData(orderForm);
            console.log('Форма заказа отправлена');
            console.log('Данные формы:', Object.fromEntries(formData));

            // Здесь можно добавить код для отправки данных на сервер
        });
    }
});
