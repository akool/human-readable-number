module.exports = function toReadable (number) {
  const map = { 
    0: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    1: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    2: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  };
  let numStr = number.toString();
  let res = '';

  if (numStr.length === 3) {
    res = `${map[0][numStr[0]]} hundred `;
    numStr = numStr.slice(1);
  }

  if (numStr === '00') {
    return res.trim();
  }
  
  if (numStr.length === 2) {
    if (numStr < 10) {
      res += map[0][numStr[1]];
    } else if (numStr < 20) {
      res += map[1][numStr[1]];
    } else {
      res += map[2][numStr[0]];
      numStr = numStr.slice(1);
    }
  }

  if (numStr === '0') {
    return res.length ? res : map[0][numStr];
  }

  if (numStr.length === 1) {
    res += ` ${map[0][numStr]}`;
  }

  return res.trim();
}