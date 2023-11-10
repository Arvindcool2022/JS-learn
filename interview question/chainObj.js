const calc = {
  total: 0,
  add(num) {
    this.total = num + this.total;
    return this;
  },
  subtract(num) {
    this.total = this.total - num;
    return this;
  },
  mutiply(num) {
    this.total = num * this.total;
    return this;
  }
};

const result = calc.add(10).mutiply(5).subtract(30).add(10);

console.log(result.total);
