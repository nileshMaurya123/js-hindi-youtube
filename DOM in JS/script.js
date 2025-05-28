console.log("hello");
alert("Welcome to coding");

console.dir(document.body.childNodes[1]);

const headings = document.getElementsByClassName("heading-class");
console.dir(headings);

document.querySelector("button").addEventListener("click", () => {
  [...headings].forEach((h) => {
    h.textContent = "DOM Updated!";
    Object.assign(h.style, { color: "blue", backgroundColor: "lightyellow" });
  });

  document.getElementById("heading").style.backgroundColor = "lightgreen";
});
