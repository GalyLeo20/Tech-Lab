/**
 * ECOSISTEMA DE FALLAS MULTI-DISPOSITIVOS CON ANIMACIÓN DE MONITOR (EDICIÓN INTERACTIVA)
 * Estructura progresiva (0% a 100%) - 45 Casos Totales
 */

// 1. TUS 5 CASOS ORIGINALES (Intactos con sus animaciones y pitidos)
const originalCases = {
    pc: [
        {
            id: "pc_ram_dust",
            symptom: "El equipo gaming enciende, la refrigeración líquida se activa, pero la pantalla se queda en negro y la motherboard emite ráfagas de pitidos continuos sin dar video.",
            tutorSteps: ["Escucha el patrón de pitidos e intenta encender el PC.", "Inspecciona el chasis interno para ver el estado físico de los slots DDR5.", "Diagnostica y aplica el mantenimiento o cambio físico de la memoria."],
            correctDiag: "diag_pc_ram", correctSol: "sol_pc_ram",
            beepPattern: [3, 1000, 300], beepText: "3 Pitidos Largos Continuos (Error de lectura de Memoria)",
            explanation: "Las placas modernas emiten códigos de audio específicos si la memoria RAM DDR5 tiene polvo o falsos contactos.",
            actions: { power: "beeping", inspect: "Filtro interno de la placa: El slot 2 tiene partículas de polvo obstruyendo los pines de la RAM." },
            animationType: "hardware_test", animationText: "⚙️ COMPROBANDO BANCOS RAM DDR5...",
            diagnostics: [
                { id: "diag_pc_ram", text: "Falsos contactos o partículas de polvo en ranuras de memoria RAM DDR5" },
                { id: "diag_pc_gpu", text: "Falla de disipación de GPU dedicada por obstrucción mecánica de ventilador" },
                { id: "diag_pc_power", text: "Falla en los condensadores internos de la fuente de poder ATX de 850W" }
            ],
            solutions: [
                { id: "sol_pc_ram", text: "Remover memorias, sopletear ranuras con aire comprimido y reasentar módulos" },
                { id: "sol_pc_gpu", text: "Liberar el ventilador obstruído de la GPU y reordenar cables de la caja" },
                { id: "sol_pc_power", text: "Sustituir la fuente de poder por una nueva con certificación 80 Plus Gold" }
            ]
        },
        {
            id: "pc_gpu_overheat",
            symptom: "El cliente indica que al abrir simuladores o juegos en 4K, la computadora se apaga por completo a los 2 minutos de uso intenso, arrojando un olor a plástico muy caliente.",
            tutorSteps: ["Enciende el PC para observar velocidades y temperaturas iniciales.", "Destapa el gabinete y revisa el flujo de los ventiladores de la GPU dedicada.", "Define la falla y realiza el mantenimiento correctivo térmico."],
            correctDiag: "diag_pc_gpu", correctSol: "sol_pc_gpu",
            beepPattern: null, beepText: "Ninguno - Silencio de protección térmica",
            explanation: "Las tarjetas de video de última generación cortan la energía si sus sensores detectan que exceden los 100°C por falla de ventilación interna.",
            actions: { power: "thermal_die", inspect: "Bloque GPU: Uno de los tres ventiladores de la tarjeta gráfica está atascado por un cable suelto de la fuente." },
            animationType: "cooling_test", animationText: "❄️ CALIBRANDO SENSORES DE TEMPERATURA Y VENTILADORES...",
            diagnostics: [
                { id: "diag_pc_ram", text: "Falsos contactos o partículas de polvo en ranuras de memoria RAM DDR5" },
                { id: "diag_pc_gpu", text: "Falla de disipación de GPU dedicada por obstrucción mecánica de ventilador" },
                { id: "diag_pc_power", text: "Falla en los condensadores internos de la fuente de poder ATX de 850W" }
            ],
            solutions: [
                { id: "sol_pc_ram", text: "Remover memorias, sopletear ranuras con aire comprimido y reasentar módulos" },
                { id: "sol_pc_gpu", text: "Liberar el ventilador obstruído de la GPU y reordenar cables de la caja" },
                { id: "sol_pc_power", text: "Sustituir la fuente de poder por una nueva con certificación 80 Plus Gold" }
            ]
        }
    ],
    laptop: [
        {
            id: "lap_nvme_fail",
            symptom: "Laptop ultrabook de última generación se cayó de la mesa de noche. Al encenderla, entra directo a la pantalla de configuración de UEFI/BIOS sin cargar el sistema operativo.",
            tutorSteps: ["Enciende la laptop y verifica la lista de dispositivos detectados por la BIOS.", "Retira la tapa inferior protectora de la laptop.", "Diagnostica la causa de la desconexión física de almacenamiento."],
            correctDiag: "diag_lap_nvme", correctSol: "sol_lap_nvme",
            beepPattern: null, beepText: "Silencio (Código visual de alerta en BIOS)",
            explanation: "Los impactos secos pueden desplazar los discos sólidos M.2 NVMe si no están correctamente atornillados a la motherboard.",
            actions: { power: "bios_loop", inspect: "Interior Laptop: El módulo SSD NVMe M.2 se ha deslizado parcialmente fuera de su ranura de conexión." },
            animationType: "hardware_test", animationText: "🔍 RE-ESCANEANDO PUERTOS PCI-E NVMe...",
            diagnostics: [
                { id: "diag_lap_nvme", text: "Desprendimiento físico del módulo de almacenamiento M.2 NVMe por impacto" },
                { id: "diag_lap_battery", text: "Batería de polímero de litio inflada obstruyendo el bus del teclado" },
                { id: "diag_lap_flex", text: "Cinta Flex de la pantalla LED rota o floja en las bisagras" }
            ],
            solutions: [
                { id: "sol_lap_nvme", text: "Reinsertar el SSD M.2 NVMe firmemente en su puerto y asegurar su tornillo de fijación" },
                { id: "sol_lap_battery", text: "Remover la batería defectuosa de forma segura e instalar un reemplazo original" },
                { id: "sol_lap_flex", text: "Desarmar el marco de la pantalla y reconectar el cable Flex con cinta de aislamiento" }
            ]
        }
    ],
    printer: [
        {
            id: "print_thermal_faded",
            symptom: "Impresora térmica de punto de venta (recibos) saca los tickets completamente en blanco, a pesar de que los engranajes giran y el rodillo se mueve de forma correcta.",
            tutorSteps: ["Enciende la impresora y manda una página de autoprueba.", "Abre la compuerta de carga del papel térmico.", "Diagnostica el error del consumible o cabezal."],
            correctDiag: "diag_print_paper", correctSol: "sol_print_paper",
            beepPattern: [1, 400, 800], beepText: "1 Pitido Grave (Alerta de alimentación de consumible)",
            explanation: "El papel térmico solo tiene una cara reactiva al calor. Si se inserta al revés, la impresión saldrá totalmente transparente.",
            actions: { power: "print_blank", inspect: "Compartimento de papel: El rollo térmico está posicionado al revés, alimentando el lado no químico directamente al cabezal." },
            animationType: "printer_test", animationText: "🖨️ ALINEANDO CABEZAL Y RE-IMPRIMIENDO TICKET...",
            diagnostics: [
                { id: "diag_print_paper", text: "Alimentación invertida del papel de impresión térmica (Lado equivocado)" },
                { id: "diag_print_laser", text: "Unidad de tambor fotoconsumible rayada o dañada por grapas" },
                { id: "diag_print_wifi", text: "Conflicto de dirección IP estática en la tarjeta de red inalámbrica" }
            ],
            solutions: [
                { id: "sol_print_paper", text: "Dar la vuelta al rollo de papel térmico para que la cara sensible entre en contacto con el cabezal" },
                { id: "sol_print_laser", text: "Reemplazar el cartucho de tambor (Drum Unit) por uno nuevo de paquete" },
                { id: "sol_print_wifi", text: "Reiniciar los valores de red desde el panel LCD y asignar IP por DHCP dinámico" }
            ]
        }
    ],
    software: [
        {
            id: "soft_office_lic",
            symptom: "El usuario abrió un documento de Word y Excel del paquete ofimático empresarial, pero le aparece una barra roja que dice 'Acceso de lectura deshabilitado' y restringe la escritura.",
            tutorSteps: ["Enciende el equipo y lanza la aplicación afectada.", "Verifica el estado de la cuenta e inicio de sesión del usuario en el sistema.", "Diagnostica el bloqueo lógico y aplica la corrección de software."],
            correctDiag: "diag_soft_lic", correctSol: "sol_soft_lic",
            beepPattern: null, beepText: "Ninguno (Problema puramente lógico a nivel de software)",
            explanation: "Los paquetes de ofimática por suscripción congelan las funciones de edición si la licencia corporativa expira o la cuenta se desvincula.",
            actions: { power: "soft_blocked", inspect: "Entorno lógico de Software: El software indica 'Suscripción corporativa vencida o no asociada a este dominio de usuario'." },
            animationType: "software_install", animationText: "🛡️ COMPROBANDO LICENCIAS E INSTALANDO PAQUETE OFIMÁTICO...",
            diagnostics: [
                { id: "diag_soft_lic", text: "Expiración de suscripción de cuenta o desvinculación de token de licencia de la Suite" },
                { id: "diag_soft_driver", text: "Incompatibilidad de la actualización de Windows con el controlador del sistema" },
                { id: "diag_soft_virus", text: "Falso positivo provocado por el sistema de protección Windows Defender" }
            ],
            solutions: [
                { id: "sol_soft_lic", text: "Cerrar la sesión de la cuenta caducada y loguear la nueva cuenta con licencia activa" },
                { id: "sol_soft_driver", text: "Iniciar en Modo Seguro y revertir a la versión anterior del controlador técnico" },
                { id: "sol_soft_virus", text: "Agregar el directorio del programa a la lista de exclusiones de seguridad del antivirus" }
            ]
        }
    ]
};

// 2. LOS 40 PROBLEMAS NUEVOS PROPORCIONADOS
const userProblems = {
    pc: [
        { s: "La PC no enciende.", o: ["Cambiar el fondo de pantalla.", "Revisar el cable de alimentación y la fuente de poder.", "Actualizar Microsoft Word.", "Instalar una impresora."], a: 1 },
        { s: "La PC se reinicia constantemente.", o: ["Verificar sobrecalentamiento y limpiar ventiladores.", "Cambiar el teclado.", "Instalar más iconos en el escritorio.", "Reducir el brillo del monitor."], a: 0 },
        { s: "No hay imagen en el monitor.", o: ["Revisar conexiones de video y estado del monitor.", "Cambiar la contraseña del usuario.", "Instalar una aplicación móvil.", "Actualizar la impresora."], a: 0 },
        { s: "La PC está muy lenta.", o: ["Limpiar archivos temporales y programas innecesarios.", "Desconectar el mouse.", "Apagar el monitor.", "Cambiar el idioma del sistema."], a: 0 },
        { s: "El teclado no funciona.", o: ["Revisar conexión o cambiar de puerto USB.", "Formatear el disco duro.", "Reiniciar el router.", "Cambiar la batería CMOS."], a: 0 },
        { s: "No hay conexión a Internet.", o: ["Verificar cable de red o configuración Wi-Fi.", "Cambiar el protector de pantalla.", "Actualizar PowerPoint.", "Instalar una cámara web."], a: 0 },
        { s: "La PC emite pitidos al encender.", o: ["Revisar memoria RAM y componentes internos.", "Limpiar el monitor.", "Cambiar la resolución de pantalla.", "Instalar antivirus."], a: 0 },
        { s: "El disco duro no es detectado.", o: ["Revisar cables SATA y alimentación.", "Cambiar el mouse.", "Actualizar Excel.", "Instalar un navegador."], a: 0 },
        { s: "Sobrecalentamiento del equipo.", o: ["Limpiar ventiladores y renovar pasta térmica.", "Cambiar la impresora.", "Reducir el volumen.", "Actualizar Windows Media Player."], a: 0 },
        { s: "Los puertos USB no funcionan.", o: ["Verificar controladores y puertos físicos.", "Cambiar el monitor.", "Desinstalar Paint.", "Modificar la fecha del sistema."], a: 0 }
    ],
    laptop: [
        { s: "La batería no carga.", o: ["Revisar cargador y estado de la batería.", "Actualizar Chrome.", "Cambiar el fondo de pantalla.", "Limpiar la pantalla."], a: 0 },
        { s: "La laptop se apaga repentinamente.", o: ["Revisar temperatura y sistema de ventilación.", "Cambiar el mouse.", "Instalar una impresora.", "Actualizar Word."], a: 0 },
        { s: "La pantalla está negra.", o: ["Verificar pantalla, cable flex o salida de video.", "Reiniciar el router.", "Instalar antivirus.", "Cambiar el idioma."], a: 0 },
        { s: "El touchpad no funciona.", o: ["Activar el touchpad y revisar controladores.", "Cambiar la batería CMOS.", "Actualizar PowerPoint.", "Limpiar el escritorio."], a: 0 },
        { s: "El teclado integrado falla.", o: ["Revisar configuración y controladores del teclado.", "Cambiar la impresora.", "Reiniciar el módem.", "Actualizar Adobe Reader."], a: 0 },
        { s: "La laptop se calienta demasiado.", o: ["Limpiar ventiladores y salidas de aire.", "Cambiar el fondo de pantalla.", "Actualizar calculadora.", "Instalar una webcam."], a: 0 },
        { s: "No detecta redes Wi-Fi.", o: ["Verificar adaptador inalámbrico y controladores.", "Cambiar el monitor.", "Limpiar el teclado.", "Actualizar Excel."], a: 0 },
        { s: "No se escucha audio.", o: ["Revisar volumen, altavoces y controladores.", "Formatear el disco duro.", "Cambiar la batería.", "Actualizar el navegador."], a: 0 },
        { s: "El cargador se desconecta fácilmente.", o: ["Revisar puerto de carga y conector.", "Actualizar Word.", "Cambiar el wallpaper.", "Limpiar la cámara."], a: 0 },
        { s: "La laptop tarda mucho en iniciar.", o: ["Deshabilitar programas de inicio innecesarios.", "Cambiar el mouse.", "Reiniciar la impresora.", "Instalar un protector de pantalla."], a: 0 }
    ],
    printer: [
        { s: "La impresora no imprime.", o: ["Verificar conexión y estado de la impresora.", "Cambiar el monitor.", "Actualizar Excel.", "Reiniciar el teclado."], a: 0 },
        { s: "Papel atascado.", o: ["Retirar cuidadosamente el papel atascado.", "Instalar un antivirus.", "Reiniciar el router.", "Cambiar la fecha del sistema."], a: 0 },
        { s: "Impresiones borrosas.", o: ["Limpiar o alinear los cabezales.", "Actualizar Windows.", "Cambiar el mouse.", "Instalar PowerPoint."], a: 0 },
        { s: "No reconoce cartuchos.", o: ["Reinstalar o limpiar contactos del cartucho.", "Reiniciar el módem.", "Cambiar la memoria RAM.", "Actualizar Chrome."], a: 0 },
        { s: "Imprime hojas en blanco.", o: ["Revisar nivel de tinta o tóner.", "Cambiar el teclado.", "Instalar una cámara web.", "Actualizar Paint."], a: 0 },
        { s: "Impresión demasiado lenta.", o: ["Ajustar calidad de impresión y revisar cola de impresión.", "Formatear el disco duro.", "Reiniciar el monitor.", "Actualizar la calculadora."], a: 0 },
        { s: "No detecta conexión USB.", o: ["Revisar cable USB y controladores.", "Cambiar cartuchos.", "Limpiar el escritorio.", "Actualizar Word."], a: 0 },
        { s: "Error de cola de impresión.", o: ["Reiniciar el servicio de impresión.", "Cambiar la batería.", "Actualizar Excel.", "Reiniciar el teclado."], a: 0 },
        { s: "Impresión con líneas o manchas.", o: ["Limpiar cabezales o tambor.", "Actualizar PowerPoint.", "Cambiar el monitor.", "Instalar antivirus."], a: 0 },
        { s: "Impresora fuera de línea.", o: ["Configurarla como impresora predeterminada y conectada.", "Cambiar el fondo de pantalla.", "Reiniciar el mouse.", "Actualizar Paint."], a: 0 }
    ],
    software: [
        { s: "Un programa no abre.", o: ["Reinstalar o reparar el programa.", "Cambiar el teclado.", "Reiniciar la impresora.", "Limpiar el monitor."], a: 0 },
        { s: "El sistema operativo se congela.", o: ["Revisar recursos del sistema y procesos activos.", "Cambiar el fondo de pantalla.", "Instalar una impresora.", "Actualizar la calculadora."], a: 0 },
        { s: "Aparecen mensajes de error frecuentes.", o: ["Revisar registros y actualizar el software.", "Cambiar el mouse.", "Reiniciar el monitor.", "Limpiar la pantalla."], a: 0 },
        { s: "Virus o malware detectado.", o: ["Ejecutar un análisis antivirus completo.", "Cambiar la impresora.", "Actualizar Excel.", "Reiniciar el teclado."], a: 0 },
        { s: "El software se cierra inesperadamente.", o: ["Actualizar o reinstalar la aplicación.", "Cambiar el fondo de pantalla.", "Instalar una cámara web.", "Limpiar el escritorio."], a: 0 },
        { s: "No se pueden abrir archivos.", o: ["Verificar compatibilidad y asociación de archivos.", "Cambiar la batería.", "Reiniciar el router.", "Actualizar Paint."], a: 0 },
        { s: "Actualización fallida.", o: ["Verificar conexión y espacio disponible.", "Cambiar el mouse.", "Limpiar el teclado.", "Instalar una impresora."], a: 0 },
        { s: "Navegador web muy lento.", o: ["Limpiar caché y extensiones innecesarias.", "Cambiar la fecha del sistema.", "Reiniciar el monitor.", "Actualizar calculadora."], a: 0 },
        { s: "Pantalla azul de Windows.", o: ["Revisar controladores y hardware relacionado.", "Cambiar el fondo de pantalla.", "Limpiar la impresora.", "Actualizar Word."], a: 0 },
        { s: "Problemas de licencia de software.", o: ["Activar correctamente la licencia o suscripción.", "Cambiar el teclado.", "Reiniciar el router.", "Instalar un protector de pantalla."], a: 0 }
    ]
};

// 3. COMBINAR AMBAS BASES DE DATOS (45 Casos)
const database = JSON.parse(JSON.stringify(originalCases)); // Clonar base original

for (const [category, problems] of Object.entries(userProblems)) {
    const mappedProblems = problems.map((p, index) => {
        return {
            id: `new_${category}_${index}`,
            symptom: p.s,
            tutorSteps: [
                "Paso 1: Analiza el reporte y enciende/inspecciona el equipo.",
                "Paso 2: Identifica en qué área recae la causa del fallo.",
                "Paso 3: Selecciona y aplica la reparación técnica correcta."
            ],
            correctDiag: `diag_new_${category}_${index}_${p.a}`,
            correctSol: `sol_new_${category}_${index}_${p.a}`,
            beepPattern: category === 'printer' || category === 'software' ? null : [1, 500, 200],
            beepText: category === 'printer' || category === 'software' ? "Ninguno" : "1 Pitido Corto (POST normal)",
            explanation: `Acción correctiva ejecutada: ${p.o[p.a]}`,
            actions: { power: "generic_error", inspect: "Equipo abierto. Se requiere evaluar el componente defectuoso o configuración." },
            animationType: "hardware_test",
            animationText: "⚙️ APLICANDO SOLUCIÓN Y PROBANDO...",
            diagnostics: p.o.map((opt, i) => ({ id: `diag_new_${category}_${index}_${i}`, text: `Hipótesis: Problema relacionado con ${opt.split(' ').slice(0, 3).join(' ')}...` })),
            solutions: p.o.map((opt, i) => ({ id: `sol_new_${category}_${index}_${i}`, text: opt }))
        };
    });
    // Agregar los nuevos a los originales
    database[category] = database[category].concat(mappedProblems);
}

// 4. SISTEMA DE PUNTUACIÓN PROGRESIVA (0% a 100%) - 45 Ejercicios
let solvedCases = new Set();
let totalCases = 45;

function updateProgressScore() {
    let percentage = Math.round((solvedCases.size / totalCases) * 100);
    document.getElementById("score-value").innerText = percentage + "%";
}

// 5. VARIABLES DE ESTADO Y REFERENCIAS
let currentCategory = "pc";
let currentCaseIndex = 0;
let activeCase = null;

let isPowered = false;
let isInspected = false;
let isDiagChecked = false;
let isResolved = false;

const selectArea = document.getElementById("area-select");
const elWorkspaceTitle = document.getElementById("workspace-title");
const elHardwareScreen = document.getElementById("hardware-screen");
const elScreenOutput = document.getElementById("screen-output");
const elInternalView = document.getElementById("internal-view");
const elAudioDescription = document.getElementById("audio-description");
const btnPlaySound = document.getElementById("btn-play-sound");
const elSymptomText = document.getElementById("symptom-text");
const elTutorStep = document.getElementById("tutor-step");
const elTutorFeedback = document.getElementById("tutor-feedback");
const elFeedbackBox = document.getElementById("feedback-box");
const elLedPower = document.getElementById("led-power");
const elLedStatus = document.getElementById("led-status");
const elBadgePower = document.getElementById("badge-power");
const elBadgeHardware = document.getElementById("badge-hardware");
const elBadgeDiag = document.getElementById("badge-diag");

const btnPower = document.getElementById("btn-power");
const btnInspect = document.getElementById("btn-inspect");
const btnDiagnose = document.getElementById("btn-diagnose");
const btnRepair = document.getElementById("btn-repair");
const btnNext = document.getElementById("btn-next");

let audioCtx = null;
function playMotherboardBeep(count, frequency, duration) {
    if (!count) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    let time = audioCtx.currentTime;
    for (let i = 0; i < count; i++) {
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = 'square'; 
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0.1, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + duration / 1000);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(time);
        osc.stop(time + duration / 1000);
        time += (duration / 1000) + 0.15; 
    }
}

// 6. INICIALIZACIÓN
window.onload = () => {
    updateProgressScore();
    selectArea.addEventListener("change", (e) => {
        currentCategory = e.target.value;
        currentCaseIndex = 0;
        loadCase();
    });
    btnPower.addEventListener("click", triggerPowerToggle);
    btnInspect.addEventListener("click", triggerInspectHardware);
    btnDiagnose.addEventListener("click", processDiagnosis);
    btnRepair.addEventListener("click", processRepair);
    btnNext.addEventListener("click", nextCase);
    btnPlaySound.addEventListener("click", () => {
        if (activeCase && activeCase.beepPattern) { playMotherboardBeep(...activeCase.beepPattern); }
    });
    loadCase();
};

function loadCase() {
    const list = database[currentCategory];
    activeCase = list[currentCaseIndex] || list[0]; 

    isPowered = false;
    isInspected = false;
    isDiagChecked = false;
    isResolved = false;

    elWorkspaceTitle.innerText = `Mesa: Práctica de ${currentCategory.toUpperCase()} (Ejercicio ${currentCaseIndex + 1}/${list.length})`;
    elSymptomText.innerText = activeCase.symptom;
    elTutorStep.innerText = activeCase.tutorSteps[0];
    
    if(solvedCases.has(activeCase.id)) {
        elTutorFeedback.innerText = "¡Ya has completado este ejercicio! Puedes repasarlo o avanzar al siguiente.";
        elFeedbackBox.className = "feedback-box feedback-success";
    } else {
        elTutorFeedback.innerText = "Dispositivo cargado. Comienza revisando su comportamiento físico.";
        elFeedbackBox.className = "feedback-box";
    }

    elHardwareScreen.className = "hardware-screen";
    elScreenOutput.innerText = "SISTEMA APAGADO";
    elInternalView.innerText = "Gabinete Cerrado / Sistema Inactivo";
    elAudioDescription.innerText = "Silencio";
    btnPlaySound.disabled = true;

    elLedPower.className = "led";
    elLedStatus.className = "led";

    btnPower.innerText = "Presionar Botón Encendido";
    btnPower.disabled = false;
    btnInspect.disabled = false;
    btnDiagnose.disabled = true;
    btnRepair.disabled = true;

    buildForms();
    refreshBadges();
}

function buildForms() {
    document.getElementById("diagnostic-options").innerHTML = activeCase.diagnostics.map(item => `
        <label class="radio-label"><input type="radio" name="diag_choice" value="${item.id}"> ${item.text}</label>
    `).join('');
    
    document.getElementById("solution-options").innerHTML = activeCase.solutions.map(item => `
        <label class="radio-label"><input type="radio" name="sol_choice" value="${item.id}" disabled> ${item.text}</label>
    `).join('');
    
    document.querySelectorAll('input[name="diag_choice"]').forEach(radio => {
        radio.addEventListener("change", () => { if (!isDiagChecked) btnDiagnose.disabled = false; });
    });
    document.querySelectorAll('input[name="sol_choice"]').forEach(radio => {
        radio.addEventListener("change", () => { if (isDiagChecked && !isResolved) btnRepair.disabled = false; });
    });
}

function triggerPowerToggle() {
    if (isResolved) return;
    if (!isPowered) {
        isPowered = true;
        btnPower.innerText = "Apagar Dispositivo";
        elLedPower.className = "led active";
        
        if (activeCase.beepPattern) {
            playMotherboardBeep(...activeCase.beepPattern);
            elAudioDescription.innerText = activeCase.beepText;
            btnPlaySound.disabled = false;
        }

        // Manejo de animaciones de pantalla dependiendo del caso
        switch (activeCase.actions.power) {
            case "beeping":
                elHardwareScreen.className = "hardware-screen";
                elScreenOutput.innerText = "[ERROR DE HARDWARE]\nNo se detecta señal de video.\nVerificar alertas sonoras.";
                break;
            case "thermal_die":
                elHardwareScreen.className = "hardware-screen on";
                elScreenOutput.innerText = "🔥 RENDIMIENTO CRÍTICO\nCargando GPU Core...\nTemperatura: 104°C";
                elLedStatus.className = "led active";
                break;
            case "bios_loop":
                elHardwareScreen.className = "hardware-screen on";
                elScreenOutput.innerText = "📂 UEFI BIOS UTILITY\n\n- No Bootable Device Found.\n- Almacenamiento NVMe: [Empty]";
                break;
            case "print_blank":
                elHardwareScreen.className = "hardware-screen white-screen";
                elScreenOutput.innerText = "📄 [IMPRESORA LÍNEA]\nEstatus: Imprimiendo prueba...\nResultado: Papel Blanco Vacío.";
                elLedStatus.className = "led active";
                break;
            case "soft_blocked":
                elHardwareScreen.className = "hardware-screen on";
                elScreenOutput.innerText = "🟥 Microsoft Word 365\n\nError: Cuenta corporativa suspendida.\nFunciones bloqueadas.";
                elLedStatus.className = "led active";
                break;
            case "generic_error":
                elHardwareScreen.className = "hardware-screen on";
                elScreenOutput.innerText = "⚠️ SISTEMA EN ESPERA\nRequiere atención técnica.\nAnalice los síntomas indicados.";
                elLedStatus.className = "led active";
                break;
        }
        if (!isInspected) elTutorStep.innerText = activeCase.tutorSteps[1];
    } else {
        isPowered = false;
        btnPower.innerText = "Presionar Botón Encendido";
        elHardwareScreen.className = "hardware-screen";
        elScreenOutput.innerText = "SISTEMA APAGADO";
        elLedPower.className = "led";
        elLedStatus.className = "led";
        elAudioDescription.innerText = "Silencio";
        btnPlaySound.disabled = true;
    }
    refreshBadges();
}

function triggerInspectHardware() {
    if (isResolved) return;
    isInspected = true;
    elInternalView.innerText = activeCase.actions.inspect;
    if (!isDiagChecked) elTutorStep.innerText = activeCase.tutorSteps[1];
    refreshBadges();
}

function processDiagnosis() {
    const selected = document.querySelector('input[name="diag_choice"]:checked');
    if (!selected) return;
    
    if (selected.value === activeCase.correctDiag) {
        isDiagChecked = true;
        setLog("🎯 ¡Buen enfoque! Has identificado el origen del problema.", true);
        elTutorStep.innerText = activeCase.tutorSteps[2];
        document.querySelectorAll('input[name="diag_choice"]').forEach(radio => radio.disabled = true);
        document.querySelectorAll('input[name="sol_choice"]').forEach(radio => radio.disabled = false);
        btnDiagnose.disabled = true;
    } else {
        setLog("❌ Ese diagnóstico no concuerda con el reporte. Analiza nuevamente.", false);
    }
    refreshBadges();
}

function processRepair() {
    const selected = document.querySelector('input[name="sol_choice"]:checked');
    if (!selected) return;

    if (selected.value === activeCase.correctSol) {
        isResolved = true;
        
        // Sumar al progreso acumulativo
        solvedCases.add(activeCase.id);
        updateProgressScore();

        setLog(`🎉 ¡Reparación ejecutada con éxito!\n\n${activeCase.explanation}`, true);
        elTutorStep.innerText = "Caso resuelto. Pasa al siguiente ejercicio técnico.";

        document.querySelectorAll('input[name="sol_choice"]').forEach(radio => radio.disabled = true);
        btnRepair.disabled = true;
        btnPower.disabled = true;
        btnInspect.disabled = true;

        // ANIMACIÓN DE BARRA DE CARGA
        elHardwareScreen.className = "hardware-screen on";
        elScreenOutput.innerHTML = `
            <div style="width: 100%; text-align: center;">
                <p style="margin-bottom: 10px; font-weight: bold;">${activeCase.animationText}</p>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="progress-fill"></div>
                </div>
                <p id="progress-percentage" style="font-size: 0.8rem;">0% completado</p>
            </div>
        `;

        let progreso = 0;
        const barra = document.getElementById("progress-fill");
        const porcentajeTexto = document.getElementById("progress-percentage");
        
        const intervalo = setInterval(() => {
            progreso += 5;
            if (barra) barra.style.width = progreso + "%";
            if (porcentajeTexto) porcentajeTexto.innerText = progreso + "% completado";
            
            if (progreso >= 100) {
                clearInterval(intervalo);
                elScreenOutput.innerText = "💻 DISPOSITIVO OPERATIVO\n\n[OK] Diagnóstico y reparación completados.\n[SISTEMA LISTO EN LÍNEA]";
                elInternalView.innerText = "Dispositivo reparado y ensamblado correctamente.";
                elLedPower.className = "led active";
                elLedStatus.className = "led";
            }
        }, 100);

    } else {
        setLog("❌ Esa solución es incorrecta. Piensa bien cuál resuelve el fallo identificado.", false);
    }
    refreshBadges();
}

function nextCase() {
    const list = database[currentCategory];
    currentCaseIndex++;
    if (currentCaseIndex >= list.length) currentCaseIndex = 0; 
    loadCase();
}

function setLog(message, variant) {
    elTutorFeedback.innerText = message;
    if (variant === true) elFeedbackBox.className = "feedback-box feedback-success";
    else if (variant === false) elFeedbackBox.className = "feedback-box feedback-error";
    else elFeedbackBox.className = "feedback-box";
}

function refreshBadges() {
    elBadgePower.innerText = isPowered ? "ON" : "OFF";
    elBadgePower.className = isPowered ? "badge badge-on" : "badge badge-off";
    elBadgeHardware.innerText = isInspected ? "ABIERTO" : "CERRADO";
    elBadgeHardware.className = isInspected ? "badge badge-on" : "badge";
    if (isResolved) { elBadgeDiag.innerText = "SOLUCIONADO"; elBadgeDiag.className = "badge badge-on"; }
    else if (isDiagChecked) { elBadgeDiag.innerText = "DIAGNOSTICADO"; elBadgeDiag.className = "badge badge-on"; }
    else { elBadgeDiag.innerText = "PENDIENTE"; elBadgeDiag.className = "badge badge-pending"; }
}