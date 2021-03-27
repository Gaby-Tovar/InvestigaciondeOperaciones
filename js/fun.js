function Calcular(){
    var D= document.getElementById("dm").value;
    var C= document.getElementById("cxu").value;
    var K= document.getElementById("cxp").value;
    var h= document.getElementById("cdm").value;
    var diah= document.getElementById("dh").value;
    
    
    var Q = Math.sqrt((2*D)*K/h);
    document.getElementById("cdlo").value = Q;
    var N = (D/Q);
    document.getElementById("ndo").value=N;
    var T = (diah/N);
    document.getElementById("teo").value=T;
    var d = (D/diah);
    document.getElementById("dpd").value=d;
    var TC = ((D/Q)*K+(Q/2)*h);
    document.getElementById("ct").value=TC;
}