let number = parseInt(prompt('Nhập vào 1 số: '))
let a=[1,2,4,5,6,7,8,9]
for (i=0;i<a.length;i++){
    if ( number==a[i])
        document.write('Tìm thấy ' + number+ ' tại vị trí ' + i);
}
