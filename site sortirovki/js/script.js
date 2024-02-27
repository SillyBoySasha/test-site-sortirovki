document.addEventListener('DOMContentLoaded', () => {
    // Дождаться полной загрузки документа

    // Найти элемент с id "fade-in-text"
    var fadeText = document.getElementById('fade-in-text');
    if (fadeText) {
        // Установить таймаут, чтобы добавить класс после короткой задержки
        setTimeout(() => {
            fadeText.style.opacity = 1; // Изменить opacity на 1, делая текст видимым
        }, 100);
    } else {
        console.error("Элемент с id 'fade-in-text' не найден на странице");
    }

    // Для каждой якорной ссылки добавляем обработчик события при клике
    var arrowLinks = document.querySelectorAll('.arrowLink');
    arrowLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Отменяем стандартное поведение ссылки (переход по якорной ссылке)
            event.preventDefault();

            // Получаем значение атрибута href, которое содержит id целевого блока
            var targetId = link.getAttribute('href').substring(1);

            // Находим целевой блок по id
            var targetBlock = document.getElementById(targetId);

            if (targetBlock) {
                // Плавно прокручиваем страницу к целевому блоку
                targetBlock.scrollIntoView({
                    behavior: 'smooth' // Делаем скролл плавным
                });
            } else {
                console.error("Целевой блок не найден");
            }
        });
    });
});