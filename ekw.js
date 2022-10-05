function validateEKW(numer)
{
	
	function getLetterValue(letter)
	{
		const letterValues = 
		[
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U',
			'W', 'Y', 'Z'
		];
		for (j=0; j<letterValues.length; j++)
			if (letter == letterValues[j])
				return j;
		return -1;
	}
 
	if (numer == undefined) return false;
	if (numer == null) return false;
	if (numer.length != 15) return false;
	if (numer[4] != '/' || numer[13] != '/') return false;  

	let ekw = numer.toUpperCase();
	for (i=0; i<2; i++)     
		if (getLetterValue(ekw[i]) < 10)
			return false;

	if (getLetterValue(ekw[2]) < 0 || getLetterValue(ekw[2]) > 9)
		return false;

	if (getLetterValue(ekw[3]) < 10)
		return false;

	for (i=5; i<13; i++)
		if (getLetterValue(ekw[i]) < 0 || getLetterValue(ekw[i]) > 9)
			return false;

	sum = 1 * getLetterValue(ekw[0]) +
	3 * getLetterValue(ekw[1]) + 7 * getLetterValue(ekw[2]) + getLetterValue(ekw[3]) +
	3 * getLetterValue(ekw[5]) + 7 * getLetterValue(ekw[6]) + getLetterValue(ekw[7]) +
	3 * getLetterValue(ekw[8]) + 7 * getLetterValue(ekw[9]) + getLetterValue(ekw[10]) +
	3 * getLetterValue(ekw[11]) + 7 * getLetterValue(ekw[12]);
	sum %= 10;
	 
	if (ekw[14] != sum)
		return false;

	return true;
}
