var crypto = require('crypto');
var md5 = require('../src/md5.js');
// var str = '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
var str = '01234567890123456789012345678901234567890123456789012345678901234567890123456789';
// var str = '789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
// var str = '789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
// var str = '7890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
// var str = '摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版';
// var str = '摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版摘要摘要演算法第五版';

var b = [];
for(var i = 0;i < str.length;++i) {
  b[i] = str.charCodeAt(i);
}

console.time('s');
for(var i = 0;i < 1;++i) {

      // if(typeof(str) == 'string') {
      //   crypto.createHash('md5').update(str, 'utf8').digest('hex');
      // }
      // if(str.constructor == ArrayBuffer) {
      //   str = new Uint8Array(str);
      // }
      // crypto.createHash('md5').update(new Buffer(new Uint8Array(str))).digest('hex');

  // crypto.createHash('md5').update(str, 'utf8').digest('hex');
  md5(b);
}
console.timeEnd('s');

console.time('s');
for(var i = 0;i < 1;++i) {
  md5(str);
}
console.timeEnd('s');


// var HEX_CHARS = "0123456789abcdef".split('');
//   var HEX_TABLE = {
//     '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
//     'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15,
//     'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
//   };

//   var R = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
//            5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20,
//            4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
//            6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];

//   var K = [0XD76AA478, 0XE8C7B756, 0X242070DB, 0XC1BDCEEE,
//            0XF57C0FAF, 0X4787C62A, 0XA8304613, 0XFD469501,
//            0X698098D8, 0X8B44F7AF, 0XFFFF5BB1, 0X895CD7BE,
//            0X6B901122, 0XFD987193, 0XA679438E, 0X49B40821,
//            0XF61E2562, 0XC040B340, 0X265E5A51, 0XE9B6C7AA,
//            0XD62F105D, 0X02441453, 0XD8A1E681, 0XE7D3FBC8,
//            0X21E1CDE6, 0XC33707D6, 0XF4D50D87, 0X455A14ED,
//            0XA9E3E905, 0XFCEFA3F8, 0X676F02D9, 0X8D2A4C8A,
//            0XFFFA3942, 0X8771F681, 0X6D9D6122, 0XFDE5380C,
//            0XA4BEEA44, 0X4BDECFA9, 0XF6BB4B60, 0XBEBFBC70,
//            0X289B7EC6, 0XEAA127FA, 0XD4EF3085, 0X04881D05,
//            0XD9D4D039, 0XE6DB99E5, 0X1FA27CF8, 0XC4AC5665,
//            0XF4292244, 0X432AFF97, 0XAB9423A7, 0XFC93A039,
//            0X655B59C3, 0X8F0CCC92, 0XFFEFF47D, 0X85845DD1,
//            0X6FA87E4F, 0XFE2CE6E0, 0XA3014314, 0X4E0811A1,
//            0XF7537E82, 0XBD3AF235, 0X2AD7D2BB, 0XEB86D391];

// var str = '';



//       for(var j = 0;j < 64;++j)
//       {
//         if(j < 16)
//         {
//           // f = (b & c) | ((~b) & d);
//           switch(j % 4)
//           {
//             case 0:
//               // str += 'f = d ^ (b & (c ^ d));\n';
//               f = '(d ^ (b & (c ^ d)))';
//               // f = '(((c ^ d) & b) ^ d)';
//               break;
//             case 1:
//               // str += 'f = c ^ (a & (b ^ c));\n';
//               f = '(c ^ (a & (b ^ c)))';
//               // f = '(((b ^ c) & a) ^ c)';
//               break;
//             case 2:
//               // str += 'f = b ^ (d & (a ^ b));\n';
//               f = '(b ^ (d & (a ^ b)))';
//               // f = '(((a ^ b) & d) ^ b)';
//               break;
//             case 3:
//               // str += 'f = a ^ (c & (d ^ a));\n';
//               f = '(a ^ (c & (d ^ a)))';
//               // f = '(((d ^ a) & c) ^ a)';
//               break;
//           }
//           g = j;
//           // str += 'g = ' + g + ';\n';
//         }
//         else if(j < 32)
//         {
//           // f = (d & b) | ((~d) & c);
//           switch(j % 4)
//           {
//             case 0:
//               // str += 'f = c ^ (d & (b ^ c));\n';
//               f = '(c ^ (d & (b ^ c)))';
//               // f = '(((b ^ c) & d) ^ c)';
//               break;
//             case 1:
//               // str += 'f = b ^ (c & (a ^ b));\n';
//               f = '(b ^ (c & (a ^ b)))';
//               // f = '(((a ^ b) & c) ^ b)';
//               break;
//             case 2:
//               // str += 'f = a ^ (b & (d ^ a));\n';
//               f = '(a ^ (b & (d ^ a)))';
//               // f = '(((d ^ a) & b) ^ a)';
//               break;
//             case 3:
//               // str += 'f = d ^ (a & (c ^ d));\n';
//               f = '(d ^ (a & (c ^ d)))';
//               // f = '(((c ^ d) & a) ^ d)';
//               break;
//           }
//           g = (5 * j + 1) % 16;
//           // str += 'g = ' + g + ';\n';
//         }
//         else if(j < 48)
//         {
//           switch(j % 4)
//           {
//             case 0:
//             str += 'bc = b ^ c;\n';
//               // str += 'f = b ^ c ^ d;\n';
//               f = '(bc ^ d)';
//               break;
//             case 1:
//             str += 'bc = b ^ c;\n';
//               // str += 'f = b ^ c ^ a;\n';
//               f = '(bc ^ a)';
//               break;
//             case 2:
//             str += 'da = d ^ a;\n';
//               // str += 'f = d ^ a ^ b;\n';
//               f = '(da ^ b)';
//               break;
//             case 3:
//             str += 'da = d ^ a;\n';
//               // str += 'f = d ^ a ^ c;\n';
//               f = '(da ^ c)';
//               break;
//           }
//           g = (3 * j + 5) % 16;
//           // str += 'g = ' + g + ';\n';
//         }
//         else
//         {
//           switch(j % 4)
//           {
//             case 0:
//               // str += 'f = c ^ (b | (~d));\n';
//               f = '(c ^ (b | ~d))';
//               break;
//             case 1:
//               // str += 'f = b ^ (a | (~c));\n';
//               f = '(b ^ (a | ~c))';
//               break;
//             case 2:
//               // str += 'f = a ^ (d | (~b));\n';
//               f = '(a ^ (d | ~b))';
//               break;
//             case 3:
//               // str += 'f = d ^ (c | (~a));\n';
//               f = '(d ^ (c | ~a))';
//               break;
//           }
//           g = (7 * j) % 16;
//           // str += 'g = ' + g + ';\n';
//         }

//         // str += 'tmp = d, d = c, c = b;\n';

//         k = K[j];
//         if(k > 2147483647)
//           k = k - 0xFFFFFFFF - 1;
//         r = R[j];
//         // leftrotate
        
//         var aa, bb;
//         switch(j % 4)
//         {
//           case 0:
//             aa = 'a';
//             bb = 'b';
//             break;
//           case 1:
//             aa = 'd';
//             bb = 'a';
//             break;
//           case 2:
//             aa = 'c';
//             bb = 'd';
//             break;
//           case 3:
//             aa = 'b';
//             bb = 'c';
//             break;
//         }
//         str += aa + ' += ' +f+' + blocks[i + ' + g + '] + ' + k + ';\n';
//         // y = R[j];
//         // str += 'y = ' + r + ';\n';
//         // str += 'b += (x << y) | (x >>> (32 - y));\n';
//         str += aa + ' = ((' + aa+ ' << ' + r + ' | ' + aa+ ' >>> ' + (32 - r) + ') + ' + bb + ') << 0;\n';
//         // str += 'a = tmp;\n';
//       }


//       console.log(str);
