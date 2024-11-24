// Converts array of clases or expressions to string

export const cls = (...array: (string | false)[]) => {
  return array.filter((x) => typeof x === "string").join(" ");
};


// https://www.npmjs.com/package/classnames