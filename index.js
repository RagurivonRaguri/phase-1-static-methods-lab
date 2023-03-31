class Formatter {
  constructor(word){
    this.word=word;
  }
  static capitalize(word){
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  }
  static sanitize(word){
    let sanitizedWord = word.replace(/[^a-zA-Z0-9\-\'\s]/g, '');
    return sanitizedWord;
  }
  static titleize(str) {
   
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = str.split(' ');

    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (!excludedWords.includes(word)) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
    }

    return words.join(' ');
  }
}
console.log(Formatter.titleize('hello, i am lincoln'));
