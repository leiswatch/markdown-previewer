import marked from 'marked';

const editor: HTMLTextAreaElement = document.querySelector('.markdown-container__editor');
const preview: HTMLParagraphElement = document.querySelector('.markdown-container__preview');
const initialEditorValue: string = `# Header

## Subheader

### Code block
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`


This is \`inline code\`


1. ordered list
2. ordered list

* unordered list
* unordered list


- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this


*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

[GitHub](http://github.com)

![Image](https://static.scientificamerican.com/blogs/cache/file/BB6F1FE0-4FDE-4E6E-A986664CE30602E4_source.jpg?w=590&h=800&2F8476C1-DF14-49BA-84FFE94218CC4933)
`;

marked.setOptions({ breaks: true, gfm: true });

const updatePreview = (event: Event): void => {
  preview.innerHTML = marked((<HTMLTextAreaElement>event.target).value);
};

editor.addEventListener('input', updatePreview);

window.addEventListener('load', () => {
  editor.innerHTML = initialEditorValue;
  preview.innerHTML = marked(editor.innerHTML);
});
