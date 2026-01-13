const yesBtn = document.getElementById("yes");
const noBtn  = document.getElementById("no");

yesBtn.addEventListener("click", () => {
    alert("🥰 JAAA! Das macht mich so glücklich 💖");

    document.querySelector(".box").innerHTML = `
        <h1>💘 Date bestätigt 💘</h1>
        <p>Ich freu mich riesig auf dich 😘</p>
    `;
});

noBtn.addEventListener("mouseover", () => {
    alert("😜 Das war knapp – nochmal versuchen!");

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top  = y + "px";
});

