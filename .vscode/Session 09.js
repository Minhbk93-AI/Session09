// const X = [5, 8, "15", 15, 10, 21, 25, 26, 30, "5"];

// let sum = 0;
// for (let value of X) {
//   if (typeof value === "number" && value % 5 == 0) {
//     sum = sum + value;
//   }
// }
// console.log(sum);

// let A = [2, 7, 9, 1, 6, 44, 7, 23];
// let sum_chan = 0;
// let sum_le = 0;

// for (let value of A) {
//   if (value % 2 == 0) {
//     sum_chan = sum_chan + value;
//   } else {
//     sum_le = sum_le + value;
//   }
// }
// console.log(sum_chan);
// console.log(sum_le);

// let A = [2, 7, 9, 1, 6, 44, 7, 23];

// for (let i = 0; i < A.length - 1; i++) {
//   for (j = i + 1; j < A.length; j++) {
//     if (A[i] > A[j]) {
//       let X = A[i];
//       A[i] = A[j];

//       A[j] = X;
//     }
//   }
// }
// console.log(A);
// console.log(A[A.length - 3]);

// let A = [2, 7, 9, 1, 6, 44, 7, 23];
// for (let value of A) {
//   let check = true;
//   for (let i = 2; i < value; i++) {
//     if (value % i == 0) {
//       check = false;
//       break;
//     }
//   }
//   if (check) {
//     console.log(value);
//   }
// }

// let chuoi = abcd123;
// console.log(typeof chuoi);

// let A = [34, 5462, 345, 3, 44];
// var viTri = +prompt("mời bạn nhập vào số thứ tự");
// function timSoLonThuN(A, vT) {
//   for (let i = 0; i < A.length - 1; i++) {
//     for (j = i + 1; j < A.length; j++) {
//       if (A[i] > A[j]) {
//         let X = A[i];
//         A[i] = A[j];

//         A[j] = X;
//       }
//     }
//   }
//   if (vT < 0 || vT > A.length - 1) {
//     return A[A.length - 1];
//   }
//   return "Số lớn thư N" + A[A.length - vT];
// }

// console.log(timSoLonThuN(A, viTri));

// let diem = 6;

// diem > 6 ? console.log("đủ điểm qua môn") : console.log("lên lơp");

// Câu lệnh switch-case

// let a = +prompt("Mời bạn nhập vào tháng từ 1 đến 12:");

// switch (a) {
//   case 0:
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Tháng " + a + " có 31 ngày");
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Tháng " + a + " có 30 ngày");
//     break;

//   case 2:
//     console.log("Tháng " + a + " có 29 ngày");
// }

// Máy tính đơn giản

// let a = +prompt("Nhập vào số a:");
// let b = +prompt("Nhập vào số b:");
// let c = prompt("Nhập vào phép tính");

// switch (c) {
//   case "+":
//     ketqua = a + b;
//     console.log(ketqua);
//     break;

//   case "-":
//     ketqua = a - b;
//     console.log(ketqua);
//     break;
//   case "/":
//     ketqua = a / b;
//     console.log(ketqua);
//     break;
//   case "*":
//     ketqua = a * b;
//     console.log(ketqua);
//     break;
// }

// Tìm Max, Min

// let A = [2, 7, 9, 1, 6, 50, 7, 23];
// let max = A[0];
// let min = A[0];
// for (let value of A) {
//   if (value > max) {
//     max = value;
//   }
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(max);
// console.log(min);

// Tìm Max, Min;
// let a = +prompt("Nhập vào số a:");
// let b = +prompt("Nhập vào số b:");
// let c = +prompt("Nhập vào số c");

// max = a;
// if (b > a && b > c) {
//   max = b;
// } else if (c > b && c > a) {
//   max = c;
// }
// console.log(max);

// Ứng dụng tìm cung hoàng đạo

// let a = +prompt("Nhập tháng");
// let b = +prompt("Nhập ngày");
// switch (a) {
//   case 1:
//     if (a < 20) {
//       console.log("Cung Ma Kết");
//     } else {
//       console.log("Cung Bảo Bình");
//     }
//     break;

//   case 2:
//     if (a < 19) {
//       console.log("Cung Bảo Bình");
//     } else {
//       console.log("Cung Song Ngư");
//     }
//     break;
//   case 3:
//     if (a < 21) {
//       console.log("Song Ngư");
//     }
//     break;
//   case 4:
//     if (a < 20) {
//       console.log("Bạch Dương");
//     } else {
//       console.log("Cung Kim Ngư");
//     }
//     break;
//   case 5:
//     if (a < 21) {
//       console.log("Cung Kim Ngư");
//     } else {
//       console.log("Cung Song Tử");
//     }
//     break;
//   case 6:
//     if (a < 22) {
//       console.log("Cung Song Tử");
//     } else {
//       console.log("Cung Cự Giải");
//     }
//     break;
//   case 7:
//     if (a < 23) {
//       console.log("Cung Cự Giải");
//     } else {
//       console.log("Cung Sư Tử");
//     }
//     break;
//   case 8:
//     if (a < 23) {
//       console.log("Cung Sư Tử");
//     } else {
//       console.log("Cung Xử Nữ");
//     }
//     break;
//   case 9:
//     if (a < 23) {
//       console.log("Cung Xử Nữ");
//     } else {
//       console.log("Cung Thiên Bình");
//     }
//     break;
//   case 10:
//     if (a < 24) {
//       console.log("Cung Thiên Bình");
//     } else {
//       console.log("Cung Hổ Cáp");
//     }
//     break;
//   case 11:
//     if (a < 22) {
//       console.log("Cung Hổ Cáp");
//     } else {
//       console.log("Cung Nhân Mã");
//     }
//     break;
//   case 12:
//     if (a < 22) {
//       console.log("Cung Nhân Mã");
//     } else {
//       console.log("Cung Ma Kết");
//     }
//     break;
// }

// Tính chỉ số cân nặng của cơ thể

// let weight = +prompt("Nhập vào cân nặng của bạn(kg):");
// let height = +prompt("Nhập vào chiều cao của bạn(m):");
// let bmi = weight / height ** 2;

// if (bmi < 18) {
//   console.log("Cân nặng thấp(gầy)");
// } else if (bmi < 25.0) {
//   console.log("Bình thường");
// } else if (bmi < 30.0) {
//   console.log("Tiền béo phì");
// } else if (bmi < 35.0) {
//   console.log("Béo phì độ I");
// } else if (bmi < 40.0) {
//   console.log("Béo phì độ II");
// } else {
//   console.log("Béo phì độ III");
// }

// BÀI TẬP DECISION MAKING

// Bài 1:
// let tuoi = +prompt("Nhập vào số tuổi của bạn:");
// if (tuoi >= 18) {
//   console.log("Bạn trên 18 tuổi");
// } else {
//   console.log("Bạn chưa đủ 18 tuổi");
// }

// Bài 2:
// let gio = +prompt("Nhập vào giờ hiện tại:");
// if (gio < 18) {
//   console.log("Good day");
// } else if (gio > 18) {
//   console.log("Good Evening");
// }

// Bài 3:
// let gio = +prompt("Nhập vào giờ hiện tại:");
// if (gio < 10) {
//   console.log("Good morning");
// } else if (gio < 20) {
//   console.log("Good day");
// } else if (gio > 20) {
//   console.log("Good evening");
// }

// Bài 4:
// let a = +prompt("Nhập vào một số");
// if (a % 2 == 0) {
//   console.log(`Số ${a} là số chắn`);
// } else {
//   console.log(`Số ${a} là số lẻ`);
// }

// Bài 5:
// let a = +prompt("Nhập vào một số");
// switch (a) {
//   case 1:
//     if(a % 2 == 0){
//     console.log(`Số ${a} là số chắn`);
//     }
//     break;

//   case 2:
//     if(a % 2 != 0){
//     console.log(`Số ${a} là số lẻ`);
//     break;
// }
// }

// Bài 6:
// let a = prompt("Bạn hãy nhập màu sắc vào:");
// if (a == "xanh" || a == "đỏ" || a == "vàng") {
//   console.log(`Màu sắc bạn nhập vào là màu: ${a}`);
// } else {
//   console.log("Màu không hợp lệ");
// }

// Bài 7:
// let x = +prompt("Bạn hãy nhập vào một số nguyên:");
// if (x == 0) {
//   console.log("x có giá trị là 0");
// } else if (x > 0) {
//   console.log("x là số nguyên dương");
// } else {
//   console.log("x là số nguyên âm");
// }

// Bài 8:
// let weight = +prompt("Nhập vào cân nặng của bạn(kg):");
// let height = +prompt("Nhập vào chiều cao của bạn(m):");
// let bmi = weight / height ** 2;

// if (bmi < 18.5) {
//   console.log("Cân nặng thấp(gầy)");
// } else if (bmi < 25.0) {
//   console.log("Bình thường");
// } else if (bmi < 30.0) {
//   console.log("Tiền béo phì");
// } else if (bmi < 35.0) {
//   console.log("Béo phì độ I");
// } else if (bmi < 40.0) {
//   console.log("Béo phì độ II");
// } else {
//   console.log("Béo phì độ III");
// }

// Bài 9:
// let diemToan = +prompt("Nhập vào điểm môn Toán");
// let diemLy = +prompt("Nhập vào điểm môn Lý");
// let diemHoa = +prompt("Nhập vào điểm môn Hóa");
// let diemVan = +prompt("Nhập vào điểm môn Văn");
// let diemSư = +prompt("Nhập vào điểm môn Sử");
// let diemDia = +prompt("Nhập vào điểm môn Địa");

// let diemTBM = (diemToan + diemLy + diemHoa + diemVan + diemSư + diemDia) / 6;

// if (diemTBM < 5.0) {
//   console.log("Xếp loại YẾU");
// } else if (diemTBM <= 6.4) {
//   console.log("xếp loại TRUNG BÌNH");
// } else if (diemTBM <= 6.4) {
//   console.log("xếp loại TRUNG BÌNH");
// } else if (diemTBM <= 7.9) {
//   console.log("xếp loại KHÁ");
// } else {
//   console.log("Xếp loại GIỎI");
// }

// Bài 10:

// let a = +prompt("Mời bạn nhập vào tháng từ 1 đến 12:");

// switch (a) {
//   case 0:
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Tháng " + a + " có 31 ngày");
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Tháng " + a + " có 30 ngày");
//     break;

//   case 2:
//     console.log("Tháng " + a + " có 29 ngày");
// }
