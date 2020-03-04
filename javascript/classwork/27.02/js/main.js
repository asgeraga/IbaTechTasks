const circle = document.createElement('div');
circle.classList.add('circle');
document.querySelector('script').before(circle);

let cursorX = 0,
  cursorY = 0,
  circleX = circle.offsetLeft,
  circleY = circle.offsetTop;

document.addEventListener('mousemove', e => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  console.log("cursorX - ", cursorX, "\ncursorY - ", cursorY);
  console.log("circleX - ", circleX, "\ncircleY - ", circleY);
});
debugger
setInterval(() => {
  const circleStartX = circleX,
    circleEndX = circleX + circle.offsetWidth,
    circleStartY = circleY,
    circleEndY = circleY + circle.offsetHeight,
    isCursorInCircleWidth = cursorX >= circleStartX && cursorX <= circleEndX,
    isCursorInCircleHeight = cursorY >= circleStartY && cursorY <= circleEndY;

    
  const gameOver = document.querySelector('h1')
    || document.createElement('h1');

  if (isCursorInCircleWidth && isCursorInCircleHeight) {
    gameOver.innerText = 'GAME OVER!!!!!';
    document.querySelector('script').before(gameOver);
  } else {
    gameOver.remove();
  }
}, 50);

const followedCircle = function followingCircle(){

}
