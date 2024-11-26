const title = document.querySelector('.title');
const text = 'I have something for you sir'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`;
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Generate random delay between 0 to 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});
