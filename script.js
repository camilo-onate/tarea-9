// JavaScript File
let p = ["el","la", "mi"];
let a = ["limpio", "lento", "feliz", "triste", "bueno", "divertido"];
let s = ["gato", "perro", "libro", "computador"];


for (let i=0; i<p.length; i++){
    for(let j=0; j<a.length; j++){
        for(let k=0; k<s.length; k++){
            console.log(p[i]+a[j]+s[k]);
            let wea = (p[i]+s[k]+a[j])+".com"+"<br>";
            document.body.innerHTML += wea;
        }
    }
}

