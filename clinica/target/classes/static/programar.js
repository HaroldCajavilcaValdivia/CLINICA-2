const doctorsData = {
    "Medicina General": ["Dra. Elena Ramos", "Dr. Jorge Luis"],
    "Pediatría": ["Dra. Sofía Valdivia", "Dr. Mario Bros"],
    "Cardiología": ["Dr. Ricardo Palma", "Dra. Lucía Torres"],
    "Ginecología": ["Dra. Carmen Rosa", "Dr. Alberto Fujimori"],
    "Dermatología": ["Dr. Mateo King", "Dra. Sara Lee"]
};

const specialtySelect = document.getElementById('specialty');
const doctorSelect = document.getElementById('doctor');
const appointmentForm = document.getElementById('appointmentForm');
const confirmationMsg = document.getElementById('confirmation-msg');

if (specialtySelect && doctorSelect) {
    specialtySelect.addEventListener('change', function() {
        const doctors = doctorsData[this.value];
        doctorSelect.innerHTML = '<option value="">Seleccione médico...</option>';

        if (doctors) {
            doctorSelect.disabled = false;
            doctors.forEach(doc => {
                const option = document.createElement('option');
                option.text = doc;
                doctorSelect.add(option);
            });
        } else {
            doctorSelect.disabled = true;
            doctorSelect.innerHTML = '<option value="">Primero elija especialidad</option>';
        }
    });
}

if (appointmentForm && confirmationMsg) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const appointment = {
            specialty: specialtySelect.value,
            doctor: doctorSelect.value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            status: 'Pendiente'
        };

        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        confirmationMsg.style.display = 'block';
        appointmentForm.reset();
        doctorSelect.disabled = true;

        setTimeout(() => {
            confirmationMsg.style.display = 'none';
        }, 5000);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute('min', today);
    }
});