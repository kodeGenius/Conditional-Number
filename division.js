let j = 0;
for(let i = 0; i < 100; i++){
	j++;
	if(j%3 == 0 && j%5 == 0){
		console.log('FuzzBuzz');
	}else if (j%3 == 0){
		console.log('Fuzz')
	}else if(j%5 == 0){
		console.log('Buzz')
	}
	else{
		console.log(j);
	}
	
}