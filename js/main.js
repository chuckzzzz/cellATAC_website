/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>L1:</td>'+
            '<td>'+d.L1+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>L2:</td>'+
            '<td>'+d.L2+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>L3:</td>'+
            '<td>'+d.L3+'</td>'+
        '</tr>'+
    '</table>'+
    '<a href="./celltype_html/'+d.L1+"."+d.L2+"."+d.L3+'.html" class="button">More Info</a>'
    ;
}
 
$(document).ready(function() {
    var table = $('#example').DataTable( {
        "ajax": "./data/cells.json",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "index" },
            { "data": "symbol" },
            { "data": "cellcount" },
            { "data": "peaks" }
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );