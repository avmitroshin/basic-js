const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(machineType = true) {
    this.machineType = machineType;
    this.ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.CHAR_SHIFT = this.ALPHABET.charCodeAt(0);
  }

  encrypt(message_, key_) {
    if (message_ === undefined || key_ === undefined) throw Error("Invalid arguments. One or both are absent.");

    const message = this.machineType ? ("" + message_).toUpperCase() : ("" + message_).toUpperCase().split("").reverse().join("");;
    const key = (("" + key_).repeat(Math.ceil(message.length / key_.length)).substr(0, message.length)).toUpperCase();
    
    let encrypted = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.ALPHABET.includes(message[i])) {
        encrypted += this.ALPHABET[(message.charCodeAt(i) + key.charCodeAt(j++) - this.CHAR_SHIFT * 2) % 26];
      } else {
        encrypted += message[i];
      }
    }

    return encrypted;
  }

  decrypt(encrypted_, key_) {
    if (encrypted_ === undefined || key_ === undefined) throw Error("Invalid arguments. One or both are absent.");

    const encrypted = this.machineType ? ("" + encrypted_).toUpperCase() : ("" + encrypted_).toUpperCase().split("").reverse().join("");
    const key = (("" + key_).repeat(Math.ceil(encrypted.length / key_.length))).toUpperCase();
    let message = "";

    for (let i = 0, j = 0; i < encrypted.length; i++) {
      if (this.ALPHABET.includes(encrypted[i])) {
        message += this.ALPHABET[(encrypted.charCodeAt(i) - key.charCodeAt(j++) + this.ALPHABET.length) % 26];
      } else {
        message += encrypted[i];
      }
    }

    return message;
  }

}

module.exports = VigenereCipheringMachine;
