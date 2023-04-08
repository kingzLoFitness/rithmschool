
for (let i=0; i<10; i++) {
    console.log( i );
}
console.log(" \n\n\n\n\n");	


for (var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

