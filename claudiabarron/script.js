document.getElementById('copyBtn').addEventListener('click', function(){
  var b=this, n='+18138093374';
  function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy number'},1600)}
  function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('num'));var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Number selected'}
  try{navigator.clipboard.writeText(n).then(done,sel)}catch(e){sel()}
});