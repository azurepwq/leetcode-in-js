/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// Method 1
var wordPattern = function(pattern, s) {
  const string = s.split(' ');
  if (pattern.length !== string.length) return false;

  const pattern2S = new Map;
  const s2Pattern = new Map;


  for (let i = 0; i < pattern.length; i++) {
    const [x, y] = [pattern[i], string[i]];
    if (pattern2S.has(x) && pattern2S.get(x) !== y ||
    s2Pattern.has(y) && s2Pattern.get(y) !== x) return false;
    else {
      pattern2S.set(x, y);
      s2Pattern.set(y, x);
    }
  }

  return true;
};