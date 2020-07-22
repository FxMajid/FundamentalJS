const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs => isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];

// numToWords :: (Number a, String a) => a -> String
let numToWords = n => {
  
  let a = [
    '', 'Satu', 'Dua', 'Tiga', 'Empat',
    'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan',
    'Sepuluh', 'sebelas','dua belas ','tiga belas ',
    'empat belas ','lima belas ','enam belas ','tujuh belas ',
    'delapan belas ','sembilan belas '
  ];
  
  let b = [
    '', '', 'dua puluh','tiga puluh','empat puluh',
    'lima puluh', 'enam puluh','tujuh puluh',
    'delapan puluh','sembilan puluh'
  ];
  
  let g = [
    '', 'ribu', 'juta', 'milliar', 'trilliun', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
  ];
  
  // this part is really nasty still
  // it might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones,tens,huns]) => {
    return [
      num(huns) === 0 ? '' : a[huns] + ' ratus ',
      num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
      a[tens+ones] || a[ones]
    ].join('');
  };
  
  let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
  
  if (typeof n === 'number')
    return numToWords(String(n));
  else if (n === '0')
    return 'zero';
  else
    return comp (chunk(3)) (reverse) (arr(n))
      .map(makeGroup)
      .map(thousand)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(' ');
};

console.log(numToWords(15550) + " rupiah");