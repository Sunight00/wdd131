let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  let n = (accumulator/count);
  document.getElementById("q").innerHTML=n;
} else {
  console.log("No scores reported.");
  document.getElementById("y").innerHTML="No scores reported."
}
document.getElementById("w").innerHTML="kk"