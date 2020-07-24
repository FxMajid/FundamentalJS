//Siapkan dua pointer
let check = (pointer1, pointer2) => {
    let hashMap = {}, array = [] //siapkan objek dan array

        //inisialisasi dua variabel indeks untuk menemukan kandidat.
        for (let i = 0; i < pointer1.length; i++){
            if (hashMap[pointer1[i]]){
                array.push([hashMap[pointer1[i]], pointer1[i]])
            }else{
                hashMap[pointer2 - pointer1[i]] = pointer1[i];
            }
          }
          return array;
    }

//output
console.log(check([2, 3, 6 ,7, 9, 11],9));