const search = document.querySelector("#search");
const result = document.querySelector("#result");
let URL = "https://www.google.com/search?hl=en&q=define+";

function handleSubmit(e) {
  e.preventDefault();
  let input = search.querySelector("input");
  let value = input.value;
  let url = URL + value;
  return [url, value];
}

function handleUrl(urlValue) {
  let anchor = document.createElement("a");
  anchor.href = urlValue[0];
  anchor.textContent = urlValue[1];
  result.appendChild(anchor);
}

search.addEventListener("submit", (e) => {
  let urlValue = handleSubmit(e);
  handleUrl(urlValue);
});
