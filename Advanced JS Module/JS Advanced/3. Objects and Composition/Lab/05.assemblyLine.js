function createAssemblyLine() {
    
   return { 
    hasClima: (obj) => {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if(obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            } 
        }
    },

     hasAudio: (obj) => {
        obj.currentTrack = null;
        obj.nowPlaying = () => {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        };    
    },

   hasParktronic: (obj) => {
        obj.checkDistance = (distance) => {
            if(distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if(distance >= 0.1  && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if(distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log('');
            }
        };

    }
}
}

//Setup:
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

//Testing the hasClima decorator function:
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


//Tests the hasAudio decorator function:
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

//Tests the hasParktronic decorator function:
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

//All the changes in the object at the end:
console.table(myCar);