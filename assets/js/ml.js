document.addEventListener("DOMContentLoaded", function () {
  const paymentButtons = document.querySelectorAll(".payment-option");

  function openPaymentPage(method, provider) {
    console.log(`Opening payment page for ${method} - ${provider}`);
    
    // Di sini, Anda dapat menyesuaikan URL pembayaran sesuai dengan logika atau rute yang sesuai dengan aplikasi Anda.
    // Sebagai contoh, kita akan menggunakan placeholder "/payment" sebagai URL pembayaran.
    const paymentUrl = `/payment?method=${method}&provider=${provider}`;
    
    // Redirect pengguna ke halaman pembayaran baru.
    window.open(paymentUrl, "_blank");
  }

  paymentButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const method = button.dataset.method;
      const provider = button.dataset.provider;

      openPaymentPage(method, provider);
    });
  });
});
