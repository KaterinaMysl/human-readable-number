module.exports = function toReadable(number) {
	if (number === 0) {
		return 'zero'
	}
	const numberToStr = number.toString()
	// переводит число в строку
	if (numberToStr.length > 3) {
		return 'Enter a three-digit number'
	}
	// если строка больше трех, больше чем трехзначное число, то ошибка

	const FirstGroup = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	// группы с буквенными числами. первая позиция пуста для значений, где ноль на конце. Например 230 (тридцать, а не тридцать ноль)
	const SecondGroup = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	// группы с буквенными числами. первые позиции пусты для пропуска ноль и 10 

	function getFirstGroup(a) {
		return (FirstGroup[Number(a)])
	}
	// возвращает первую группу(FirstGroup) элементов до 20 в текстовом значении
	function getSecondGroup(a) {
		return (SecondGroup[a[0]] + ' ' + FirstGroup[a[1]])
	}
	// возвращает вторую группу(SecondGroup) элементов десятков в текстовом значении 

	let num1 = '000' + numberToStr;
	// записывает 000+число
	let num2 = num1.slice(-3);
	// затем отнимает три знака(трехзначное число)
	let [a0, a1, a2] = num2.match(/(\d{1})(\d{2})/);
	// группирует число на блоки
	let str = '';
	if (a1 != 0) {
		str = str + getFirstGroup(a1) + ' hundred '
	};

	if (a2 != 0) {
		str = str + (getFirstGroup(a2) || getSecondGroup(a2))
	}

	return str.trim()
	// обрезает пробелы в начале и в конце
}

console.log(module.exports(123))

