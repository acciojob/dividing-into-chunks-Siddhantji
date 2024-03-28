const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {

	cont result=[];
	let sub=[];
	for(const num of arr){
		if(sub.reduce((acc,val)=> acc+val,0)+num<= n){
			sub.push(num);
		}
		else{
			result.push(sub);
			sub.push(num);
		}
      }
	if (sub.length > 0) {
    result.push(sub);
}

	return result;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
