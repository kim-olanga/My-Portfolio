var type = new Typed('.typing-text',{
    strings : ['project manager','teen mentor','founder BSI','project manager'],
    typespeed: 50,
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
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting
    
//     var formData = new FormData(this);
    
//     fetch('script.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('response').innerHTML = data;
//         // Optionally, clear the form
//         document.getElementById('contactForm').reset();
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('response').innerHTML = '<p>There was an error sending your message.</p>';
//     });
// });
