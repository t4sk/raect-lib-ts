import React from "react";
export function TestBitTypeScript(props) {
    const { foo, bar } = props;
    return (React.createElement("button", null,
        foo,
        " ",
        bar));
}
export default TestBitTypeScript;
