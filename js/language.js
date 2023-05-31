const languageBox = document.querySelector('.language-box');
const languageToolBarBtn = document.querySelector('.tool-language-box');

function modalShow() {
    languageBox.style.opacity = '1';
}

function modalHidden(e) {
    const hidden = e.composedPath().includes(languageBox);
    if (!hidden && e.target != languageToolBarBtn) {
        languageBox.style.opacity = '0';
    }
}

languageToolBarBtn.addEventListener('click', modalShow)

document.addEventListener('click', modalHidden)

// lang change

const languageBtnENG = document.querySelector('.language-box-us');
const languageBtnRUS = document.querySelector('.language-box-ru');

function translateENG() {
    localStorage.setItem('english', 'true');

    //header 
    document.getElementById('pageDocumentation').textContent = 'documentation'
    document.getElementById('pageCommands').textContent = 'commands'
    document.getElementById('pageStatistic').textContent = 'statistics'
    document.getElementById('pageSupportUs').textContent = 'support us'

    document.querySelector('.hint_box_text').textContent = 'community'
    document.querySelector('.tool-bar___login-box p').textContent = 'sign in'
    document.querySelector('.header-main-box___text-box p').textContent = 'Upload music to your server'
    document.querySelector('.header-main-box___add-ds-button span').textContent = 'ADD TO DISCORD'
    document.querySelector('.header-main-box___more-button span').textContent = 'MORE'
    
    //footer
    document.querySelector('.footer_btn_and_txt').textContent = '…and we invite you to join us!'
    document.querySelector('.footer-main-box___add-ds-button').textContent = 'ADD TO DISCORD'

    document.querySelector('.footer-menu1').textContent = 'Support Server'
    document.querySelector('.footer-menu2').textContent = 'Documentation'
    document.querySelector('.footer-menu3').textContent = 'Commands'
    document.querySelector('.footer-menu4').textContent = 'Feedback'
    document.querySelector('.footer-menu5').textContent = 'Terms of Use'
    document.querySelector('.footer-menu6').textContent = 'Confidentiality'
    document.querySelector('.footer-menu7').textContent = 'Cookies'
    document.querySelector('.footer-menu8').textContent = 'State'
    document.querySelector('.footer-menu9').textContent = 'Donations'

    //main content
    document.querySelector('.sbh1').textContent = 'Flexible functionality'
    document.querySelector('.sbd1').textContent = 'Feature rich, well structured and intuitive control panel with many settings! Set up everything in one place: prefix, language, command permissions and much more!'

    document.querySelector('.sbh2').textContent = 'Custom commands'
    document.querySelector('.sbd2').textContent = 'Create your own commands that send messages to channels, add or remove roles, add reactions, or trigger other button and menu actions.'
    document.querySelector('.sbd22').textContent = 'You can go further and create more complex commands with programmable behavior using message templates! Check out our documentation for more details.'

    document.querySelector('.sbh3').textContent = 'Moderation'
    document.querySelector('.sbd3').textContent = 'Keep your Discord server secure with advanced moderation features such as temporary bans, mutes, and member warnings.'
    document.querySelector('.sbd33').textContent = 'Murka also has a customizable automatic moderation system against unwanted links, invites, bad words, flooding, zalgo, excessive use of Caps Lock, emotions and mentions.'

    document.querySelector('.sbh4').textContent = 'Social media'
    document.querySelector('.sbd4').textContent = 'Follow your favorite YouTube channels, Twitch.tv or Trovo.live streamers, get notifications for new videos and live streams.'
    document.querySelector('.sbd44').textContent = 'Set up automatic publication of posts from your VKontakte community directly to a text channel on the Discord server.'

    document.querySelector('.sbh5').textContent = 'User Rating'
    document.querySelector('.sbd5').textContent = 'Your community is priceless! Reward the most active members using our ranking system. Let them reward each other with cookies and track their voice activity.'
    document.querySelector('.sbd55').textContent = 'Love your community <3'

    document.querySelector('.sbh6').textContent = 'Audit system'
    document.querySelector('.sbd6').textContent = 'If the built-in auditing in Discord is not enough, set up additional logging for messages deleted or modified, joining and leaving voice channels, changing member roles, and much more.'
    document.querySelector('.sbd6').textContent = 'The audit system uses Webhooks to send logs. You can change their name, set your own avatar and combine several logs into one webhook.'

    document.querySelector('.sbh7').textContent = 'Huge selection of music'
    document.querySelector('.sbd7').textContent = 'Listen to your favorite music from Yandex.Music, SoundCloud, Bandcamp, Vimeo, Twitch.tv and radio stations. DJ roles, playlists, convenient button control.'
}

function translateRUS() {
    localStorage.setItem('english', 'false')

    //header 
    document.getElementById('pageDocumentation').textContent = 'документация'
    document.getElementById('pageCommands').textContent = 'команды'
    document.getElementById('pageStatistic').textContent = 'статистика'
    document.getElementById('pageSupportUs').textContent = 'поддержите нас'

    document.querySelector('.hint_box_text').textContent = 'сообщество'
    document.querySelector('.tool-bar___login-box p').textContent = 'Войти'
    document.querySelector('.header-main-box___text-box p').textContent = 'Залей музыки в свой сервер'
    document.querySelector('.header-main-box___add-ds-button span').textContent = 'ДОБАВИТЬ В DISCOR'
    document.querySelector('.header-main-box___more-button span').textContent = 'ПОДРОБНЕЕ'

    //footer
    document.querySelector('.footer_btn_and_txt').textContent = '…и приглашаем Вас присоединиться к нам!'
    document.querySelector('.footer-main-box___add-ds-button').textContent = 'ДОБАВИТЬ В DISCORD'

    document.querySelector('.footer-menu1').textContent = 'Сервер поддержки'
    document.querySelector('.footer-menu2').textContent = 'Документация'
    document.querySelector('.footer-menu3').textContent = 'Команды'
    document.querySelector('.footer-menu4').textContent = 'Обратная связь'
    document.querySelector('.footer-menu5').textContent = 'Условия использования'
    document.querySelector('.footer-menu6').textContent = 'Конфиденциальность'
    document.querySelector('.footer-menu7').textContent = 'Файлы Cookie'
    document.querySelector('.footer-menu8').textContent = 'Состояние'
    document.querySelector('.footer-menu9').textContent = 'Пожертвования'

    //main content
    document.querySelector('.sbh1').textContent = 'Гибкий функционал'
    document.querySelector('.sbd1').textContent = 'Многофункциональная, хорошо структурированная и интуитивно понятная панель управления с множеством настроек! Настраивайте всё в одном месте: префикс, язык, права доступа к командам и многое другое!'

    document.querySelector('.sbh2').textContent = 'Настраиваемые команды'
    document.querySelector('.sbd2').textContent = 'Создавайте свои собственные команды, которые отправляют сообщения в каналы, добавляют или снимают роли, добавляют реакции или вызывают другие действия по кнопкам и меню.'
    document.querySelector('.sbd22').textContent = 'Вы можете пойти дальше и создавать более сложные команды с программируемым поведением используя шаблоны сообщений! Ознакомьтесь с нашей документацией для получения более подробной информации.'

    document.querySelector('.sbh3').textContent = 'Модерирование'
    document.querySelector('.sbd3').textContent = 'Обеспечьте безопасность своего Discord-сервера с помощью расширенных функций модерации, таких как временные баны, мьюты и предупреждения участников.'
    document.querySelector('.sbd33').textContent = 'Murka также имеет настраиваемую систему автоматической модерации против нежелательных ссылок, приглашений, плохих слов, флуда, zalgo, чрезмерного использования Caps Lock, эмоций и упоминаний.'

    document.querySelector('.sbh4').textContent = 'Социальные сети'
    document.querySelector('.sbd4').textContent = 'Следите за любимыми каналами YouTube, стримерами Twitch.tv или Trovo.live, получайте уведомления о новых видео и прямых трансляциях.'
    document.querySelector('.sbd44').textContent = 'Настройте автоматическую публикацию постов из своего сообщества ВКонтакте сразу в текстовый канал на Discord сервере.'

    document.querySelector('.sbh5').textContent = 'Рейтинг пользователей'
    document.querySelector('.sbd5').textContent = 'Ваше сообщество бесценно! Награждайте самых активных участников используя нашу систему рейтинга. Позвольте им поощрять друг друга печеньками и отслеживать свою голосовую активность.'
    document.querySelector('.sbd55').textContent = 'Любите своё сообщество <3'

    document.querySelector('.sbh6').textContent = 'Система аудита'
    document.querySelector('.sbd6').textContent = 'Если встроенного в Discord аудита недостаточно, настройте дополнительное логирование событий удаления или изменения сообщений, присоединения и выхода из голосовых каналов, изменения ролей участников и многое другое.'
    document.querySelector('.sbd66').textContent = 'Система аудита использует Вебхуки для отправки логов. Вы можете менять их название, устанавливать свою аватарку и комбинировать несколько логов в один вебхук.    '

    document.querySelector('.sbh7').textContent = 'Огромный выбор музыки'
    document.querySelector('.sbd7').textContent = 'Слушайте Вашу любимую музыку из Яндекс.Музыки, SoundCloud, Bandcamp, Vimeo, Twitch.tv и радиостанции. DJ-роли, плейлисты, удобное управление кнопками.'
}

languageBtnENG.addEventListener('click', translateENG);
languageBtnRUS.addEventListener('click', translateRUS);

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('english') == 'true') {
        translateENG()
    }
    else {
        translateRUS()
    }
});