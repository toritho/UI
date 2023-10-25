 <!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bomba Oxigenadora de Agua</h1>
    <div class="control-panel">
        <button id="power-button">Encender</button>
        <div id="time-programmer">
            <h2>Programador de Tiempo</h2>
            <label for="start-time">Hora de Encendido:</label>
            <input type="time" id="start-time">
            <label for="end-time">Hora de Apagado:</label>
            <input type="time" id="end-time">
            <button id="set-program">Guardar Programación</button>
        </div>
    </div>
    
    <div class="log">
        <h2>Registro de Encendido</h2>
        <ul id="log-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
