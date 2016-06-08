var i = -50;

while(i<=50){
	if(i===0){
		console.log(i);
	} else if(i%2===1){
		console.log('Odd: ' + i);
	} else {
		console.log('Even: ' + i);
	}
	i++;
}