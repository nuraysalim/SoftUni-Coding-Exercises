function housePainting(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);
    const rectangularDoor = 1.2 * 2;
    const windows = 2 * (1.5 * 1.5);

    const frontAndBackWalls = 2 * (x * x) - rectangularDoor;
    const sideWalls = 2 * (x * y) - windows;
    const Walls = frontAndBackWalls + sideWalls;

    const rooftopSides = x * y * 2;
    const rooftopFrontAndBack = (x * h / 2) * 2;
    const roof = rooftopSides + rooftopFrontAndBack; 
    
    const greenPaint = (Walls / 3.4).toFixed(2);
    const redPaint = (roof / 4.3).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);
}
housePainting(["10.25", "15.45", "8.88"])