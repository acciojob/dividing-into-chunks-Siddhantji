const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {

	 let r=[];
	let sub=[];
	for(const num of arr){
		if(sub.reduce((acc,val)=> acc+val,0)+num<= n){
			sub.push(num);
		}
		else{
			r.push(sub);
			sub.push(num);
		}
      }
	if (sub.length > 0) {
    r.push(sub);
}

	return r;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
