const one = document.getElementById("1");
const two = document.getElementById("2"); 
const three = document.getElementById("3"); 
const four = document.getElementById("4"); 

function slideUp () {
    document.body.classList.add('transform');
}

one.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 1.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

two.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 2.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

three.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 3.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

four.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 4.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})


const onePDF = document.getElementById("1-part");
const twoPDF = document.getElementById("2-part");
const threePDF = document.getElementById("3-part");
const fourPDF = document.getElementById("4-part");

onePDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 1.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

twoPDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 2.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

threePDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 3.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})

fourPDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 4.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
})