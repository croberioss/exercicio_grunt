document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
            evento.preventDefault();

            let numeroMax = document.getElementById('numero-maximo').value;
            numeroMax = parseInt(numeroMax);

            let numeroAleatorio = numeroMax * Math.random();
            numeroAleatorio = Math.floor(numeroAleatorio) + 1;
            console.log(numeroAleatorio)

            document.getElementById('resultado-valor').innerText = numeroAleatorio;
            document.querySelector('.resultado').style.display= 'block'
    })
})