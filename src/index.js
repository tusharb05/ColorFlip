let btn = document.querySelector('.btn');
let colors = ['85603f', 'e40017', 'ff75a0', 'fb743e', 'a1cae2', '1e212d', 'ff9292', 'ffb4b4', '350b40', '845ec2', 'f9f871', '75cfb8', '1687a7', '51c2d5', '6930c3', '6930c3', '00af91', '312c51', 'f88f01', 'a685e2']

btn.addEventListener('click', (e)=>{
    let color = '#';
    color+=colors[getRandomNumber()];
    document.body.style.background = color
    // console.log(color);
});
function getRandomNumber() {
    return Math.floor(Math.random()*10);
}
