class Printer {

	constructor(brand = 'Cannon') {
		this.brand = brand;
	}

	print(str = 'nothing') {
		console.log(this.brand + ' print:\n' +  str);
	}
}


export default Printer;