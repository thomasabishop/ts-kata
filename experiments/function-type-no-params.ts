interface logger {
  (): void;
}

function higherOrder(subFunc: logger) {
  subFunc();
}

const pointlessLog = () => console.log('Pointless!');

higherOrder(pointlessLog);
