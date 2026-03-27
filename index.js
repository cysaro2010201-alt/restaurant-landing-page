const reserveBtn = document.getElementById("reserveBtn");
const modal = document.getElementById("reserveModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("reserveForm");
reserveBtn.onclick = () => {
  modal.style.display = "flex";
};
closeModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

form.onsubmit = (e) => {
  e.preventDefault();
  alert("✅ Your table has been reserved!");
  modal.style.display = "none";
  form.reset();
};