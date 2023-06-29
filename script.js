// Datos de ejemplo para las habitaciones
const rooms = [
    { number: 101, status: 'available' },
    { number: 102, status: 'occupied' },
    { number: 103, status: 'available' },
  ];
  
  // Función para mostrar las habitaciones en la interfaz
  function displayRooms() {
    const roomItems = document.getElementById('roomItems');
    roomItems.innerHTML = '';
  
    rooms.forEach((room) => {
      const li = document.createElement('li');
      li.innerText = `Habitación ${room.number} - Estado: ${room.status}`;
      roomItems.appendChild(li);
    });
  }
  
  // Función para crear una reserva
  function createReservation() {
    const guestNameInput = document.getElementById('guestName');
    const roomNumberInput = document.getElementById('roomNumber');
  
    const guestName = guestNameInput.value;
    const roomNumber = roomNumberInput.value;
  
    // Realizar las operaciones correspondientes, como guardar en una base de datos o actualizar los datos en el servidor
  
    // Actualizar la interfaz mostrando las habitaciones actualizadas
    rooms.push({ number: roomNumber, status: 'occupied' });
    displayRooms();
  
    // Limpiar los campos del formulario
    guestNameInput.value = '';
    roomNumberInput.value = '';
  }
  
  // Event listener para el botón de crear reserva
  document.getElementById('createReservation').addEventListener('click', createReservation);
  
  // Mostrar las habitaciones al cargar la página
  displayRooms();
  