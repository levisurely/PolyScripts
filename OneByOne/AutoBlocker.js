const BlockTO = 17000
const csrf = "idk";

async function block(id){
await fetch("https://polytoria.com/api/users/block", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Alt-Used": "polytoria.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://polytoria.com/user/17978",
    "body": `csrf=${csrf}&id=${id}`,
    "method": "POST",
    "mode": "cors"
});
}

for ( let iterator = 0; iterator<BlockTO; iterator++) {
  block(iterator).then((finished) => console.log("Blocked %d", iterator));
}
