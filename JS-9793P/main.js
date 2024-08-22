let counter = document.getElementById("counter");
let increase = document.getElementById("arttir");
let sifirla = document.getElementById("sifirla");

let count = 0;

increase.addEventListener("click", ()=>{
  count += 1;
  counter.innerHTML = count;
})
sifirla.addEventListener("click", ()=>{
  count = 0;
  counter.innerHTML = count;
})