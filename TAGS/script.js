source1 = new URL("https://www.w3schools.com/html/html_forms_attributes.asp");
source2 = new URL("https://learn.javascript.ru/object#tsikl-for-in");
source3 = new URL("https://angdev.ru/doc/angular-and-rxjs/");
source4 = new URL("https://material.angular.io/components/table/examples");
source5 = new URL("https://nodejsdev.ru/doc/rest-api/#rest-api_2");

document.getElementById("src1").textContent = source1.toString();
document.getElementById("src2").textContent = source2.toString();
document.getElementById("src3").textContent = source3.toString();
document.getElementById("src4").textContent = source4.toString();
document.getElementById("src5").textContent = source5.toString();

srcList = document.querySelectorAll("a");
document.getElementById("srcAmount").textContent = srcList.length.toString();

document.getElementById("innerHTML").innerHTML = source1;

picsList = document.querySelectorAll("img");
console.log(picsList);
document.getElementById("picsAmount").textContent = picsList.length.toString();

firstPic = document.getElementById("helicopter");
fpWidth = window.getComputedStyle(firstPic).width;


let picsWidth = 0;
let maxSize = 0.00;

for (let pic of picsList) {
    if(pic.width > maxSize){
        maxSize = pic.width;
        console.log(maxSize);
    }
    picsWidth += pic.height;
}

document.getElementById("dpWidth").textContent = `${fpWidth.toString()} и ${maxSize.toString()}px соответственно.`;

document.getElementById("picsWidth").textContent = `${picsWidth.toString()}px`;