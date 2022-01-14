const titleCase = (str: string) => {
  const [first, ...rest] = str;
  return [first.toUpperCase(), ...rest].join('');
};
export default titleCase;
