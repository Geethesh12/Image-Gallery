// Function to open the modal and display the clicked image
function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}

// Function to close the modal when clicked anywhere outside the image or on the close button
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
