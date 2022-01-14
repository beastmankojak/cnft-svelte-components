const display = (
  traits: { attributes: Array<Array<{ label: string; value: string }>> },
  trait: string,
  value: string
) => traits.attributes[trait].filter(({ value: val }) => val === value)[0].label;
export default display;
