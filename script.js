document.getElementById('cutButton').addEventListener('click', function() {
    const girl = document.getElementById('girl');
    girl.src = 'girl_haircut.png';
    setTimeout(function() {
        girl.src = 'girl.png';
    }, 2000);
});
