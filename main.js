(function($) {


	var navCnvBtn = $('div#btn1');
	var navDshBtn = $('div#btn2')
	var contentWrapper = $('#content');
	var rawContent, pageNbr = -1;

	function get(page) {

		// Clearing previous content
		$(contentWrapper).empty();

		// Sending ID of page and stocking result in var
		$.ajax({
			method: 'POST',
			url: 'Application.php',
			data: 'navBtn='+page,
			dataType: 'html',
			async: false
		})
			.done(function(result, status) {
				rawContent = result;
				pageNbr = page;
			});
	}

	function layout(content) {
		
		if(pageNbr == 1) { // Careful with type of pageNbr (obtained from PHP)

			var parsedCtt = [];

			for(var i = 0; i < content.length; i++) {
			
				var conversation = content[i];
				parsedCtt.push('<div>'+conversation+'</div>');
			}

			return parsedCtt;
		}
		else 
			return content;
	}

	$(navCnvBtn).on('click', function(event) {
		
		pageId = 1;
		get(pageId);

		content = layout(JSON.parse(rawContent)); // laying out the parsed JSON data
		
		$(contentWrapper).append(content); // printing it in content div
	});

	$(navDshBtn).on('click', function(event) {

		pageId = 2;
		get(pageId);

		$(contentWrapper).append(rawContent);
	});

	

})(jQuery);