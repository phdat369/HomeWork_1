function showToast(type, message) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerText = message;
  document.getElementById("toast-container").appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
let btnSuccess = document.getElementsByClassName("success")[0];
let btnError = document.getElementsByClassName("error")[0];
let btnInfo = document.getElementsByClassName("info")[0];
let btnWarning = document.getElementsByClassName("warning")[0];
btnSuccess.onclick = () => {showToast("success" , "Thành công")};
btnError.onclick = () => {showToast("error" , "Lỗi")};
btnInfo.onclick =  () => {showToast("info" , "Thông tin")};
btnWarning.onclick = () => {showToast("warning" , "Cảnh báo")};
