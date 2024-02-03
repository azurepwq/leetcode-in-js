/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Method 1
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
  
    const map = new Map();
  
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        if (map.get(s[i]) !== t[i]) return false;
      } else {
        map.set(s[i], t[i]);
      }
    }
  
    return new Set(map.values()).size === map.size;
  };

// Method 2
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  const s2t = new Map;
  const t2s = new Map;
  for (let i = 0; i < s.length; i++) {
    const [x, y] = [s[i], t[i]];
    if ((s2t.has(x) && s2t.get(x) !== y) || (t2s.has(y) && t2s.get(y) !== x)) {
      return false;
    }
    s2t.set(x, y);
    t2s.set(y, x);
  }
  return true;
};