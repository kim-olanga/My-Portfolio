var type = new Typed('.typing-text',{
    strings : ['web designer','frontend developer','backend developer','project manager'],
    typespeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));