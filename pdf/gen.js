const toml = require("toml");
const fs = require("fs");

fs.readFile("./repertorio.toml", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    toml.parse(data).source.forEach((song) => {
      if (song.img === undefined) {
        img = "";
      } else {
        img = `image::src/${song.img}[]`;
      }

      if (song.audio === undefined) {
        audio = "";
      } else {
        audio = `audio::src/${song.audio}[]`;
      }

      if (song.lyrics === undefined) {
        lyrics = "";
      } else {
        lyrics = song.lyrics;
      }

      let template = `
== ${song.name}\n
${song.author} | ${song.type}
[source]
----
${song.numerofonia}
----
${img}
${audio}
${lyrics}`;
      console.log(template);
    });
  }
});
