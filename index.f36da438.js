var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.trim().replace(/,/g,""),10)}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,o=e.toLocaleString("en-US"),r=n.toLocaleString("en-US");document.querySelector(".average-population").textContent=r,document.querySelector(".total-population").textContent=o;
//# sourceMappingURL=index.f36da438.js.map
