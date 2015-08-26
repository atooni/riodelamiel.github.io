# Web Site for riodelamiel.eu

This project hosts the content for the web site www.riodelmiel.eu. 
The [jekyll branch](https://github.com/riodelamiel/riodelamiel.github.io/tree/jekyll) contains the sources for the site 
while the [master branch](https://github.com/riodelamiel/riodelamiel.github.io/tree/master) contains the complete 
generated site. 

The page sources also support [asciidoc](http://asciidoctor.org/docs/what-is-asciidoc/) and therefore a travis job is 
required to generate the site's content after a push to the jekyll branch. 

The site uses bootstrap and the project is setup to support less rather than plain css. See the 
[travis file](https://github.com/riodelamiel/riodelamiel.github.io/blob/jekyll/.travis.yml) and the 
[build script](https://github.com/riodelamiel/riodelamiel.github.io/blob/jekyll/build.sh) for details of 
the page generation. 

