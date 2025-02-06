import styles from "./ReviewerBody.module.scss";
import Markdown from "marked-react";
import { useState, useRef, useEffect } from "react";

const defaultEditorValue = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://yt3.googleusercontent.com/zXnYYRilxiM4JnOSk_o5b0Okx4IiqASWAOsz-FZpcpvFD1cR2fhiUTKpgkmB-l6THSEkJOSXCts=s900-c-k-c0x00ffffff-no-rj)

`;

const ReviewerBody = () => {
    // const h1Regex = /^(?:#\s)(?:\w+)$/g;
    // const h2Regex = /^(?:##\s)(?:\w+)$/g;
    // const h3Regex = /^(?:###\s)(?:\w+)$/g;
    // const boldRegex = /(\*\*)[^\*]+\1/g;
    const [markupValue, setMarkupValue] = useState(defaultEditorValue)
    const change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkupValue(event.target.value);
    }

    return(
        <>
            <main id={styles['main']}>
                <div className={styles.codeContainer}>
                    <h1>Code Editor</h1>
                    <textarea id="editor" onChange={change} value={markupValue}></textarea>
                </div>
                <div className={styles.markupPreview}>
                    <h1>Preview</h1>
                    <div id="preview" className={styles.markup}>
                        <Markdown gfm={true} breaks={true}>{markupValue}</Markdown>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ReviewerBody;