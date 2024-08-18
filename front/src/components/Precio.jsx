function Precio({precio}){
	const formatedPrize = parseFloat(precio).toFixed(2).split(".").join(",");
	return <>{formatedPrize} €</>
}

export default Precio