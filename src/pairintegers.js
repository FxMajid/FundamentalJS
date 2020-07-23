//Siapkan dua pointer
let check = (array, sum) => {
    let hashMap = {},
      results = [] //penampungan array

        //inisialisasi dua variabel indeks untuk menemukan kandidat elemen dalam array.
        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return results;
    }

//output
console.log(check([2, 3, 6 ,7, 9, 11],9));