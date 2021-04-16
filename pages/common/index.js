import React, { Component } from 'react';
function Example() {
    React.useEffect(async () => {
      // we make a dynamic import for the QuillJS, as this component is not made to work on SSR
      const Quill = (await import("quill")).default;
      new Quill(document.querySelector('[data-toggle="quill"]'), {
        modules: {
          toolbar: [
            ["bold", "italic"],
            ["link", "blockquote", "code", "image"],
            [
              {
                list: "ordered",
              },
              {
                list: "bullet",
              },
            ],
          ],
        },
        placeholder: "Quill WYSIWYG",
        theme: "snow",
      });
    }, []);
    return (
      <>
        <div
          data-quill-placeholder="Quill WYSIWYG"
          data-toggle="quill"
        />
      </>
    );
  }
  
export default Example;