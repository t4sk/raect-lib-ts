// export function compose<A, B, C>(g: (y: B) => C, f: (x: A) => B): (x: A) => C {
//   return x => g(f(x));
// }

export function compose<A>(...funcs: ((x: A) => A)[]): (x: A) => A {
  return (x: A) => {
    for (let i = funcs.length - 1; i >= 0; i--) {
      x = funcs[i](x);
    }
    return x;
  };
}

// @ts-ignore
export function get(val, keys, defaultVal?) {
  for (let key of keys) {
    if (val === undefined) {
      break;
    }
    val = val[key];
  }

  if (val === undefined) {
    return defaultVal;
  }

  return val;
}

export function getUnixTimeStamp(date: Date = new Date()): number {
  return Math.floor(date.getTime() / 1000);
}

export function timeout(ms: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
