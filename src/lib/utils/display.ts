const display = (
  traits: { attributes: Array<Array<{ label: string; value: string }>> },
  trait: string,
  value: string
) => {
  const attr = traits.attributes[trait].filter(({ value: val }) => val === value)[0];
  return attr && attr.label;
};
export default display;
