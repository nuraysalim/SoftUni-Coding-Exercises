function lab(input){
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;
  
    if  (3 <= h <= w <= 100) {
       let lefSpaceWithHall = h - 100;
       let desksPerRow = Math.trunc(lefSpaceWithHall / 70);
       let rows = Math.trunc(w / 120);
       const numberOfWorkSpaces = desksPerRow * rows - 3;
       console.log(numberOfWorkSpaces)
    }
 
}
lab(["8.4", "5.2"])