import "https://esm.run/@material/web/all.js";

window.onload = function() {
  document.getElementById('loadingScreen').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
  }, 300);
};

const infoButton = document.querySelector("#info-button");
const infoDialog = document.querySelector("#info-dialog");
const infoDialogOkButton = document.querySelector("#info-dialog-ok-button");

infoButton.addEventListener("click", () => {
  infoDialog.show();
});

infoDialogOkButton.addEventListener("click", () => {
  infoDialog.close();
});