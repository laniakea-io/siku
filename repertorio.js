const toml = require("toml");
const fs = require("fs");

fs.readFile("./repertorio.toml", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    parsed = toml.parse(data).source;
    sorted = parsed.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );

    sorted.forEach((song) => {
      if (song.img === undefined) {
        img = "";
      } else {
        img = `image::img/${song.img}[]`;
      }
      if (song.audio === undefined) {
        audio = "";
      } else {
        audio = `audio::audio/${song.audio}[]`;
      }
      if (song.lyrics === undefined) {
        lyrics = "";
      } else {
        lyrics = song.lyrics;
      }
      if (song.author === undefined) {
        author = "";
      } else {
        author = `${song.author} | `;
      }
      if (song.type === undefined) {
        type = "";
      } else {
        type = `Estilo: ${song.type}`;
      }

      let template = `
== ${song.name}\n
${author}${type}
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
