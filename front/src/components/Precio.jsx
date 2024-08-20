function Precio({precio}){
	const options = {minimumFractionDigits:2,maximumFractionDigits:2, style:"currency",currency:"EUR"}
	const formatter = new Intl.NumberFormat("es-ES",options)
	const formatedPrize = formatter.format(precio);
	return <>{formatedPrize}</>
}

export default Precio