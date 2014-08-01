$(document).ready(function(){
	if($("table.AdminDataTableSortable").length > 0) {
		$("table.AdminDataTableSortable").tablesorter({headers:{0:{sorter:false}}}); 
		
		$('table.AdminDataTableSortable').on('click', '.toggle_all', function(e){
			el = $(this);
			if(this.checked) {
				// Iterate each checkbox
				$(':checkbox').each(function() {
					$(this).attr('checked', true);                      
				});
				
				setTimeout(function() {
					el.attr('checked', true);
				}, 10);
			} else {
				$(':checkbox').each(function() {
					$(this).attr('checked', false);                      
				});
				
				setTimeout(function() {
					el.attr('checked', false);
				}, 10);
			}
		});
	}
});