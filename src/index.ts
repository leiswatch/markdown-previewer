import marked from 'marked';

const editor: HTMLTextAreaElement = document.querySelector('.markdown-container__editor');
const preview: HTMLParagraphElement = document.querySelector('.markdown-container__preview');
const initialEditorValue: string = `# h1
## h2
### h3
#### h4
`;

const updatePreview = (event: Event): void => {
  preview.innerHTML = marked((<HTMLTextAreaElement>event.target).value);
};

editor.addEventListener('input', updatePreview);

window.addEventListener('load', () => {
  editor.innerHTML = initialEditorValue;
  preview.innerHTML = marked(editor.innerHTML);
});
