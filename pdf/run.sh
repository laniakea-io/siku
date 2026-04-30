bun run ./gen.js > ./body.adoc
cat header.adoc body.adoc > gen.adoc
asciidoctor-pdf -r asciidoctor-mathematical -o gen.pdf gen.adoc