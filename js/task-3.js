function getElementWidth(content, padding, border) {
  function toNumber(value) {
    return parseFloat(value.replace("px", ""));
  }
  const contentWidth = toNumber(content);
  const paddingWidth = toNumber(padding);
  const borderWidth = toNumber(border);
  const total = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return total;
}
//console.log(getElementWidth("50px", "8px", "4px"));
