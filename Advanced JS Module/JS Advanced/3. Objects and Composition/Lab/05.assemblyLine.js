function createAssemblyLine() {
    
    function hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if(obj.temp < obj.tempSettings) {
                
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};