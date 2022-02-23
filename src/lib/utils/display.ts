const display = (
  traits: { attributes: Array<Array<{ label: string; value: string }>> },
  trait: string,
  value: string
) => {
  const attrs = traits.attributes[trait];
  if (attrs) {
    const attr = attrs.filter(({ value: val }) => val === value)[0];
    return attr && attr.label;
  }
  return value;
};
export default display;
