function gramophone(bandName, albumName, songName) {
    const songDuration = (albumName.length * bandName.length) * songName.length / 2;
    const oneRotation = 2.5;
    let rotation = songDuration / oneRotation;
    
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')