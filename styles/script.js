const powerButton = document.getElementById('power-button');
const startInput = document.getElementById('start-time');
const endInput = document.getElementById('end-time');
const setProgramButton = document.getElementById('set-program');
const logList = document.getElementById('log-list');

let isOn = false;

powerButton.addEventListener('click', () => {
    isOn = !isOn;
    powerButton.textContent = isOn ? 'Apagar' : 'Encender';
    if (isOn) {
        const currentTime = new Date();
        logList.innerHTML += `<li>Encendido: ${currentTime.toLocaleString()}</li>`;
    }
});

setProgramButton.addEventListener('click', () => {
    const startTime = startInput.value;
    const endTime = endInput.value;
    console.log(`Programación guardada: Encender a las ${startTime}, Apagar a las ${endTime}`);
});

