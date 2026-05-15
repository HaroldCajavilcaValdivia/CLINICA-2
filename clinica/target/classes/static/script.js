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
        const appointmentsList = document.getElementById('appointmentsList');

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

        if (appointmentForm && confirmationMsg && appointmentsList) {
            appointmentForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${specialtySelect.value}</td>
                    <td>${doctorSelect.value}</td>
                    <td>${document.getElementById('date').value}</td>
                    <td>${document.getElementById('time').value}</td>
                    <td><span class="status-badge status-pending">Pendiente</span></td>
                    <td><button class="btn btn-sm btn-outline-danger" type="button" onclick="this.closest('tr').remove()"><i class="fas fa-times"></i></button></td>
                `;

                appointmentsList.appendChild(newRow);
                confirmationMsg.style.display = 'block';
                appointmentForm.reset();
                doctorSelect.disabled = true;

                setTimeout(() => {
                    confirmationMsg.style.display = 'none';
                }, 5000);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const today = new Date().toISOString().split('T')[0];
            const dateInput = document.getElementById('date');
            if (dateInput) {
                dateInput.setAttribute('min', today);
            }

            const splashScreen = document.getElementById('splashScreen');
            const mainContent = document.getElementById('mainContent');

            if (splashScreen && mainContent) {
                setTimeout(() => {
                    splashScreen.classList.add('d-none');
                    mainContent.classList.remove('d-none');
                }, 2000);
            }

            // Check for logged in user
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                const navbarNav = document.getElementById('navbarNav')?.querySelector('ul');
                if (navbarNav) {
                    const li = document.createElement('li');
                    li.className = 'nav-item ms-3';
                    li.innerHTML = `<span class="nav-link text-light">Bienvenido, ${currentUser.name} <a href="#" id="logout" class="text-warning">Cerrar Sesión</a></span>`;
                    navbarNav.appendChild(li);

                    document.getElementById('logout').addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.removeItem('currentUser');
                        location.reload();
                    });
                }
            }
        });