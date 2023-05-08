import { signOut } from "next-auth/client";

export const getOptions = data =>
  data.map(({ id, code, hospitalName, branchId, name }) => ({
    value: String(id) || code || branchId,
    text: name || hospitalName,
  }));

export const getOptionsAsync = async promise => {
  try {
    const response = await promise;
    const data = await response.json();

    return getOptions(data.docs || data);
  } catch {
    return [];
  }
};

export const arrayChunks = (array, chunk_size) =>
  Array(Math.ceil(array.length / chunk_size))
    .fill()
    .map((_, index) => index * chunk_size)
    .map(begin => array.slice(begin, begin + chunk_size));

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export const thousandify = (number, separator = '.') => {
  if (!number && number !== 0) return;
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
export function addModalWhenInactiveAccount(){
  const newDiv = document.createElement("div");
  const outlayOut = document.createElement("div");
  const button = document.createElement("button");
  newDiv.classList.add("modal-warning-signout")
  outlayOut.classList.add("layout-modal-warning-signout")
  button.textContent = 'OK'
  const newContent = document.createTextNode("Tài khoản của bạn đã bị khoá");
  newDiv.appendChild(newContent);
  newDiv.appendChild(button);
  const currentDiv = document.getElementById("div1");
  document.getElementsByTagName('body')[0].appendChild(outlayOut);
  document.body.insertBefore(newDiv, currentDiv);
  button.addEventListener("click",() => {
    signOut({ callbackUrl: '/' });
    newDiv.remove()
    outlayOut.remove()
  })
}
