import marked from 'marked';

const editor: HTMLTextAreaElement = document.querySelector('.markdown-container__editor');
const preview: HTMLParagraphElement = document.querySelector('.markdown-container__preview');

function updatePreview(event: Event): void {
  preview.innerHTML = marked((<HTMLTextAreaElement>event.target).value);
}

editor.addEventListener('input', updatePreview);
