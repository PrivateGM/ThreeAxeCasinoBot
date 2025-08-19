let tg = window.Telegram.WebApp;
tg.ready(); 


if (tg.initDataUnsafe && tg.initDataUnsafe.user) 
{
    let user = tg.initDataUnsafe.user;

    document.getElementById("user_name_show").innerText = user.first_name + " " + (user.last_name ?? "");
    let avatarContainer = document.getElementById("user_avatar");
    
    if (user.photo_url)
    {
        avatarContainer.innerHTML = `<img src="${user.photo_url}" style="border-radius: 5px; width:80px;" alt="user photo">`;
    } 
    else 
    {
        avatarContainer.innerHTML = `<i class="fa-solid fa-circle-user fa-2x"></i>`;
    }
} 
else 
{
    console.log("Нет данных о пользователе. Возможно, сайт открыт не как WebApp в Telegram?");
}