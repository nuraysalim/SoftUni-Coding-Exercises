function cone(radius, heigth) {
    const volume = 1/3*heigth*Math.PI*Math.pow(radius,2);
    const l = Math.sqrt(Math.pow(radius,2) + Math.pow(heigth,2));
    const totalSurfaceArea = Math.PI*Math.pow(radius,2) + Math.PI*radius*l; 
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5)
cone(3.3, 7.8)
