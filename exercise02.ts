//1. check the add or even number
let _num: number = 25;
let _num1: number = 2;
console.log()

if (_num % 2 == 0) {
    console.log(`${_num} is: even`)
} else {
    console.log(`${_num} is: odd`)
}

if (_num1 % 2 != 0) {
    console.log(`${_num1} is: odd`)
} else {
    console.log(`${_num1} is: even`)
}


//2.prime number 
// prime number are the numbers has an only 2 factorrs ex= 13 = 13:13 and 13:1
const _factor: number = 7;
const _factor2: number = 6;

if (_factor / _factor == 1 && _factor / 1 == _factor && _factor % 2 != 0) {
    console.log(`${_factor} is a prime number`)
} else {
    console.log(`${_factor} not a prime number`)
}

if (_factor2 / _factor2 == 1 && _factor2 / 1 == _factor2 && _factor2 % 2 == 0) {
    console.log(`${_factor2} is not a prime number`)
} else {
    console.log(`${_factor2} is a prime number`)
}

//3. the sum of the numbers 1 to N 
let _N: number = 5       // the numbers
let _result: number = 0   // nilai awal untuk handle hasilnya
for (let i: number = 1; i <= _N; i++) {  //mengurutkan angka, dan keluarkan angkanya (i)
    console.log(i);
    _result = _result + _N         // i= berisi angka yg dipisah , setiap angka akan ditambahkan dengan _result
}
console.log(_result)





//4. find factorial of a number 
//nanti bertanya tentang ini 
let _numberFactorial: number = 4;
let _numberFactorial2: number = 6;
let _result2: number = 1;
let _result3: number = 1;   //result handler

for (let i: number = 1; i <= _numberFactorial; i++) {
    console.log(i);
    _result2 = _result2 * i  // 1 x 2 x 3 x 4  incremential operator formula
}
console.log(_result2)
console.log(_numberFactorial)

for (let i: number = 1; i <= _numberFactorial2; i++) {
    console.log(i);
    _result3 = _result3 * i  // 1 x 2 x 3 x 4  incremential operator formula
}
console.log(_result3)
console.log(_numberFactorial2)



//5. print the N fibbonaci number only with loop

// let n = 15;                 // banyaknya urutan sesuai Task
// let a = 1,                  // angka fibbo pertama
//     b = 1,                  // angka fibbo kedua
//     angkaSelanjutnta = 0;   // Variable untuk menghandle hasilnya

// for (let i = 3; i <= n; i++) {  //perintah untuk running number from 3 sampai 15 urutan
//     angkaSelanjutnta = a + b; // Rumus mencari angka fibbonacci selanjutnya 

//     a = b;                 // Majuin angkanya di dalam urutan
//     b = angkaSelanjutnta; // Majuin angka selanjutnya lagi
//     console.log(angkaSelanjutnta);
// }

//with Function print the numbers and the rest 
const fibbo = (n: any, a: any, b: any) => {
    let hasil;

    for (let i = 3; i <= n; i++) {  //perintah untuk running number from 3 sampai 15 urutan
        angkaSelanjutnta = a + b; // Rumus mencari angka fibbonacci selanjutnya 

        a = b;                 // Majuin angkanya di dalam urutan
        b = angkaSelanjutnta; // Majuin angka selanjutnya lagi
        console.log(angkaSelanjutnta);
        hasil = angkaSelanjutnta
    }
    return hasil
}

let n = 15;                 // banyaknya urutan sesuai Task
let a = 1                 // angka fibbo pertama
let b = 1                  // angka fibbo kedua
let angkaSelanjutnta = 0

const hasilAkhir = fibbo(n, a, b); //angka fibbo ke 15 
console.log(hasilAkhir)