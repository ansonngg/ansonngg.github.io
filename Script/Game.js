const godMode = false;
const gameTime = 60;
const skillBreakTime = 500;
const spinSpeed = 1;
const spinAccelTime = 3000;
const spinMaxTime = 5000;
const spinDecelTime = 2000;
const spinMoveSpeed = 0.6;
const spearInterval = 100;
const spearSpeed = 8;
const rifleInterval = 150;
const aoeInterval = 23;
const bulletTravelTime = 1000;

let navbar = document.getElementsByTagName('nav')[0];
let home = document.getElementById('home');
let timer = document.getElementsByClassName('timer')[0];
let enemy, notEnemy;
let time = gameTime - 1;
let attacking = false;
let start, previousTimeStamp;
let anim;
let enemyWidth, enemyHeight, enemyInitX, enemyInitY;
let bullet = "\u2588\u2588\u2588\u2588\u2588";
let bulletShot = false;
let bulletWidth, bulletHeight;
let skillRecord = [-1, -2];
let temp = [];
let spearRest = false;
let shootBullet;

let cursorX = -1;
let cursorY = -1;
document.onmousemove = function(event) {
	cursorX = event.pageX;
	cursorY = event.pageY;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function StartGame(event) {
  if (home.clientWidth < 1200 || home.clientHeight < 900) {
    return;
  }

  InitGame(event);
  let count = 2;
  let loop = setInterval(() => {
    if (count == 0) {
      timer.innerHTML = 'Start';
      GameLoop();
      clearInterval(loop);
    } else {
      timer.innerHTML = `${count--}`;
    }
  }, 1000);
}

function InitGame(event) {
  window.location.href = '#home';
  document.body.classList.add('stop-scrolling');

  navbar.classList.add('start-game');
  
  home.style.height = `${home.clientHeight - 6}px`;
  home.style.border = '3px solid #FFFFFF';
  home.style['border-radius'] = '10px';
  home.style.overflow = 'hidden';

  if (event.target.id == 'short-enemy') {
    enemy = document.getElementById('short-enemy');
    notEnemy = document.getElementById('long-enemy');
  } else {
    enemy = document.getElementById('long-enemy');
    notEnemy = document.getElementById('short-enemy');
  }
  
  enemy.classList.add('enemy');
  enemy.onclick = null;
  enemy.classList.remove('not-start-game');
  enemyWidth = enemy.clientWidth;
  enemyHeight = enemy.clientHeight;
  let rect = enemy.getBoundingClientRect();
  enemyInitX = rect.x;
  enemyInitY = rect.y;

  let bulletElem = document.createElement('div');
  bulletElem.innerHTML = bullet;
  bulletElem.classList.add('bullet');
  home.appendChild(bulletElem);
  bulletWidth = bulletElem.clientWidth;
  bulletHeight = bulletElem.clientHeight;
  home.removeChild(bulletElem);

  notEnemy.classList.add('not-enemy');
  notEnemy.classList.add('start-game');
  notEnemy.onclick = null;
  notEnemy.classList.remove('not-start-game');

  timer.style.visibility = 'visible';
}

function GameLoop() {
  enemy.style.transform = 'translate(0px, 0px) rotate(0deg)';
  let update, fixedUpdate;

  update = setInterval(() => {
    if (time == 0) {
      timer.innerHTML = 'Win';
      time = gameTime - 1;
      EndGame();
      clearInterval(update);
      clearInterval(fixedUpdate);
    } else {
      timer.innerHTML = `${time--}`;
    }
  }, 1000);

  fixedUpdate = setInterval(() => {
    let collidingElem = document.elementFromPoint(cursorX, cursorY);
    if (!godMode && (collidingElem.classList.contains('enemy') || collidingElem.classList.contains('bullet') || !home.matches(':hover'))) {
      timer.innerHTML = 'Lose';
      time = gameTime - 1;
      EndGame();
      clearInterval(update);
      clearInterval(fixedUpdate);
    } else if (!attacking) {
      attacking = true;
      if (enemy.id == 'short-enemy') {
        ChooseAttack(SpinAttack, RifleAttack);
      } else {
        ChooseAttack(SpearAttack, AOEAttack);
      }
    }
  }, 1);
}

async function EndGame() {
  cancelAnimationFrame(anim);
  clearInterval(shootBullet);
  attacking = false;
  start = undefined;
  previousTimeStamp = undefined;
  skillRecord = [-1, -2];
  bulletShot = false;
  spearRest = false;
  temp = [];

  requestAnimationFrame(EnemyEndGameAnim);
  navbar.classList.add('end-game');
  notEnemy.classList.add('end-game');
  document.body.classList.remove('stop-scrolling');

  await new Promise(r => setTimeout(r, 3000));

  navbar.classList.remove('start-game');
  navbar.classList.remove('end-game');

  home.style.height = '';
  home.style.border = '';
  home.style['border-radius'] = '';
  home.style.overflow = '';

  enemy.classList.remove('enemy');
  enemy.onclick = StartGame;
  enemy.classList.add('not-start-game');

  notEnemy.classList.remove('not-enemy');
  notEnemy.classList.remove('start-game');
  notEnemy.classList.remove('end-game');
  notEnemy.onclick = StartGame;
  notEnemy.classList.add('not-start-game');

  timer.style = null;
  timer.innerHTML = '3';
}

function SpinAttack(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timeStamp;
  }

  let elapsed = timeStamp - start;
  let diff = timeStamp - previousTimeStamp;
  let stats = enemy.style.transform.split(/[^\d\.-]+/);
  let xDiff = cursorX - (enemyInitX + Number(stats[1]) + enemyWidth / 2);
  let yDiff = cursorY - (enemyInitY + Number(stats[2]) + enemyHeight / 2);
  let magnitude = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

  if (elapsed < spinAccelTime) {
    let maxDist = diff * elapsed / spinAccelTime * spinMoveSpeed;
    if (magnitude > maxDist) {
      xDiff = maxDist * xDiff / magnitude;
      yDiff = maxDist * yDiff / magnitude;
    }
    let realSpinSpeed = elapsed / 3000 * spinSpeed;
    enemy.style.transform = `translate(${Number(stats[1]) + xDiff}px, ${Number(stats[2]) + yDiff}px) rotate(${(Number(stats[3]) + diff * realSpinSpeed) % 360}deg)`;
  } else if (elapsed < spinAccelTime + spinMaxTime) {
    let maxDist = diff * spinMoveSpeed;
    if (magnitude > maxDist) {
      xDiff = maxDist * xDiff / magnitude;
      yDiff = maxDist * yDiff / magnitude;
    }
    enemy.style.transform = `translate(${Number(stats[1]) + xDiff}px, ${Number(stats[2]) + yDiff}px) rotate(${(Number(stats[3]) + diff * spinSpeed) % 360}deg)`;
  } else if (elapsed < spinAccelTime + spinMaxTime + spinDecelTime) {
    let maxDist = diff * (spinAccelTime + spinMaxTime + spinDecelTime - elapsed) / spinDecelTime * spinMoveSpeed;
    if (magnitude > maxDist) {
      xDiff = maxDist * xDiff / magnitude;
      yDiff = maxDist * yDiff / magnitude;
    }
    let realSpinSpeed = (spinAccelTime + spinMaxTime + spinDecelTime - elapsed) / spinDecelTime * spinSpeed;
    enemy.style.transform = `translate(${Number(stats[1]) + xDiff}px, ${Number(stats[2]) + yDiff}px) rotate(${(Number(stats[3]) + diff * realSpinSpeed) % 360}deg)`;
  }
  
  if (elapsed < spinAccelTime + spinMaxTime + spinDecelTime + skillBreakTime) {
    previousTimeStamp = timeStamp;
    anim = requestAnimationFrame(SpinAttack);
  } else {
    attacking = false;
    start = undefined;
    previousTimeStamp = undefined;
  }
}

function RifleAttack(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timeStamp;
  }

  let elapsed = timeStamp - start;
  let diff = timeStamp - previousTimeStamp;

  if (elapsed < 28 * rifleInterval) {
    let stats = enemy.style.transform.split(/[^\d\.-]+/);
    if (Math.floor(elapsed / rifleInterval) % 4 == 0) {
      if (temp.length == 0) {
        temp.push((Math.atan2(cursorY - (enemyInitY + Number(stats[2]) + enemyHeight / 2), cursorX - (enemyInitX + Number(stats[1]) + enemyWidth / 2)) * 180 / Math.PI + 360) % 360);
        temp.push(temp[0] - Number(stats[3]));
        if (temp[1] >= 180) {
          temp[1] -= 360;
        } else if (temp[1] <= -180) {
          temp[1] += 360;
        }
        bulletShot = false;
      }
      enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${(Number(stats[3]) + temp[1] * diff / rifleInterval) % 360}deg)`;
    } else if (!bulletShot) {
      enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${temp[0]}deg)`;
      FireBullets(3);
      temp = [];
      bulletShot = true;
    }
  }

  if (elapsed < 28 * rifleInterval + skillBreakTime) {
    previousTimeStamp = timeStamp;
    anim = requestAnimationFrame(RifleAttack);
  } else {
    attacking = false;
    start = undefined;
    previousTimeStamp = undefined;
    temp = [];
    bulletShot = false;
  }
}

function SpearAttack(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timeStamp;
  }

  let elapsed = timeStamp - start;
  let diff = timeStamp - previousTimeStamp;

  if (elapsed < 20 * spearInterval) {
    let stats = enemy.style.transform.split(/[^\d\.-]+/);
    if (Math.floor(elapsed / spearInterval) % 4 == 0) {
      if (temp.length == 0) {
        temp.push((Math.atan2(cursorY - (enemyInitY + Number(stats[2]) + enemyHeight / 2), cursorX - (enemyInitX + Number(stats[1]) + enemyWidth / 2)) * 180 / Math.PI + 360) % 360);
        temp.push(temp[0] - Number(stats[3]));
        if (temp[1] >= 180) {
          temp[1] -= 360;
        } else if (temp[1] <= -180) {
          temp[1] += 360;
        }
        spearRest = false;
      }
      enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${(Number(stats[3]) + temp[1] * diff / spearInterval) % 360}deg)`;
    } else if (!spearRest && Math.floor(elapsed / spearInterval) % 4 == 1) {
      enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${temp[0]}deg)`;
      temp = [];
      spearRest = true;
    } else if (Math.floor(elapsed / spearInterval) % 4 == 2) {
      let resultX = Number(stats[1]) + diff * spearSpeed * Math.cos(Number(stats[3]) * Math.PI / 180);
      let resultY = Number(stats[2]) + diff * spearSpeed * Math.sin(Number(stats[3]) * Math.PI / 180);

      if (resultX < -enemyWidth / 2) {
        resultY -= (resultX + enemyWidth / 2) * Math.tan(Number(stats[3]) * Math.PI / 180);
        resultX = -enemyWidth / 2;
      } else if (resultX > home.clientWidth - enemyWidth / 2) {
        resultY -= (resultX - (home.clientWidth - enemyWidth / 2)) * Math.tan(Number(stats[3]) * Math.PI / 180);
        resultX = home.clientWidth - enemyWidth / 2;
      }

      if (resultY < -enemyInitY - enemyHeight / 2) {
        resultX -= (resultY - (-enemyInitY - enemyHeight / 2)) / Math.tan(Number(stats[3]) * Math.PI / 180);
        resultY = -enemyInitY - enemyHeight / 2;
      } else if (resultY > -enemyInitY + home.clientHeight - enemyHeight / 2) {
        resultX -= (resultY - (-enemyInitY + home.clientHeight - enemyHeight / 2)) / Math.tan(Number(stats[3]) * Math.PI / 180);
        resultY = -enemyInitY + home.clientHeight - enemyHeight / 2;
      }

      enemy.style.transform = `translate(${resultX}px, ${resultY}px) rotate(${stats[3]}deg)`;
    }
  }

  if (elapsed < 20 * spearInterval + skillBreakTime) {
    previousTimeStamp = timeStamp;
    anim = requestAnimationFrame(SpearAttack);
  } else {
    attacking = false;
    start = undefined;
    previousTimeStamp = undefined;
    temp = [];
    spearRest = false;
  }
}

function AOEAttack(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timeStamp;
  }

  let elapsed = timeStamp - start;
  let diff = timeStamp - previousTimeStamp;
  let stats = enemy.style.transform.split(/[^\d\.-]+/);

  if (elapsed < spinAccelTime) {
    let realSpinSpeed = elapsed / 3000 * spinSpeed;
    enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${(Number(stats[3]) + diff * realSpinSpeed) % 360}deg)`;
  } else if (elapsed < spinAccelTime + spinMaxTime) {
    enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${(Number(stats[3]) + diff * spinSpeed) % 360}deg)`;
    if (!bulletShot) {
      shootBullet = setInterval(() => {
        FireBullets(1);
      }, aoeInterval);
      bulletShot = true;
    }
  } else if (elapsed < spinAccelTime + spinMaxTime + spinDecelTime) {
    let realSpinSpeed = (spinAccelTime + spinMaxTime + spinDecelTime - elapsed) / spinDecelTime * spinSpeed;
    enemy.style.transform = `translate(${stats[1]}px, ${stats[2]}px) rotate(${(Number(stats[3]) + diff * realSpinSpeed) % 360}deg)`;
    if (bulletShot) {
      clearInterval(shootBullet);
      bulletShot = false;
    }
  }
  
  if (elapsed < spinAccelTime + spinMaxTime + spinDecelTime + skillBreakTime) {
    previousTimeStamp = timeStamp;
    anim = requestAnimationFrame(AOEAttack);
  } else {
    attacking = false;
    start = undefined;
    previousTimeStamp = undefined;
  }
}

async function FireBullets(num) {
  let stats = enemy.style.transform.split(/[^\d\.-]+/);
  let x1 = (bulletWidth - enemyWidth) / 2;
  let y1 = (bulletHeight - enemyHeight) / 2;
  let dist = Math.sqrt(y1 * y1 + enemyWidth * enemyWidth);
  let angle = Number(stats[3]) * Math.PI / 180 - Math.atan2(y1, enemyWidth);
  let x2 = dist * Math.cos(angle) - x1;
  let y2 = dist * Math.sin(angle) - y1;

  for (let i = 0; i < num; i++) {
    let bulletElem = document.createElement('div');
    bulletElem.innerHTML = bullet;
    bulletElem.classList.add('bullet');
    bulletElem.style.setProperty('--animTime', `${bulletTravelTime}ms`);
    bulletElem.style.setProperty('--angle', `${stats[3]}deg`);
    bulletElem.style.top = `${enemyInitY + Number(stats[2])}px`;
    bulletElem.style.left = `${enemyInitX + Number(stats[1])}px`;

    bulletElem.style.setProperty('--x1', `${x1}px`);
    bulletElem.style.setProperty('--y1', `${y1}px`);
    bulletElem.style.setProperty('--x2', `${x2}px`);
    bulletElem.style.setProperty('--y2', `${y2}px`);
    home.appendChild(bulletElem);

    let removeBullet = setInterval(() => {
      home.removeChild(bulletElem);
      clearInterval(removeBullet);
    }, bulletTravelTime);
    await new Promise(r => setTimeout(r, rifleInterval));
  }
}

function ChooseAttack(Attack0, Attack1) {
  if (skillRecord[0] == skillRecord[1]) {
    if (skillRecord[0] == 0) {
      skillRecord.shift();
      skillRecord.push(1);
      anim = requestAnimationFrame(Attack1);
    } else {
      skillRecord.shift();
      skillRecord.push(0);
      anim = requestAnimationFrame(Attack0);
    }
  } else {
    let randNum = Math.floor(Math.random() * 2);
    if (randNum == 0) {
      skillRecord.shift();
      skillRecord.push(0);
      anim = requestAnimationFrame(Attack0);
    } else {
      skillRecord.shift();
      skillRecord.push(1);
      anim = requestAnimationFrame(Attack1);
    }
  }
}

function EnemyEndGameAnim(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }

  let elapsed = timeStamp - start;
  if (temp.length == 0) {
    let stats = enemy.style.transform.split(/[^\d\.-]+/);
    temp.push(Number(stats[1]));
    temp.push(Number(stats[2]));
    temp.push(Number(stats[3]));
  }

  let resultX = temp[0] * (3000 - elapsed) / 3000;
  let resultY = temp[1] * (3000 - elapsed) / 3000;
  let resultZ;
  if (temp[2] < 180) {
    resultZ = temp[2] * (3000 - elapsed) / 3000;
  } else {
    resultZ = temp[2] + (360 - temp[2]) * elapsed / 3000;
  }
  
  enemy.style.transform = `translate(${resultX}px, ${resultY}px) rotate(${resultZ}deg)`;

  if (elapsed < 3000) {
    requestAnimationFrame(EnemyEndGameAnim);
  } else {
    start = undefined;
    temp = [];
    enemy.style.transform = '';
  }
}
