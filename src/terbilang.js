function stringtoRupiah( terbilang ) {
		
    var string = terbilang.toString(), units, tens, scales, start, end, 
    digits, digitsLen, digit, ints, i, word, words, rupiah = 'rupiah';

	/* Hapus spasi dan koma */
	string = string.replace(/[, ]/g,"");

	/* Jika angka 0 */
	if( parseInt( string ) === 0 ) {
		return 'Nol';
	}
	
	/* Angka Satuan */
	units = [ '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan',
    'Sepuluh', 'Sebelas','Dua Belas ','Tiga Belas ','Empat Belas ','Lima Belas ','Enam Belas ','Tujuh Belas ',
    'Delapan Belas ','Sembilan Belas '
  ];
	
	/* Angka Puluhan */
    tens = [ '', '', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 
    'Delapan Puluh', 'Sembilan Puluh' ];
	
	/* Satuan Skala */
    scales = [ '', 'ribu', 'juta', 'milliar', 'trilliun'];
	
	/* membagi inputan menjadi 3 digit */
	start = string.length;
	digits = [];
	while( start > 0 ) {
		end = start;
		digits.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
	}
	
	/* Memeriksa jika fungsi memiliki satuan skala yang cukup untuk dapat merumuskan inputan pengguna  */
	digitsLen = digits.length;
	if( digitsLen > scales.length ) {
		return '';
	}
	
	/* menentukan bilangan bulat pada setiap digit */
	words = [];
	for( i = 0; i < digitsLen; i++ ) {
		
		digit = parseInt( digits[i] );
		
		if( digit ) {
			
			/* membagi digit menjadi array bilangan bulat */
			ints = digits[i].split( '' ).reverse().map( parseFloat );
		
			/* menambahkan puluhan */
			if( ints[1] === 1 ) {
				ints[0] += 10;
			}
			
            /* Tambahkan satuan skala jika digit tidak kosong dan memenuhi kondisi array */
			if( ( word = scales[i] ) ) {
				words.push( word );
			}
			
			/* Tambahkan kata satuan */
			if( ( word = units[ ints[0] ] ) ) {
				words.push( word );
			}
			
			/* Tambahkan kata puluhan */
			if( ( word = tens[ ints[1] ] ) ) {
				words.push( word );
			}
			/* tambahkan kata rupiah setelah satuan atau puluhan */
			if( ints[0] || ints[1] ) {	
				/* tambahkan kata rupiah jika angkanya ratusan dst atau angka pertama */
				if( ints[2] || (i + 1) > digitsLen ) {
					words.push( rupiah );
				}
			}
			/* tambahkan satuan ratus jika memenuhi kondisi */
			if( ( word = units[ ints[2] ] ) ) {
				words.push( word + ' Ratus' );
			}	
		}	
	}
    return words.reverse().join( ' ' );
}

// - - - - - Output - - - - - -
function figure(val) {
  finalFig = stringtoRupiah(val);
  document.getElementById("words").innerHTML = finalFig + " Rupiah";
}