import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

const Editor = ({ setContent, content }) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  if (Quill && !quill) {
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents, source) => {
        if (source === 'user') {
          const html = quill.root.innerHTML;
          setContent(html); // Update the content in the form
        }
      });
      quill.root.innerHTML = content; // Set initial content in the editor
    }
  }, [quill, Quill, content, setContent]);

  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
