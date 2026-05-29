bun run ./repertorio.js > ./repertorio.adoc

# pdf mobile version
bun run ./mobile.js > ./content.adoc
cat header-mobile.adoc content.adoc > mobile.adoc # join header & repertorio
asciidoctor-pdf -r asciidoctor-mathematical -o mobile.pdf mobile.adoc

# web version
asciidoctor -o index.html cancionero.adoc
