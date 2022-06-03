/**----------Bai 1--------------- */
/**
 * mô hình 3 khối
 *Đầu vào
 * luong1Ngay=100.000
 * soNgayLam=8
 * xử lý
 * tạo biến luong1Ngay = 100.000
 * tạo biến soNgayLam = 8
 * lương = luong1Ngay * soNgayLam
 * Đầu ra
 * kết quả của lương
 */
var luong1Ngay = 100000;
var soNgayLam = 8;
var luong = 0;
luong = luong1Ngay*soNgayLam;
console.log('Luong :'+luong);

/**----------Bai 2--------------- */
/**
 * Đầu vào
 * 5 số thực
 * số thực 1 
 * số thực 2 
 * số thực 3 
 * số thực 4 
 * số thực 5 
 * Xử lý
 * tạo biến soThuc1 = 1
 *          soThuc2 = 2
 *          soThuc3 = 3
 *          soThuc4 = 4
 *          soThuc5 = 5
 * giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5
 * Đầu ra
 * giaTriTrungBinh = ?
 */
var soThuc1 = 1;
var soThuc2 = 2;
var soThuc3 = 3;
var soThuc4 = 4;
var soThuc5 = 5;
var giaTriTrungBinh = 0;

giaTriTrungBinh = (soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5
console.log ('Gia Tri Trung Binh :'+giaTriTrungBinh)

/**----------Bai 3--------------- */
/**
 * Đầu vào
 * 1usd = 23.500vnd
 * 100usd
 * xử lý
 *  tạo biến oneUsd = 23500 
 *  oneHundredUsd = 100
 * giaTriSauKhiQuyDoi = oneUsd * oneHundredUsd 
 * đầu ra
 * giaTriSauKhiQuyDoi = ?
 * */
var oneUsd =23500;
var oneHundredUsd = 100;
var giaTriSauKhiQuyDoi = 0;

giaTriSauKhiQuyDoi = (oneUsd*oneHundredUsd);
console.log ('Gia Tri sau Khi Quy Doi :'+ giaTriSauKhiQuyDoi +'Vnd');

/**----------Bai 4--------------- */
/**
 * Đầu vào
 * chiều dài = 5
 * chiều rộng = 8
 * Xử lý 
 * tạo biến chieuDai = 5
 *          chieuRong = 8
 *          dienTich = chieuDai*chieuRong
 *          chuVi = (chieuDai+chieuRong)*2
 *đầu ra
 *dienTich=?
 *chuVi=?
 */

 var chieuDai=5;
 var chieuRong=8;
 var chuVi=0;
 var dienTich=0;

 chuVi = chieuDai*chieuRong;
 dienTich = (chieuDai+chieuRong)*2;
 console.log ('Chu vi la :'+chuVi);
 console.log('Dien Tich la : '+dienTich);

 /**----------Bai 5--------------- */
 /**
  * giả sử n = 57  => 5+7=12
  * Đầu vào 
  * n=57
  * xử lý
  * tách hàng chục => n%10 => làm tròn số Math.floor(n/10/)
  * tách hàng đơn vị => n/10 math.floor(n%10)
  * tổng = hàng chục + hàng đơn vị
  * Đầu ra 
  * tổng = ?
  */
  var n= 57;
  var hangChuc = Math.floor(n/10);
  var hangDonVi = Math.floor(n%10);
  var tongHaiKySo = hangChuc+hangDonVi;
console.log('Tong Hai Ky So la : '+tongHaiKySo)
