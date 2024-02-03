/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Method 1: Hash Map
var canConstruct = function (ransomNote, magazine) {
  const letterCount = new Map;
  magazine.split('').forEach(letter => {
    letterCount.set(letter, letterCount.has(letter)
      ? letterCount.get(letter) + 1
      : 1);
  })

  for (const note of ransomNote) {
    if (letterCount.get(note) === 0) {
      letterCount.delete(note);
    }
    if (letterCount.has(note)) {
      letterCount.set(note, letterCount.get(note) - 1);
    } else return false;
  }

  return true;
};

// Method 2: Counting the letters by array
var canConstruct = function(ransomNote, magazine) {
  const counter = new Array(26).fill(0);
  magazine.split('').forEach(letter => {
    counter[letter.charCodeAt() - 97]++;
  })

  ransomNote.split('').forEach(note => {
    counter[note.charCodeAt() - 97]--;
  })

  return Math.min(...counter) >= 0;
};