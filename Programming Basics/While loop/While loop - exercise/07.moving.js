function moving(input) {
  const width = Number(input[0]);
  const length = Number(input[1]);
  const height = Number(input[2]);
  let emptySpace = width * length * height;
  let index = 3;
  let command = input[index];
  index++;

  while (command !== "Done") {
    let boxes = Number(command);
    emptySpace -= boxes;
    if (emptySpace <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(emptySpace)} Cubic meters more.`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Done") {
    console.log(`${emptySpace} Cubic meters left.`);
  }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
;
