const one = document.getElementById("1");
const two = document.getElementById("2"); 
const three = document.getElementById("3"); 
const four = document.getElementById("4"); 

function slideUp () {
    document.body.classList.add('transform');
}

const onePDF = document.getElementById("1-part");
const twoPDF = document.getElementById("2-part");
const threePDF = document.getElementById("3-part");
const fourPDF = document.getElementById("4-part");

one.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 1.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    onePDF.style.backgroundColor = `#b1e2a1`;
})

two.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 2.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    twoPDF.style.backgroundColor = `#b1e2a1`;
})

three.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 3.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    threePDF.style.backgroundColor = `#b1e2a1`;
})

four.addEventListener('click', () => {
    slideUp();
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 4.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    fourPDF.style.backgroundColor = `#b1e2a1`;
})

function clear () {
    onePDF.style.backgroundColor = `unset`;
    twoPDF.style.backgroundColor = `unset`;
    threePDF.style.backgroundColor = `unset`;
    fourPDF.style.backgroundColor = `unset`;
}

onePDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 1.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    clear();
    onePDF.style.backgroundColor = `#b1e2a1`;
})

twoPDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 2.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    clear();
    twoPDF.style.backgroundColor = `#b1e2a1`;
})

threePDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 3.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    clear();
    threePDF.style.backgroundColor = `#b1e2a1`;
})

fourPDF.addEventListener('click', () => {
    document.getElementById("PDFwrap").innerHTML = `<iframe src="pdf/Раздел 4.pdf" style="width: 100%;height: 100%;border: none;"></iframe>`;
    clear();
    fourPDF.style.backgroundColor = `#b1e2a1`;
})