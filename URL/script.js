let url = new URL("http://localhost:63342/URL/index.html?_ijt=jvq04d7e94ne24uim9gt92jpvb&_ij_reload=RELOAD_ON_SAVE");

document.getElementById("link").textContent = url.toString();

let protocol = url.protocol;

let leftPath = url.toString().split('.')[0];
let rightPath = url.toString().split('.')[1];

let fileName = leftPath.replace(/^.*[\\\/]/,'');
let fileExtension = rightPath.replace(/\?.*/,'');

document.getElementById("fileName").textContent = fileName;
document.getElementById("fileExtension").textContent = fileExtension;
document.getElementById("protocol").textContent = protocol;

params = {};
let paramsToPrint = "";

for (let [name, value] of url.searchParams) {
    params[name] = value;
    paramsToPrint += "[" + name +"="+ value + "] ";
}

document.getElementById("params").textContent = paramsToPrint;