//function runCodeMirror(elemid) {
//    CodeMirror.fromTextArea(document.getElementById(elemid), {
//        mode: "jinja2",
//        theme: "monokai",
//        readOnly: false,
//        autoRefresh: true,
//        indentWithTabs: true,
//        tabSize: 2,
//        lint: true,
//        lineNumbers: true,
//        scrollbarStyle: "simple",
//    });
// //}
// function refreshDT() {
//     var table = $('#template-table').DataTable({
//         ajax: 'getall',
//         columns: [
//             { "data": "template_name" },
//             { "data": "description" },
//             { "data": "created" },
//             { "data": "updated" },
//         ],
//         select: true
//     });
// }

// $(document).ready(function() {
//     refreshDT();
// });
$.fn.dataTable.Buttons.defaults.dom.button.className = 'btn';

var table = $('#template-table').DataTable({
    ajax: 'getall',
    dom: 'Bfrtip',
    columns: [
        { "data": "template_name" },
        { "data": "description" },
        { "data": "created" },
        { "data": "updated" },
    ],
    select: true,
    buttons: [{
            text: '<i class="fas fa-plus"></i>',
            titleAttr: 'Add New Template',
            className: 'btn btn-primary',
            action: function() {
                var selData = table.rows({ selected: true }).data()[0];

                console.log(selData.template_name)
            }
        },
        {
            text: '<i class="fas fa-info-circle"></i>',
            titleAttr: 'Template Detail',
            className: 'btn btn-info ml-1',
            action: function() {
                var selData = table.rows({ selected: true }).data()[0];

                console.log(selData.template_name)
            }
        },
        {
            text: '<i class="fas fa-edit"></i>',
            titleAttr: 'Update Template',
            className: 'btn btn-warning ml-1',
            action: function() {
                var selData = table.rows({ selected: true }).data()[0];

                console.log(selData.template_name)
            }
        },
        {
            text: '<i class="fas fa-trash"></i>',
            titleAttr: 'Delete Template',
            className: 'btn btn-danger ml-1',
            action: function() {
                var selData = table.rows({ selected: true }).data()[0];

                console.log(selData.template_name)
            }
        }
    ]

});