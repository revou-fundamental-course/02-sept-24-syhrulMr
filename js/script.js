    function hitungLuasSegitiga() {
        const alas = document.getElementById('alasSegitiga').value;
        const tinggi = document.getElementById('tinggiSegitiga').value;
        const luas = 0.5 * alas * tinggi;
        document.getElementById('hasilLuasSegitiga').innerText = `Hasil: ${luas} cm²`;
    }

    function hitungLuasJajarGenjang() {
        const alas = document.getElementById('alasJajarGenjang').value;
        const tinggi = document.getElementById('tinggiJajarGenjang').value;
        const luas = alas * tinggi;
        document.getElementById('hasilLuasJajarGenjang').innerText = `Hasil: ${luas} cm²`;
    }