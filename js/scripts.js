

// Daftar kode produk yang valid
const validCodes = ['ABC123', 'XYZ789', 'LMN456', '123456', '789101','A123','B123','C123','D123','E123','F123','G123','Z123'];
                    
document.getElementById('verifyForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  const code = document.getElementById('productCode').value;
  

  // Memeriksa apakah kode yang dimasukkan valid
  if (validCodes.includes(code)) {
    document.getElementById('result').innerHTML = 'Kode valid!';
  } 
  else {
    document.getElementById('result').innerHTML = 'Kode tidak valid!';
  }

});