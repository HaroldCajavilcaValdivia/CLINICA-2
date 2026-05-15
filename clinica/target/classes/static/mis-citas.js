function renderAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentsList = document.getElementById('appointmentsList');
    const noAppointmentsRow = document.getElementById('noAppointmentsRow');

    if (!appointmentsList) return;

    if (appointments.length === 0) {
        if (!noAppointmentsRow) {
            const emptyRow = document.createElement('tr');
            emptyRow.id = 'noAppointmentsRow';
            emptyRow.innerHTML = '<td colspan="6" class="text-center text-muted py-4">No tienes citas agendadas.</td>';
            appointmentsList.appendChild(emptyRow);
        }
        return;
    }

    appointmentsList.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.specialty}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td><span class="status-badge ${appointment.status === 'Confirmada' ? 'status-confirmed' : 'status-pending'}">${appointment.status}</span></td>
            <td><button class="btn btn-sm btn-outline-danger remove-appointment" data-index="${index}" type="button"><i class="fas fa-times"></i></button></td>
        `;
        appointmentsList.appendChild(row);
    });

    document.querySelectorAll('.remove-appointment').forEach(button => {
        button.addEventListener('click', function() {
            const index = Number(this.dataset.index);
            const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.splice(index, 1);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            renderAppointments();
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderAppointments();
});