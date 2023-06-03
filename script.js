//your JS code here. If required.
function updateTextWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

updateTextWithPromise()
  .then((result) => {
    outputElement.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });
