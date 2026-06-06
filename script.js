/**
 * ECOSISTEMA DE FALLAS MULTI-DISPOSITIVOS CON ANIMACIÓN DE MONITOR (EDICIÓN INTERACTIVA 2026)
 */
const database = {
    pc: [
        {
            id: "pc_ram_dust",
            symptom: "El equipo gaming enciende, la refrigeración líquida se activa, pero la pantalla se queda en negro y la motherboard emite ráfagas de pitidos continuos sin dar video.",
            tutorSteps: ["Escucha el patrón de pitidos e intenta encender el PC.", "Inspecciona el chasis interno para ver el estado físico de los slots DDR5.", "Diagnostica y aplica el mantenimiento o cambio físico de la memoria."],
            correctDiag: "diag_pc_ram",
            correctSol: "sol_pc_ram",
            beepPattern: [3, 1000, 300], 
            beepText: "3 Pitidos Largos Continuos (Error de lectura de Memoria)",
            explanation: "Las placas modernas emiten códigos de audio específicos si la memoria RAM DDR5 tiene polvo o falsos contactos.",
            actions: { power: "beeping", inspect: "Filtro interno de la placa: El slot 2 tiene partículas de polvo obstruyendo los pines de la RAM." },
            animationType: "hardware_test",
            animationText: "⚙️ COMPROBANDO BANCOS RAM DDR5..."
        },
        {
            id: "pc_gpu_overheat",
            symptom: "El cliente indica que al abrir simuladores o juegos en 4K, la computadora se apaga por completo a los 2 minutos de uso intenso, arrojando un olor a plástico muy caliente.",
            tutorSteps: ["Enciende el PC para observar velocidades y temperaturas iniciales.", "Destapa el gabinete y revisa el flujo de los ventiladores de la GPU dedicada.", "Define la falla y realiza el mantenimiento correctivo térmico."],
            correctDiag: "diag_pc_gpu",
            correctSol: "sol_pc_gpu",
            beepPattern: null,
            beepText: "Ninguno - Silencio de protección térmica",
            explanation: "Las tarjetas de video de última generación cortan la energía si sus sensores detectan que exceden los 100°C por falla de ventilación interna.",
            actions: { power: "thermal_die", inspect: "Bloque GPU: Uno de los tres ventiladores de la tarjeta gráfica está atascado por un cable suelto de la fuente." },
            animationType: "cooling_test",
            animationText: "❄️ CALIBRANDO SENSORES DE TEMPERATURA Y VENTILADORES..."
        }
    ],
    laptop: [
        {
            id: "lap_nvme_fail",
            symptom: "Laptop ultrabook de última generación se cayó de la mesa de noche. Al encenderla, entra directo a la pantalla de configuración de UEFI/BIOS sin cargar el sistema operativo.",
            tutorSteps: ["Enciende la laptop y verifica la lista de dispositivos detectados por la BIOS.", "Retira la tapa inferior protectora de la laptop.", "Diagnostica la causa de la desconexión física de almacenamiento."],
            correctDiag: "diag_lap_nvme",
            correctSol: "sol_lap_nvme",
            beepPattern: null,
            beepText: "Silencio (Código visual de alerta en BIOS)",
            explanation: "Los impactos secos pueden desplazar los discos sólidos M.2 NVMe si no están correctamente atornillados a la motherboard.",
            actions: { power: "bios_loop", inspect: "Interior Laptop: El módulo SSD NVMe M.2 se ha deslizado parcialmente fuera de su ranura de conexión." },
            animationType: "hardware_test",
            animationText: "🔍 RE-ESCANEANDO PUERTOS PCI-E NVMe..."
        }
    ],
    printer: [
        {
            id: "print_thermal_faded",
            symptom: "Impresora térmica de punto de venta (recibos) saca los tickets completamente en blanco, a pesar de que los engranajes giran y el rodillo se mueve de forma correcta.",
            tutorSteps: ["Enciende la impresora y manda una página de autoprueba.", "Abre la compuerta de carga del papel térmico.", "Diagnostica el error del consumible o cabezal."],
            correctDiag: "diag_print_paper",
            correctSol: "sol_print_paper",
            beepPattern: [1, 400, 800], 
            beepText: "1 Pitido Grave (Alerta de alimentación de consumible)",
            explanation: "El papel térmico solo tiene una cara reactiva al calor. Si se inserta al revés, la impresión saldrá totalmente transparente.",
            actions: { power: "print_blank", inspect: "Compartimento de papel: El rollo térmico está posicionado al revés, alimentando el lado no químico directamente al cabezal." },
            animationType: "printer_test",
            animationText: "🖨️ ALINEANDO CABEZAL Y RE-IMPRIMIENDO TICKET..."
        }
    ],
    software: [
        {
            id: "soft_office_lic",
            symptom: "El usuario abrió un documento de Word y Excel del paquete ofimático empresarial, pero le aparece una barra roja que dice 'Acceso de lectura deshabilitado' y restringe la escritura.",
            tutorSteps: ["Enciende el equipo y lanza la aplicación afectada.", "Verifica el estado de la cuenta e inicio de sesión del usuario en el sistema.", "Diagnostica el bloqueo lógico y aplica la corrección de software."],
            correctDiag: "diag_soft_lic",
            correctSol: "sol_soft_lic",
            beepPattern: null,
            beepText: "Ninguno (Problema puramente lógico a nivel de software)",
            explanation: "Los paquetes de ofimática por suscripción congelan las funciones de edición si la licencia corporativa expira o la cuenta se desvincula.",
            actions: { power: "soft_blocked", inspect: "Entorno lógico de Software: El software indica 'Suscripción corporativa vencida o no asociada a este dominio de usuario'." },
            animationType: "software_install",
            animationText: "🛡️ COMPROBANDO LICENCIAS E INSTALANDO PAQUETE OFIMÁTICO..."
        }
    ]
};

const categoryMenus = {
    pc: {
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
    laptop: {
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
    },
    printer: {
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
    },
    software: {
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
};

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

let currentCategory = "pc";
let currentCaseIndex = 0;
let activeCase = null;
let score = 100;

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

window.onload = () => {
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
        if (activeCase && activeCase.beepPattern) {
            playMotherboardBeep(...activeCase.beepPattern);
        }
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

    elWorkspaceTitle.innerText = `Mesa: Soporte especializado de ${currentCategory.toUpperCase()}`;
    elSymptomText.innerText = activeCase.symptom;
    elTutorStep.innerText = activeCase.tutorSteps[0];
    elTutorFeedback.innerText = "Dispositivo cargado. Comienza revisando su comportamiento físico.";
    elFeedbackBox.className = "feedback-box";

    elHardwareScreen.className = "hardware-screen";
    elScreenOutput.innerText = "SISTEMA APAGADO";
    elInternalView.innerText = "Módulo / Gabinete Cerrado";
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
    const currentMenu = categoryMenus[currentCategory];
    document.getElementById("diagnostic-options").innerHTML = currentMenu.diagnostics.map(item => `
        <label class="radio-label"><input type="radio" name="diag_choice" value="${item.id}"> ${item.text}</label>
    `).join('');
    document.getElementById("solution-options").innerHTML = currentMenu.solutions.map(item => `
        <label class="radio-label"><input type="radio" name="sol_choice" value="${item.id}" disabled> ${item.text}</label>
    `).join('');
    document.getElementById("diagnostic-options").addEventListener("change", () => { if (!isDiagChecked) btnDiagnose.disabled = false; });
    document.getElementById("solution-options").addEventListener("change", () => { if (isDiagChecked && !isResolved) btnRepair.disabled = false; });
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
    if (!isDiagChecked) elTutorStep.innerText = activeCase.tutorSteps[2];
    refreshBadges();
}

function processDiagnosis() {
    const selected = document.querySelector('input[name="diag_choice"]:checked');
    if (!selected) return;
    if (selected.value === activeCase.correctDiag) {
        isDiagChecked = true;
        setLog("🎯 ¡Excelente deducción! Tu diagnóstico es 100% preciso.", true);
        elTutorStep.innerText = "Paso Final: Selecciona la contramedida adecuada e instálala.";
        document.querySelectorAll('input[name="diag_choice"]').forEach(radio => radio.disabled = true);
        document.querySelectorAll('input[name="sol_choice"]').forEach(radio => radio.disabled = false);
        btnDiagnose.disabled = true;
    } else {
        penalizeScore(15);
        setLog("❌ Diagnóstico incorrecto. Esa pieza no genera los síntomas descritos.", false);
    }
    refreshBadges();
}

// NUEVA ANIMACIÓN INTERACTIVA DIRECTO EN EL MONITOR VIRTUAL
function processRepair() {
    const selected = document.querySelector('input[name="sol_choice"]:checked');
    if (!selected) return;

    if (selected.value === activeCase.correctSol) {
        isResolved = true;
        addScore(20);
        setLog(`🎉 ¡Reparación ejecutada con éxito!\n\nFundamento Técnico: ${activeCase.explanation}`, true);
        elTutorStep.innerText = "Caso resuelto. Pasa al siguiente escenario.";

        // Congelar controles operativos inmediatamente
        document.querySelectorAll('input[name="sol_choice"]').forEach(radio => radio.disabled = true);
        btnRepair.disabled = true;
        btnPower.disabled = true;
        btnInspect.disabled = true;

        // INICIAR INTERFAZ DE ANIMACIÓN EN EL MONITOR VIRTUAL
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

        // Lógica de avance de la barra de progreso en milisegundos
        let progreso = 0;
        const barra = document.getElementById("progress-fill");
        const porcentajeTexto = document.getElementById("progress-percentage");
        
        const intervalo = setInterval(() => {
            progreso += 5;
            if (barra) barra.style.width = progreso + "%";
            if (porcentajeTexto) porcentajeTexto.innerText = progreso + "% completado";
            
            if (progreso >= 100) {
                clearInterval(intervalo);
                // Pantalla final del dispositivo completamente funcional
                elScreenOutput.innerText = "💻 DISPOSITIVO OPERATIVO\n\n[OK] Diagnóstico y reparación completados.\n[OK] Pruebas de estrés superadas.\n[SISTEMA LISTO EN LÍNEA]";
                elInternalView.innerText = "Dispositivo reparado, cerrado y ensamblado.";
                elLedPower.className = "led active";
                elLedStatus.className = "led";
            }
        }, 100); // 2 segundos totales de animación fluida

    } else {
        penalizeScore(20);
        setLog("❌ Esa acción no corrige la causa raíz de la avería.", false);
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

function penalizeScore(points) { score = Math.max(0, score - points); document.getElementById("score-value").innerText = score; }
function addScore(points) { score = Math.min(100, score + points); document.getElementById("score-value").innerText = score; }