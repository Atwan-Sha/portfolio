* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.bg-wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 20px;
}
.bg-wrapper .bg-text {
  font-size: 25px;
  opacity: 0.05;
  position: absolute;
  z-index: -1;
  transform: translateZ(-20px) scale(2);
}
.bg-wrapper fg-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

body {
  color: rgb(204, 231, 239);
  background-color: rgb(28, 28, 28);
  font-family: "Roboto Mono", monospace;
}
body header {
  width: 1300px;
  height: 200px;
  margin: 0 auto;
  padding: 0 50px;
}
body header nav {
  width: auto;
  height: 50px;
  overflow: hidden;
  background-color: #333;
  display: inline-block;
  margin: 50px;
}
body header nav .sticky {
  position: sticky;
  top: 0px;
}
body header nav a {
  color: rgb(204, 231, 239);
  text-decoration: none;
  font-size: 30px;
}
body header nav a:hover {
  color: rgb(170, 117, 255);
}
body header nav .expand {
  list-style: none;
  display: none;
}
body header nav .expand li {
  display: inline;
  margin-left: 10px;
}
body header h1 {
  display: inline-block;
  vertical-align: top;
  font-size: 30px;
  margin: 50px 0 50px 0;
}
body #projects {
  max-width: 1300px;
  min-height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 100px 50px;
}
body #projects figure {
  width: 280px;
  height: 600px;
  margin: 0;
  padding: 10px;
}
body #projects figure h3 {
  text-align: center;
  font-size: 20px;
  padding: 10px;
}
body #projects figure .img-container {
  overflow: hidden;
  background-color: black;
  width: 250px;
  height: 250px;
  border-radius: 20px;
}
body #projects figure img {
  object-fit: cover;
  opacity: 0.8;
  transition: 1s;
}
body #projects figure figcaption {
  text-align: center;
  font-size: 20px;
  padding: 10px;
}
body #projects figure figcaption a {
  color: rgb(204, 231, 239);
  font-size: 20px;
}
body #projects figure figcaption a:hover {
  color: white;
}
body #projects figure:hover img {
  scale: 1.1;
  opacity: 1;
  transition: 1s;
}
body #about {
  max-width: 1000px;
  min-height: 800px;
  margin: 0 auto;
  padding: 100px 30px;
}
body #about h2 {
  color: white;
  font-size: 30px;
  margin-bottom: 50px;
}
body #about p {
  color: white;
  font-size: 30px;
  line-height: 1.5em;
}
body #tech {
  max-width: 1500px;
  height: 1000px;
  margin: 0 auto;
  padding: 100px 50px;
  font-size: 25px;
}
body #tech h2 {
  width: 750px;
  font-size: 30px;
  padding: 0 25px;
  margin: 70px auto;
}
body #tech .flex-container {
  margin: 0 auto;
  max-width: 750px;
  max-height: 500px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
}
body #tech .flex-container figure {
  text-align: center;
  width: 150px;
  height: 200px;
}
body #tech .flex-container figure a {
  text-decoration: none;
  color: rgb(204, 231, 239);
}
body #tech .flex-container figure img {
  width: 100px;
  height: auto;
}
body #tech .flex-container figure:hover img {
  background-color: rgb(64, 64, 64);
  transition: 500ms;
}
body footer {
  color: rgb(186, 186, 186);
  text-align: center;
  width: 1000px;
  height: 100px;
  margin: 0 auto;
}

/*# sourceMappingURL=style.cs.map */
