const kodWydzialu = document.getElementById('kodWydzialu');
const numerKsiegiWieczystej = document.getElementById('numerKsiegiWieczystej');
const cyfraKontrolna = document.getElementById('cyfraKontrolna');

function oblicz()
{
	const kw = kodWydzialu.options[kodWydzialu.selectedIndex].value;
	localStorage.index = kodWydzialu.selectedIndex;
	let nkw = numerKsiegiWieczystej.value ;
	while (nkw.length< 8) nkw ='0'+nkw ;
	cyfraKontrolna.value ='' ;
	for (let i=0;i<10;i++)
	{
		if (validateEKW(kw+'/'+nkw+'/'+i))
			cyfraKontrolna.value =i ;
	}
}

if (localStorage.index != undefined)
	kodWydzialu.selectedIndex = localStorage.index