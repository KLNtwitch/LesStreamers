const streamers = [
{
    name:"e2manuel_yt",
    twitch:"https://twitch.tv/e2manuel_yt",
    avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png",
    live:false
},
{
    name:"KLNtwitch",
    twitch:"https://twitch.tv/klntwitch",
    avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png",
    live:true
},
{
    name:"Kryazer_",
    twitch:"https://twitch.tv/kryazer_",
    avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png",
    live:false
}
];

const cards = document.getElementById("cards");

let liveCount = 0;

streamers.forEach(streamer => {

    if(streamer.live) liveCount++;

    cards.innerHTML += `
    <div class="card">

        <div class="top">
            <img class="avatar" src="${streamer.avatar}">
            <div>
                <div class="name">${streamer.name}</div>
                <div class="status ${streamer.live ? 'live' : 'offline'}">
                    ${streamer.live ? 'LIVE' : 'OFFLINE'}
                </div>
            </div>
        </div>

        <br>

        <a href="${streamer.twitch}" target="_blank">
            OUVRIR ↗
        </a>

    </div>
    `;
});

document.getElementById("liveCount").innerText = liveCount;
