var type = new Typed('.typing-text',{
    strings : ['web developer','project manager','freelancer','musician'],
    typespeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));
// $(function(){
//     $("#submit").submit(function(event){
//         event.preventDefault()
//         var message = `Thank you for the consideration`
//         $("#output").append(message)
//     });
// });