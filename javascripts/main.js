console.log('This would be the main JS file.');
function changeLanguage(lang){
	//console.log(lang);
	for (item in lang)
	{
		$('.lan-'+item).text(lang[item]);
	}
}
$(function(){
	changeLanguage(ch);
})