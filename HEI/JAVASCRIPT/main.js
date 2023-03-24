//LOADER
let loaderBcg = document.querySelector('#loader');

setTimeout(function () {
    loaderBcg.classList.add('d-none');
}, 1000);

//COUNTER
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                counter("state_anim1", 0, 1, 1000);
                counter("state_anim2", 0, 150, 2000);
                counter("state_anim3", 0, 20, 1500);
                counter("state_anim4", 0, 9, 1200);
            }, 500)
        }
    })
})

/*document.addEventListener("DOMContentLoaded", () => {*/
function counter(cls, start, end, duration) {
    let obj = document.getElementById(cls);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;

        if (current == end) {
            clearInterval(timer);
        }
    }, step)
}

/*});*/

let stats = document.querySelector('#stats');

observer.observe(stats);

//AOS INITIAION
AOS.init();

AOS.init({
    offset: 200,
    delay: 3,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});