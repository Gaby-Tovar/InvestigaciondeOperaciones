function Calcular(){
    var h= document.getElementById("h").value;
    var M= document.getElementById("M").value;
   
   //operaciones 
    var ls = h/(M-h);
    document.getElementById("ls").value = ls;
    var ws = 1/(M-h);
    document.getElementById("ws").value=ws;
    var lq = (h*h)/(M*(M-h));
    document.getElementById("lq").value=lq;
    var wq = h/(M*(M-h));
    document.getElementById("wq").value=wq;
    var p = h/M;
    document.getElementById("p").value=p;
    var po = 1-p;
    document.getElementById("po").value=po;
}

