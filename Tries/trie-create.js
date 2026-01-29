// implement Trie

class Trie {
  constructor() {
    this.root = new TrieNode(); // kyuki root emty hoga
  }
}

class TrieNode {
  constructor() {
    this.children = {}; // ye letter jo tree me add ho rhe hai
    this.isEndOfWord = false; // ye last me jo word bna wo hai
  }
}

TrieNode.prototype.insert = function (word) {
  let curr = this.root;

  for (let char of word) {
    if (!curr.children[char]) {
      curr.children[char] = {
        children: {},
        isEndOfWord: false,
      };
    }
    curr = curr.children[char];
  }

  curr.isEndOfWord = true;
};

TrieNode.prototype.search = function (word) {
  let curr = this.root;

  for (let char of word) {
    if (!curr.children[char]) {
      return false;
    }
    curr = curr.children[char];
  }
  return curr.isEndOfWord;
};

TrieNode.prototype.startsWith = function (prefix) {
  let curr = this.root;

  for (let char of prefix) {
    if (!curr.children[char]) {
      return false;
    }
    curr = curr.children[char];
  }
  return true;
};
