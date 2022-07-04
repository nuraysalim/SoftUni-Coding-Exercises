 function radio(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numOfSongs = input.shift();
  let typeOfSong = input.pop();

  for (let i = 0; i < numOfSongs; i++) {
    let [typeList, name, time] = input[i].split("_");
    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (typeOfSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.typeList === typeOfSong);
    filtered.forEach((i) => console.log(i.name));
  }
}
radio([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
