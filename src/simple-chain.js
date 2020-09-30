const CustomError = require("../extensions/custom-error");

const chainMaker = {
  head: null,
  tail: null,
  length: 0,

  Link: function(value, master) {
    this.master = master;
    this.value = "" + value;
    this.right = null;
    if (master.head === null) {
      master.head = this;
      master.tail = this;
      this.left = null;
    } else {
      this.left = master.tail;
      this.left.right = this;
      master.tail = this;
    }
    return this;
  },

  getLength() {
    return this.length;
  },
  addLink(value) {
    value = value === undefined ? " '( )' " : "" + value;
    this.length += 1;
    new (this.Link)(value, this);
    return this;
  },
  removeLink(position) {
    let pos = +position;
    if (!Number.isInteger((+position))) {
      this.head = null;
      this.tail = null;
      throw Error(`Invalid argument. Mast be an Integer: ${position}`);
    }
    if (this.length < pos || pos < 1) {
      this.head = null;
      this.tail = null;
      throw Error(`Invalid argument. None existent position: ${position}`);
    }

    let link = this.head;
    let i = 1;
    while (i < pos) {
      i++;
      link = link.right;
    }

    if (link.left && link.right) {
      link.left.right = link.right;
      link.right.left = link.left;
    } else if (!link.left && link.right) {
      link.right.left = null;
      link.master.head = link.right;
    } else if (link.left && !link.right) {
      link.left.right = null;
      link.master.tail = link.left;
    } else {
      link.master.head = null;
      link.master.tail = null;
    }
    link.master.length -= 1;
    link = null;

    return this;
  },
  reverseChain() {
    let link = this.head;
    while (link) {
      let oldLeft = link.left;
      let oldRight = link.right;
      link.left = oldRight;
      link.right = oldLeft;
      link = oldRight;
    }
    link = this.head;
    this.head = this.tail;
    this.tail = link;
    return this;
  },
  finishChain() {
    let chain = "";
    let link = this.head;
    while (link) {
      chain += `( ${link.value} )`;
      if (link.right) {
        chain += '~~';
      }
      link = link.right;
    }
    this.head = null;
    this.tail = null;
    return chain;
  }
};


module.exports = chainMaker;
