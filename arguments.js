class Father {
get(){
	let num1=10
	let num2=20
	console.log(num1 +num2);

}
}
class Son{
	get(){
		let num1= 100
		let num2= 200
		console.log(num1 +num2);
	}
}
const obj = new Son()
console.log(obj.get());