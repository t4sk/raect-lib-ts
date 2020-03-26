export function notEmpty(str: string): boolean {
  return !!str.trim();
}

export function isInteger(x: string): boolean {
  const int = parseInt(x);

  return !isNaN(int) && int.toString() == x.toString();
}
