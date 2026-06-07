let length;
let width;
function calculateArea(){
    width=parseFloat(document.getElementById('width').value);
    length=ParseFloat(document.getElementById('length').value);
    let area=length*width;
    document.getElementById('result').innerText='The area of the rectangle is:${area}';
}