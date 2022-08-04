window.onload = () => {
  console.log('hello world');
  const highlight = document.createElement('span');
  highlight.class = 'highlight-ex';

  let typingTimer;
  let text;
  let regex = /<\/?span\s?(class="highlight-ex")?>/g;
  let regex1 = /\s+/g;
  const doneTypingInterval = 5000;
  window.onkeyup = () => {
    const parent = document.querySelector('.public-DraftStyleDefault-block');
    const child1 = parent.querySelector('span');
    const child2 = child1.querySelector('span');
    text = child2.innerHTML;
    console.log(text);
    if (regex.test(text)) {
      text = text.replace(regex, '');
    }
    console.log(text);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => doneTyping(text), doneTypingInterval);
    child2.onkeydown = () => {
      clearTimeout(typingTimer);
    };
    function doneTyping(val) {
      val = val.replace(regex1, ' ');
      let array = val.split(' ');

      let newArray = array.map((item, index) => {
        if (index % 2 !== 0) {
          return `<span class="highlight-ex">${item}</span>`;
        }
        return item;
      });
      let result = newArray.join(' ');
      child2.innerHTML = result;
      // document.querySelectorAll('.highlight-ex').style.backgroundColor = 'red';
    }
  };
};
{
  /* <div
  data-offset-key='af1b5-0-0'
  class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'
>
  <span data-offset-key='af1b5-0-0'>
    <span data-text='true'>mehdi sadf</span>
  </span>
</div>; */
}
