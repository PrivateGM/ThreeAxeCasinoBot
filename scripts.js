let tg = window.Telegram.WebApp;


document.getElementById("user_name_show").innerText =
    tg.initDataUnsafe.user.first_name + " " + (tg.initDataUnsafe.user.last_name ?? "");


let avatarContainer = document.getElementById("user_avatar");

if (tg.initDataUnsafe.user.photo_url) 
{
    avatarContainer.innerHTML = `<img src="${tg.initDataUnsafe.user.photo_url}" style="border-radius: 5px;" alt="user photo">`;
} 
else 
{
    avatarContainer.innerHTML = `<i class="fa-solid fa-circle-user fa-2x"></i>`;
}