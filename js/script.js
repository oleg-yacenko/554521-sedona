var modalElement = document.querySelector('#modal-search');

document.querySelector('#search-btn').addEventListener('click', function(event) {
  modalElement.classList.toggle('state-open');
})