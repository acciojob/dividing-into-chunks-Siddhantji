const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	cont result=[];
	let sub=[];
	for(let i =0;i<arr.lenngth;i++){
		if(arr.reduce((acc,val)=> acc+val,0)+arr[i]<= n){
			sub.push(arr[i]);
		}
		else{
			result.push(sub);
			sub.push(arr[i]);
		}
		
      }
	result.push(sub);
	console.log(result);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
