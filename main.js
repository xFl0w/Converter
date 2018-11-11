// Pounds Converter
document.getElementById('gramsOutputlbs').innerHTML = "0";
document.getElementById('kgOutputlbs').innerHTML = "0";
document.getElementById('lbsOutputlbs').innerHTML = "0";
document.getElementById("lbsInput").addEventListener('input', function(e){
  let pounds = e.target.value;
  document.getElementById('gramsOutputlbs').innerHTML = (pounds/0.0022046).toFixed(2);
  document.getElementById('kgOutputlbs').innerHTML = (pounds/2.2046).toFixed(2);
  document.getElementById('lbsOutputlbs').innerHTML = (pounds*16).toFixed(2);
});
// Pounds Converter
// Kilograms Converter
document.getElementById('gramsOutputkg').innerHTML = "0";
document.getElementById('poundsOutputkg').innerHTML = "0";
document.getElementById('ozOutputkg').innerHTML = "0";
document.getElementById("kgInput").addEventListener('input', function(e){
  let kilograms = e.target.value;
  document.getElementById('gramsOutputkg').innerHTML = (kilograms*1000).toFixed(2);
  document.getElementById('poundsOutputkg').innerHTML = (kilograms*2.2046).toFixed(2);
  document.getElementById('ozOutputkg').innerHTML = (kilograms*35.274).toFixed(2);
});
// Kilograms Converter
// Grams Converter
document.getElementById('kgOutputg').innerHTML = "0";
document.getElementById('poundsOutputg').innerHTML = "0";
document.getElementById('ozOutputg').innerHTML = "0";
document.getElementById("gInput").addEventListener('input', function(e){
  let grams = e.target.value;
  document.getElementById('kgOutputg').innerHTML = (grams*0.001).toFixed(2);
  document.getElementById('poundsOutputg').innerHTML = (grams*0.00220462).toFixed(2);
  document.getElementById('ozOutputg').innerHTML = (grams*0.035274).toFixed(2);
});
// Grams Converter
// Ounces Converter
document.getElementById('gramsOutputoz').innerHTML = "0";
document.getElementById('poundsOutputoz').innerHTML = "0";
document.getElementById('kgOutputoz').innerHTML = "0";
document.getElementById("ozInput").addEventListener('input', function(e){
  let ounces = e.target.value;
  document.getElementById('gramsOutputoz').innerHTML = (ounces*28.3495).toFixed(2);
  document.getElementById('poundsOutputoz').innerHTML = (ounces*0.0625).toFixed(2);
  document.getElementById('kgOutputoz').innerHTML = (ounces*0.0283495).toFixed(2);
});
// Ounces Converter
