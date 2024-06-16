'use client'

import React, {useEffect, useRef} from "react";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import "highlight.js/styles/github-dark.css";
import styled from "styled-components";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

const CodeContainer = styled.code`
    &.hljs {
        padding: 16px 32px;
        margin: 16px 0;
    }

    border-top: 1px solid #494949;
    border-bottom: 1px solid #494949;
`

type CodeProps = {
  code: string
} & React.ComponentPropsWithoutRef<'pre'>

const Code: React.FC<CodeProps> = ({code, ...props}) => {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef && codeRef.current)
      hljs.highlightBlock(codeRef.current)
  }, [])

  return <pre {...props}>
      <CodeContainer ref={codeRef} className="language-typescript">
        {code.trim()}
      </CodeContainer>
    </pre>

}

export default Code
