import React, { Component, useState } from 'react';
var write=false;
function Example({onSet}) {
  const [flug,setFlug]=useState(0);
  const [outPut,setOutPut] =useState('');
  React.useEffect(async () => {
    if(flug===0){
    // we make a dynamic import for the QuillJS, as this component is not made to work on SSR
    const Quill = (await import("quill")).default;

    write = await new Quill(document.querySelector('[data-toggle="quill"]'), {
      modules: {
        toolbar: [
          [{ 'font': ["san","time-new"] }],
          ["bold", "italic"],
          [{ 'color': ["red","blue","black"] }],
          ["link", "blockquote", "code", "image", "font"],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
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
      placeholder: "Write your content  .....\nthanks!!!!!",
      theme: "snow",
    })
    setFlug(1);
  };
    }
  );
  console.log("s",onSet);
  return (
    <div style={{position:'relative'}}>
      <div className="post_input" 
      onClick={()=>{setOutPut(write.container.innerHTML)}}>
        Public
      </div>
      <div
        data-quill-placeholder="Write your content............."
        data-toggle="quill"
        style={{ width: '100%',
          height: 400,
          borderTop:'none',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          border: 'solid 1px #d1c7cc'}}
      />
      <div dangerouslySetInnerHTML={{ __html: outPut }} />
    </div>
  );
}

export default Example;