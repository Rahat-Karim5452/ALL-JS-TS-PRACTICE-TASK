/* 
1.map callback function hold Kore.
2.map er moddhe 3 ta jinis Pai: elements ,index ,array.
3.Map Method Modify Korar Jnno use Hoy.
4.tarMane Jotota Element totota 1 Bose new Array diye Dibe
5.Original Array change kore na 
*/
const applyDiscount = (prices) => {
  let pricesAfterDiscount = prices.map((elem, ind, arr) => {
    console.log(elem, ind, arr);
    return 1; //!4.tarMane Jotota Element totota 1 Bose new Array diye Dibe
  });
  return pricesAfterDiscount;
};
console.log(applyDiscount([500, 1000, 250]));
