const USER = 'user';
function saveData(dataArray){
    let strData = JSON.stringify(dataArray);// đưa mảng về chuỗi
    window.localStorage.setItem(USER,strData);// lưu vào local storage
}

function loadData(){
    let data = []; // khai báo mảng rỗng
    if(window.localStorage.hasOwnProperty(USER)){ // kiểm tra xem có data nào có key là user ko
        let strData = window.localStorage.getItem(USER);// lấy ra dữ liệu dạng chuỗi
        data = JSON.parse(strData); // đưa chuỗi thành mảng
    }
    return data;
}