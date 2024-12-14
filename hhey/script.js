const textElement = document.getElementById('text');
const text = "这是要打字的文本";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);  // 调整速度
    }
}

typeWriter();
