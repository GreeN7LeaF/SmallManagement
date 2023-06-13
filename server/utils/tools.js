const isNumberic = (num) => {
  if (typeof num != "string") return false; // we only process strings!
  return (
    !isNaN(num) && // use type corection to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(num))
  ); // ...and ensure strings of whitespace fail
};

const isValidEmail = (email) => {};

const isValidPhone = (phone) => {};

module.exports = { isNumberic };
