$(document).ready(function() {
    var colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e",
                "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
                "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12",
                "#d35400", "#c0392b", "#7f8c8d"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    $("body").css("background-color", color);
});
