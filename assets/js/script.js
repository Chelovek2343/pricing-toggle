const switchToggle = document.getElementById('switch_toggle');
const swit = document.getElementById('swit');
const basic = document.getElementById('basic');
const proffesional = document.getElementById('proffesional');
const master = document.getElementById('master');

switchToggle.addEventListener('change', () => {
    if (switchToggle.checked === true) {
        basic.innerHTML = `<span>$</span> 199.99`;
        proffesional.innerHTML = `<span>$</span> 249.99`;
        master.innerHTML = `<span>$</span> 399.99`;
    } else {
        basic.innerHTML = `<span>$</span> 19.99`;
        proffesional.innerHTML = `<span>$</span> 24.99`;
        master.innerHTML = `<span>$</span> 39.99`;
    }
});
