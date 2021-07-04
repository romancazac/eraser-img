$(function(){
	$('#redux').eraser({
	  progressFunction: function(p) {
		$('#progress').html(Math.round(p*300)+'%');
	  }
	});

	$('#resetBtn').click(function(event) {
	  $('#redux').eraser('reset');
		$('#progress').html('0%');
	  event.preventDefault();
	});

	$('#clearBtn').click(function(event) {
	  $('#redux').eraser('clear');
		$('#progress').html('100%');
	  event.preventDefault();
	});

	$('#toggleBtn').click(function(event) {
	  var $redux = $('#redux'),
		$toggleBtn = $('#toggleBtn');

	  if ($redux.eraser('enabled')) {
		$toggleBtn.text(' ENABLE ');
		$redux.eraser('disable');
	  } else {
		$toggleBtn.text(' DISABLE ');
		$redux.eraser('enable');
	  }

	  event.preventDefault();
	});

  });
  function reset(event) {
	$("#redux").eraser('reset');
	event.preventDefault();
  }
	
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

	
    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      
      el.classList.add('show'); 
	  el.classList.remove('hide');
    });

  });
});

