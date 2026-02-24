class MathPendulum {
    constructor(length) {
        this.length = length;
    }

    length_create(length) {
        this.length = length;
    }



    period() {
        return 2 * 3.14 * (this.length / 9.8) ** 0.5;
    }

    get data() {
        // console.log(this.data);
        return this._data
    }

    set data(name) {
        this._data = 3 * name;
    }
}

pend = new MathPendulum(4.4);
pend.length = 3.3;
// pend.length_create(2.222);
console.log(pend.period());

pend.data = 5.5;
console.log(pend.data);
