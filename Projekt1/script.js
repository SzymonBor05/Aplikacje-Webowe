function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

document.addEventListener('DOMContentLoaded', function() {
    updateClock();           // Wywołanie funkcji od razu, aby pokazać czas
    setInterval(updateClock, 1000);  // Aktualizowanie zegara co sekundę
});
