document.addEventListener('DOMContentLoaded', () => {
  if (!window.Telegram || !window.Telegram.WebApp) {
    console.warn('SDK Telegram WebApp не найден. Откройте страницу как WebApp внутри Telegram.');
    return;
  }
  const tg = window.Telegram.WebApp;
  tg.ready();
  const user = tg.initDataUnsafe?.user;
  if (!user) {
    console.warn('Нет данных о пользователе. Вероятно, страница не запущена через WebApp.');
    return;
  }
  const nameEl = document.getElementById('user_name_show');
  const avatarEl = document.getElementById('user_avatar');
  nameEl.textContent = [user.first_name, user.last_name].filter(Boolean).join(' ');
  if (user.photo_url) {
    avatarEl.innerHTML = `<img src="${user.photo_url}" style="border-radius:5px;width:80px" alt="user photo">`;
  } else {
    // Простой текстовый fallback вместо иконки
    avatarEl.textContent = "Нет фото";
  }
});