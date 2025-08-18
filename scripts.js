let tg = window.Telegram.WebApp;

document.getElementById("user_name_show").innerHTML = tg.initData.user.first_name + " " + tg.initData.user.last_name;
console.log(tg.initData.photo_url);