const updateSoon = document.querySelector(".contain-solo-another-person");
const ntfUpdate = document.querySelector(".notification-update");
const closeNtf = document.querySelector(".notification-update>ion-icon");
export function updateGame() {
  updateSoon.addEventListener("click", function () {
    ntfUpdate.parentNode.classList.add("show-ntf");
    ntfUpdate.classList.add("show-notification");
    closeUpdateGame();
  });
}
function closeUpdateGame() {
  [closeNtf, ntfUpdate.parentNode].forEach((el) => {
    el.addEventListener("click", function () {
      ntfUpdate.parentNode.classList.remove("show-ntf");
      ntfUpdate.classList.remove("show-notification");
    });
  });
}
