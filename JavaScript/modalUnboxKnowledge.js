document.getElementById('abrirModalOtrosCursos').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('otrosCursosModal').style.display = 'flex';
});
document.querySelector('.modal-otros-cursos__close').addEventListener('click', function () {
    document.getElementById('otrosCursosModal').style.display = 'none';
});
document.querySelector('.modal-otros-cursos__overlay').addEventListener('click', function () {
    document.getElementById('otrosCursosModal').style.display = 'none';
});
