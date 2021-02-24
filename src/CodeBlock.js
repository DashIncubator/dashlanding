import React from "react";
import { atomOneLight, CopyBlock } from "react-code-blocks";

export default function CodeBlock({ code }) {
  return (
    <div style={{ fontSize: "13px" }}>
      <CopyBlock
        text={code}
        showLineNumbers={false}
        language={"javascript"}
        theme={atomOneLight}
        codeBlock
      />
    </div>
  );
}
