// nested
// labeled
lyuboy: for (let i = 0; i < 10; i++) {
  boshqa: for (let j = i; j < 10; j++) {
    if (j === 5) {
      continue lyuboy;
    } else if (j === 8) {
      break;
    }
    console.log(i, j);
  }
}
