function BMI(weight, height) {
	var hasil = weight / (height/100 * height/100)

	console.log(hasil);
 	
 	if (hasil > 18.5 ){
	console.log("kekurangan berat badan")
	}

	else if (hasil >= 18.5 || hasil <= 24.9){
	console.log("normal(ideal)")
	}

	else if (hasil >= 25.0 || hasil <= 29.9){
	console.log("kelebihan berat badan")
	}

	else if (hasil >= 30.0){
	console.log("Obesitas")
	}
}

 console.log(BMI(90, 165))