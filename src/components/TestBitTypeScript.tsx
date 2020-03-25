import React from "react";

interface Props {
  foo: string;
  bar: number;
}

export function TestBitTypeScript(props: Props) {
  const { foo, bar } = props;

  return (
    <button>
      {foo} {bar}
    </button>
  );
}

export default TestBitTypeScript;
