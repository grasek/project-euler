const calc = () => {
  let i = 1, str = "1";
  while (i < 1000000) i++, str = str.concat("", i.toString());
  return parseInt(str[0]) * parseInt(str[9]) * parseInt(str[99]) * parseInt(str[999]) * parseInt(str[9999]) * parseInt(str[99999]) * parseInt(str[999999]);
}
