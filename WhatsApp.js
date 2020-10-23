/*!
Name:         JS Tombol klik untuk Order Via WhatsApp V2.0.0
Version:      2.0.0 (Oktober 2020)
Author:       Indra LKM (B575ID)
Author URL 1: https://www.b575.co.id/
Author URL 2: https://jasa.b575.co.id/ */

function openForm() {
  document.getElementById("myWA").style.display = "block";
}

function closeForm() {
  document.getElementById("myWA").style.display = "none";
};
$('.whatsapp-btn').click(function(){
 $('#whatsapp').toggleClass('toggle');
});
// Onclick Whatsapp Sent!
$('#whatsapp .submit').click(WhatsApp);

$("#whatsapp input, #whatsapp textarea").keypress(function() {
 if (event.which == 13) WhatsApp();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function WhatsApp() {
 var ph = '';
 if ($('#whatsapp .nama').val() == '') { // Cek Nama
  ph = $('#whatsapp .nama').attr('placeholder');
  alert('Silahkan tulis ' + ph);
  $('#whatsapp .nama').focus();
  return false;
 } else if ($('#whatsapp .alamat').val() == '') { // Cek Alamat
  ph = $('#whatsapp .alamat').attr('placeholder');
  alert('Silahkan tulis ' + ph);
  $('#whatsapp .alamat').focus();
  return false;
 } else if ($('#whatsapp .nomor').val() == '') { // Cek Nomor
  ph = $('#whatsapp .nomor').attr('placeholder');
  alert('Silahkan tulis ' + ph);
  $('#whatsapp .nomor').focus();
  return false;
    } else if ($('#whatsapp .paket').val() == '') { // Cek Paket
  ph = $('#whatsapp .paket').attr('placeholder');
  alert('Silahkan tulis ' + ph);
  $('#whatsapp .paket').focus();
  return false;
 } else if ($('#whatsapp .pesan').val() == '') { // Cek Pesan
  ph = $('#whatsapp .pesan').attr('placeholder');
  alert('Silahkan tulis ' + ph);
  $('#whatsapp .pesan').focus();
  return false;
 } else {
  if (!confirm("Klik oke untuk kirim pesan via WhatsApp ke Kami")) {
   window.open("https://www.whatsapp.com/download/");
  } else {
   // Check Device (Mobile/Desktop)
   var url_wa = 'https://web.whatsapp.com/send';
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    url_wa = 'whatsapp://send/';
   }
   // Get Value
   var tujuan = $('#whatsapp .tujuan').val(),
     via_url = location.href,
     nama = $('#whatsapp .nama').val(),
     alamat = $('#whatsapp .alamat').val(),
                    nomor = $('#whatsapp .nomor').val(),
     paket = $('#whatsapp .paket').val(),
     pesan = $('#whatsapp .pesan').val();
   $(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=Hey Admin.%0ASaya: ' + nama + ' %0AAlamat:%20' + alamat +' %0ANo.tlp:%20'+ nomor +'%0AOrder:%20'+ paket +  '%0APesan%20Lengkap:%20' + pesan + '%0AMohon di proses Terimakasih.'+ '%0Avia ' + via_url);
   var w = 960,
     h = 540,
     left = Number((screen.width / 2) - (w / 2)),
     tops = Number((screen.height / 2) - (h / 2)),
     popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
   popupWindow.focus();
   return false;
  }
 }
}
