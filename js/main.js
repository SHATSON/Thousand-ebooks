$(document).ready(function() {
    $('#maintable').dataTable({

    	"bPaginate": false,
        "bLengthChange": false,

        "bSort": true,
        "bInfo": false,
        "bAutoWidth": false

    });

    $($('#maintable_filter').children()[0]).attr('class' , 'help-inline' )
} );

