var inputArea = document.querySelector('.inputArea'),
    textArea = document.querySelector('.textArea');

inputArea.addEventListener('keyup', function() {
    textArea.value = this.value;
});

document.querySelector('.cleanBtn').addEventListener ('click', function(){
    inputArea.value = '';
    textArea.value = this.value;
});

