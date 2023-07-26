
const cargar = () => {
    for (let i = 0; i < 200; i++) {
        const start = document.createElement("div");
        start.classList.add("stars1");
        document.body.appendChild(start);

        // position and animate start
        start.style.left = Math.random() * window.innerWidth + "px";
        start.style.animationDelay = Math.random() * 50 + "s";
    }

    for (let i = 0; i < 150; i++) {
        const start = document.createElement("div");
        start.classList.add("stars2");
        document.body.appendChild(start);

        // position and animate start
        start.style.left = Math.random() * window.innerWidth + "px";
        start.style.animationDelay = Math.random() * 100 + "s";
    }
    for (let i = 0; i < 100; i++) {
        const start = document.createElement("div");
        start.classList.add("stars3");
        document.body.appendChild(start);

        // position and animate start
        start.style.left = Math.random() * window.innerWidth + "px";
        start.style.animationDelay = Math.random() * 100 + "s";
    }
}

cargar()