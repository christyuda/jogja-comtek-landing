function isColorDark(hex: string) {
  const c = hex.substring(1); // remove #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.299 * r + 0.587 * g + 0.114 * b; // luminance formula
  return luma < 128;
}
