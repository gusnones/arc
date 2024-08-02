$(document).ready(function()
{	
	$("#menu li").prepend("<span></span>");

	$("#menu li").each(function()
	{
		var linkText = $(this).find("a").html();
		$(this).find("span").show().html(linkText);
	});

	$("#menu li").hover(function()
	{
		$(this).find("span").stop().animate({marginTop: "-40"}, 200);
	},function() 
		{
			$(this).find("span").stop().animate({marginTop: "0"}, 200);
		});
	
});