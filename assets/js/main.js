const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()