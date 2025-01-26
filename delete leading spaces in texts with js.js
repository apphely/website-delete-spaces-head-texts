document.querySelectorAll(".class p").forEach(function(p) {
    p.textContent = p.textContent.trimStart();
});