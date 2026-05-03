bun run ./repertorio.js > ./repertorio.adoc

# pdf mobile version
cat header-mobile.adoc repertorio.adoc > mobile.adoc # join header & repertorio
asciidoctor-pdf -r asciidoctor-mathematical -o mobile.pdf mobile.adoc

# web version
asciidoctor -o index.html cancionero.adoc
