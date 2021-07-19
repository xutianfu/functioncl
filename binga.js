function cal(amount) {
if (amount >=50 && amount < 100) {
return amount-50;
} else if (amount >100){
return (2*(amount-100) + 50);
}
return 0;
}

class trans {
constructor(amount) {
this.amount = amount;
this.prize = cal(amount);
this.tdate = new Date();
}
}

class transList {
constructor() {
this.list = [];
}

getLastList() {
var T = new Date();
const D = T.setMonth(T.getMonth() - 3);
let f = this.list.filter(trans => trans.tdate > D);
return f.sort((a,b) => b.tdate - a.tdate);
}

getAlltrans() {
return this.list.sort((a,b) => b.tdate-a.tdate);
}

addtrans(amount) {
const trans = new trans(amount);
this.list.push(trans);
}

getNetprize() {
return this.list.l ? this.list.reduce((acc,key)=>key.prize+acc, 0) : 0;
}

prizepermonth() {
let lastprizeInDesc = [];
for(let i=0; i<3; i++) {
let f = this.list.filter(trans => trans.tdate.getMonth() == (new Date).getMonth() - i );
lastprizeInDesc[i] = f.reduce((acc,key)=>key.prize+acc,0);
}
return lastprizeInDesc;
}
}

let Translist = new transList();
Translist.addtrans(104);
Translist.addtrans(23);
Translist.addtrans(378);
Translist.addtrans(37);
Translist.addtrans(340);
let array = Translist.getAlltrans();
