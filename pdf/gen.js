const toml = require("toml");
const fs = require("fs");

fs.readFile("./repertorio.toml", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    toml.parse(data).source.forEach((song) => {
      let template = `
== ${song.name}\n
${song.author} | ${song.type}
[source]
----
${song.numerofonia}
----
${song.lyrics}
`;
//image::src/${song.img}[]
//audio::src/${song.audio}[]\n
      console.log(template);
    });
  }
});
