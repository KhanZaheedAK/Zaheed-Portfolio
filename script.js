/* =========================
   CERTIFICATE TOGGLE
========================= */

const certificateToggle =
    document.getElementById("certificateToggle");

const extraCertificates =
    document.querySelectorAll(".extra-certificate");

let certificatesVisible = false;


certificateToggle.addEventListener("click", function () {

    certificatesVisible = !certificatesVisible;

    extraCertificates.forEach(function (certificate) {

        certificate.style.display =
            certificatesVisible ? "block" : "none";

    });

    certificateToggle.textContent =
        certificatesVisible
            ? "Show Less"
            : "View More Certificates";

});

/* =========================
   CERTIFICATE LIGHTBOX
========================= */

const certificateLightbox =
    document.getElementById("certificateLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeCertificate =
    document.getElementById("closeCertificate");

const certificateImages =
    document.querySelectorAll(".certificate-card img");


/* Open certificate */

certificateImages.forEach(function (image) {

    image.addEventListener("click", function () {

        certificateLightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});


/* Close button */

closeCertificate.addEventListener("click", function () {

    certificateLightbox.style.display = "none";

    document.body.style.overflow = "";

});


/* Close by clicking outside certificate */

certificateLightbox.addEventListener("click", function (event) {

    if (event.target === certificateLightbox) {

        certificateLightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});


/* Close with Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        certificateLightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});



// =========================
// VIEW MORE ROBOTICS
// =========================

const viewMoreBtn = document.getElementById("viewMoreRobotics");
const extraProjects = document.querySelectorAll(".extra-project");

viewMoreBtn.addEventListener("click", function () {

    extraProjects.forEach(project => {
        project.classList.toggle("show");
    });

    if (viewMoreBtn.innerText.includes("View More")) {
        viewMoreBtn.innerText = "Show Less ↑";
    } else {
        viewMoreBtn.innerText = "View More Projects ↓";
    }

});


// =========================
// ROBOTICS PROJECT DETAILS
// =========================

const roboticsProjectData = {

    "on-off-led": {
        title: "On/Off LED",
        icon: "💡",
        aim: "To make an ON/OFF switch using IC 555.",
        components: "Breadboard, Jumper Cables, IC 555, 1 kΩ Resistor, LED, Battery Cap, and Battery.",
        working: "The IC 555 is connected with the resistor and power supply to create an electronic switching circuit. The circuit controls the LED, allowing it to be switched ON and OFF.",
        result: "Successfully created an ON/OFF LED switching circuit using IC 555."
    },

    "blinking-led": {
        title: "Blinking LED",
        icon: "💡",
        aim: "To blink an LED using a capacitor.",
        components: "Breadboard, IC 555, Jumper Cables, 1 kΩ Resistor, LED, 100 µF Capacitor, Battery Cap, and Battery.",
        working: "The IC 555, resistor, and capacitor are connected to form a timing circuit. The capacitor charges and discharges repeatedly, causing the IC 555 to switch the LED ON and OFF continuously.",
        result: "Successfully created a blinking LED circuit using IC 555 and a capacitor."
    },

    "fading-light": {
        title: "Fading Light",
        icon: "✨",
        aim: "To control the power supply using a potentiometer.",
        components: "Breadboard, Potentiometer, Jumper Cables, 1 kΩ Resistor, LED, Battery Cap, and Battery.",
        working: "The potentiometer is used to vary the electrical supply to the LED. By adjusting the potentiometer, the brightness of the LED can be controlled gradually.",
        result: "Successfully created a circuit to control LED brightness using a potentiometer."
    },

    "automatic-lamp": {
        title: "Automatic Lamp",
        icon: "💡",
        aim: "To make an automatic lamp using an LDR.",
        components: "Breadboard, BC547 Transistor, 220 kΩ Resistor, LDR, LED, Battery Cap, and Battery.",
        working: "The LDR senses the surrounding light level and changes its electrical resistance accordingly. This controls the BC547 transistor, allowing the LED to switch automatically according to the surrounding light conditions.",
        result: "Successfully created an automatic lamp circuit using an LDR and BC547 transistor."
    },

    "electronic-dice": {
        title: "Electronic Dice",
        icon: "🎲",
        aim: "To make an electronic dice for playing games.",
        components: "Breadboard, IC 4017, jumper cables, LEDs, battery cap, and battery.",
        working: "The IC 4017 controls the LEDs in a sequence to represent different dice numbers. The LEDs light up in different combinations to display the dice values.",
        result: "Successfully created an electronic dice circuit for playing games."
    },

    "flip-flop-led": {
        title: "Flip-Flop LED",
        icon: "🔄",
        aim: "To make a flip-flop LED circuit using BC547 transistors.",
        components: "Breadboard, BC547 transistors, jumper cables, 100 µF capacitor, 33 kΩ resistor, 220 Ω resistor, 470 Ω resistor, LEDs, battery cap, and battery.",
        working: "The BC547 transistors and capacitors form a flip-flop switching circuit. The circuit alternates the switching of the LEDs, creating a repeating ON/OFF effect.",
        result: "Successfully created a flip-flop LED circuit using BC547 transistors."
    },

    "blinking-multiple": {
        title: "Blinking Multiple LEDs",
        icon: "🔆",
        aim: "To blink multiple LEDs using IC 555.",
        components: "Breadboard, IC 555, jumper cables, 10 µF capacitor, 33 kΩ resistor, 220 Ω resistors, LEDs, battery cap, and battery.",
        working: "The IC 555 generates a continuous switching signal. This signal controls the connected LEDs, making multiple LEDs blink repeatedly.",
        result: "Successfully created a multiple LED blinking circuit using IC 555."
    },

    "water-level": {
        title: "Water Level Indicator",
        icon: "💧",
        aim: "To get an alert when the water level reaches the overflow level.",
        components: "Breadboard, BC547 transistor, LED, 330 Ω resistor, jumper cables, buzzer, battery cap, and battery.",
        working: "The circuit uses the BC547 transistor to detect the presence of water at the specified level. When the water reaches the detection point, the circuit activates the LED and buzzer to provide an alert.",
        result: "Successfully created a water level indicator circuit to alert about water overflow."
    },

    "chasing-led": {
        title: "Chasing LED",
        icon: "🏃",
        aim: "To blink multiple LEDs in sequence.",
        components: "Breadboard, IC 555, IC 4017, 1 kΩ resistor, 470 kΩ resistor, 10 µF capacitor, jumper cables, LEDs, battery cap, and battery.",
        working: "The IC 555 generates clock pulses that are sent to the IC 4017. The IC 4017 activates the connected LEDs one after another, creating a continuous chasing sequence.",
        result: "Successfully created a chasing LED circuit in which multiple LEDs blink in sequence."
    },

    "clap-switch": {
        title: "Clap Switch",
        icon: "👏",
        aim: "To make an LED glow by clapping your hands.",
        components: "Breadboard, IC 555, BC547 transistor, 47 kΩ resistor, 1 kΩ resistor, 100 kΩ resistor, 10 µF capacitor, microphone, jumper cables, LED, battery cap, and battery.",
        working: "The microphone detects the sound of a clap and sends a signal to the IC 555 circuit. The signal activates the BC547 transistor, which switches the connected LED ON.",
        result: "Successfully created a clap-activated switching circuit that turns the LED ON when a clap is detected."
    },

    "wired-car": {
        title: "Wired Remote-Control Car",
        icon: "🚗",
        aim: "To make a wired remote-controlled car with directional movement.",
        components: "Breadboard, DPDT box, chassis, caster wheel, connector, DPDT switch, motors, rainbow wires, wheels, battery cap, and battery.",
        working: "The DPDT switches control the direction and movement of the motors through wired connections. The motors drive the wheels, allowing the car to move in different directions.",
        result: "Successfully built a wired remote-controlled car with directional movement."
    },

    "ir-sensor": {
        title: "IR Sensor Circuit",
        icon: "📡",
        aim: "To turn an LED ON and OFF using an IR sensor.",
        components: "Breadboard, IR sensor, LED, jumper cables, battery cap, and battery.",
        working: "The IR sensor detects an object placed in front of it and sends a signal to control the LED. Based on the sensor's detection, the LED switches between the ON and OFF states.",
        result: "Successfully created an IR sensor circuit to control an LED."
    },

    "gas-detection": {
        title: "Gas Detection Circuit",
        icon: "🔥",
        aim: "To detect gas using an MQ-2 sensor.",
        components: "Breadboard, MQ-2 sensor, buzzer, jumper cables, battery cap, and battery.",
        working: "The MQ-2 sensor detects the presence of certain gases in the surrounding environment. When gas is detected, the sensor triggers the buzzer to provide an alert.",
        result: "Successfully created a gas detection circuit using an MQ-2 sensor."
    },

    "number-display": {
        title: "Number Indicator Display",
        icon: "🔢",
        aim: "To indicate a number using a 7-segment display.",
        components: "Breadboard, 1 kΩ resistor, 7-segment display, jumper cables, battery cap, and battery.",
        working: "The 7-segment display is connected with the resistor and power supply to illuminate the required segments. By controlling the appropriate segments, a number can be displayed.",
        result: "Successfully created a number indicator circuit using a 7-segment display."
    },

    "raindrop": {
        title: "Raindrop Sensor",
        icon: "🌧️",
        aim: "To detect raindrops and provide an alert using a rain sensor.",
        components: "Breadboard, IC 555, resistive rain sensor module, BC547 transistor, buzzer, 10 µF capacitor, 470 Ω resistor, 1 kΩ resistor, 4.7 kΩ resistor, 100 kΩ resistor, battery cap, and battery.",
        working: "The rain sensor detects the presence of water on its sensing surface and sends a signal to the circuit. The IC 555 and BC547 transistor process the signal and activate the buzzer when raindrops are detected.",
        result: "Successfully created a raindrop detection circuit that provides an audible alert when rain is detected."
    },

    "street-lighting": {
        title: "Street Lighting System",
        icon: "💡",
        aim: "To make a street lighting system using LEDs and switches.",
        components: "Breadboard, LEDs, switches, resistors, jumper cables, battery cap, and battery.",
        working: "The LEDs are connected to the circuit through resistors and switches. The switches control the LEDs, allowing the street lights to be turned ON and OFF.",
        result: "Successfully created a basic street lighting system using LEDs and switches."
    },

    "home-supply": {
        title: "Home Supply System",
        icon: "🏠",
        aim: "To demonstrate a basic home supply system using electrical components.",
        components: "Breadboard, jumper cables, switch, push switch, buzzer, LED, resistor, motor, propeller, battery cap, and battery.",
        working: "The switches and push switch are used to control different components in the circuit. Depending on the switch operation, the LED, buzzer, or motor can be activated, demonstrating the basic control of electrical appliances.",
        result: "Successfully created a basic home supply system demonstrating the control of different electrical components."
    },

    "disco-light": {
        title: "Multicolor Flashing Disco Light Show",
        icon: "🌈",
        aim: "To create a multicolor flashing disco light using LEDs.",
        components: "Breadboard, jumper cables, resistors, multicolor flashing LED, slide switch, normal LED, battery cap, and battery.",
        working: "The multicolor flashing LED produces changing light patterns when the circuit is powered. The slide switch controls the circuit, while the normal LED adds to the lighting effect.",
        result: "Successfully created a multicolor flashing disco light circuit."
    },

    "solar-light": {
        title: "Solar Light",
        icon: "☀️",
        aim: "To make a solar-powered LED light using a solar panel.",
        components: "Breadboard, jumper cables, resistor, LED, and solar panel.",
        working: "The solar panel converts sunlight into electrical energy, which powers the LED through the connected circuit and resistor.",
        result: "Successfully created a basic solar-powered LED lighting circuit."
    },

    "solar-fan": {
        title: "Solar Fan",
        icon: "☀️",
        aim: "To make a solar-powered fan using a solar panel.",
        components: "Breadboard, jumper cables, motor, propeller, and solar panel.",
        working: "The solar panel converts sunlight into electrical energy and supplies power to the motor. The motor rotates the propeller, producing airflow.",
        result: "Successfully created a solar-powered fan."
    },

    "solar-alarm": {
        title: "Solar Alarm",
        icon: "🔔",
        aim: "To make a solar-powered alarm using a solar panel.",
        components: "Breadboard, jumper cables, buzzer, and solar panel.",
        working: "The solar panel converts sunlight into electrical energy to power the circuit. The buzzer produces an audible alert when the circuit is activated.",
        result: "Successfully created a solar-powered alarm."
    }

};


// =========================
// PROJECT MODAL ELEMENTS
// =========================

const projectModal =
    document.getElementById("projectDetailsModal");

const closeProjectModal =
    document.getElementById("closeProjectModal");

const modalProjectIcon =
    document.getElementById("modalProjectIcon");

const modalProjectTitle =
    document.getElementById("modalProjectTitle");

const modalProjectAim =
    document.getElementById("modalProjectAim");

const modalProjectComponents =
    document.getElementById("modalProjectComponents");

const modalProjectWorking =
    document.getElementById("modalProjectWorking");

const modalProjectResult =
    document.getElementById("modalProjectResult");


// =========================
// OPEN PROJECT DETAILS
// =========================

const projectCards =
    document.querySelectorAll(".project-detail-card");

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const projectId =
            card.getAttribute("data-project");

        const project =
            roboticsProjectData[projectId];

        if (!project) return;

        modalProjectIcon.textContent =
            project.icon;

        modalProjectTitle.textContent =
            project.title;

        modalProjectAim.textContent =
            project.aim;

        modalProjectComponents.textContent =
            project.components;

        modalProjectWorking.textContent =
            project.working;

        modalProjectResult.textContent =
            project.result;

        projectModal.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    });

});


// =========================
// CLOSE PROJECT MODAL
// =========================

closeProjectModal.addEventListener("click", function () {

    projectModal.style.display =
        "none";

    document.body.style.overflow =
        "";

});


// =========================
// CLOSE BY CLICKING OUTSIDE
// =========================

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.style.display =
            "none";

        document.body.style.overflow =
            "";

    }

});


// =========================
// CLOSE WITH ESCAPE KEY
// =========================

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        projectModal.style.display === "flex"
    ) {

        projectModal.style.display =
            "none";

        document.body.style.overflow =
            "";

    }

});

// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});