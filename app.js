let input = document.querySelector('.input');
let typingTimer;
let text;
let regex = /<\/?span>/g;
const doneTypingInterval = 5000;
const myFunction = () => {
  input.focus();
  alert('hello');
};
const handleKeyUp = () => {
  text = input.innerHTML;
  console.log(text);
  if (regex.test(text)) {
    text = text.replace(regex, '');
  }
  console.log(text);
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => doneTyping(text), doneTypingInterval);
};
const handleKeyDown = () => {
  clearTimeout(typingTimer);
};
function doneTyping(val) {
  console.log('bye');
  let array = val.split(' ');

  let newArray = array.map((item, index) => {
    if (index % 2 !== 0) {
      return `<span>${item}</span>`;
    }
    return item;
  });

  let result = newArray.join(' ');
  input.innerHTML = result;
}
