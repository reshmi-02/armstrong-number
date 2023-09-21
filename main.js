let size=parseInt(prompt("Enter the length of the array"));
var a=[];
for(let i=0;i<size;i++){
    a[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+a+" ]<br><br>");

for(let i=0;i<a.length;i++){

var len=String(a[i]).length;
console.log(len);
var ans=0;
var temp=a[i];
var newarr=[];
console.log(temp);

var armstrong=(value,size,c)=>{
    
    while(value>0){
    b=value%10;
    c=c+b**size;
    value=parseInt(value/10)
    }

return c
}

var answer=armstrong(temp,len,ans);

if(answer==a[i]){
    newarr.push(a[i]+" ");
    document.write(newarr);
}


}



