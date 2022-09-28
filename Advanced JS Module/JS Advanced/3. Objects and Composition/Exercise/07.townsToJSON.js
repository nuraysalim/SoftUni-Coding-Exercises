function townsToJSON(arr) {
    arr.shift();
    let res = [];

    for (const cityInfo of arr) {
        let [town, latitude, longitude] = cityInfo.split('|').filter(el => {
            if(el !== '') {
                return el;
            }
        });
       
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2)

        res.push({Town: town.trim(), Latitude: Number(latitude), Longitude: Number(longitude)});
    }

    console.log(JSON.stringify(res));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])