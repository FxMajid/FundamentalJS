var a = ['','satu ','dua ','tiga ','empat ', 'lima ','enma ','tujuh ','delapan ','sembilan ','sepuluh ','sebelas ','dua belas ','tiga belas ','empat belas ','lima belas ','enam belas ','tujuh belas ','delapan belas ','sembilan belas '];
var b = ['', '', 'dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan puluh'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'miliyar ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'ratus ribu ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'ribu ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'ratus  ' : '';
    str += (n[5] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupiah ' : '';
    return str;
}

document.getElementById('number').onkeyup = function () {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};