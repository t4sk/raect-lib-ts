export function append<A>(arr: A[], x: A): A[] {
  arr.push(x);
  return arr;
}

// @ts-ignore
export function map(f) {
  // @ts-ignore
  return combine => (res, x) => combine(res, f(x));
}

// @ts-ignore
export function filter(f) {
  // @ts-ignore
  return combine => (res, x) => {
    if (f(x)) {
      return combine(res, x);
    }

    return res;
  };
}

// @ts-ignore
export function transduce(transform, combine, init, coll) {
  return coll.reduce(transform(combine), init);
}
