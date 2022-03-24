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
    ordering: false,
    responsive: true,
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
        action: function () {
            $('#modal-template-add').modal('show');
        }
    },
    {
        text: '<i class="fas fa-info-circle"></i>',
        titleAttr: 'Template Detail',
        className: 'btn btn-info ml-1',
        action: function () {
            var infoData = table.rows({ selected: true }).data()[0];
            var templateName = infoData.template_name;
            $.ajax({
                url: "template/get/" + templateName,
                type: "GET",
                // request is ok 
                success: function (response) {
                    $('.modal-content .modal-header .fake-template-detail-title').html(templateName);
                    $('.modal-content .modal-body .fake-template-detail-descr').attr("value", response.description);
                    $('.modal-content .modal-body .fake-template-detail-content').html(response.template_content);
                    $('#modal-template-detail').modal('show');
                },
                // Error handling 
                error: function (error) {
                    alert(`Error ${error}`);
                }
            });
        }
    },
    {
        text: '<i class="fas fa-edit"></i>',
        titleAttr: 'Update Template',
        className: 'btn btn-warning ml-1',
        action: function () {
            var updateData = table.rows({ selected: true }).data()[0];
            var templateName = updateData.template_name;
            $.ajax({
                url: "template/get/" + templateName,
                type: "GET",
                // request is ok 
                success: function (response) {
                    $('.modal-content .modal-header .fake-template-update-title').html(templateName);
                    $('.modal-content .modal-body .fake-template-update-form').attr("action", "template/update/" + templateName);
                    $('.modal-content .modal-body .fake-template-update-descr').attr("value", response.description);
                    $('.modal-content .modal-body .fake-template-update-content').html(response.template_content);
                    $('#modal-template-update').modal('show');
                },
                // Error handling 
                error: function (error) {
                    alert(`Error ${error}`);
                }
            });
        }
    },
    {
        text: '<i class="fas fa-trash"></i>',
        titleAttr: 'Delete Template',
        className: 'btn btn-danger ml-1',
        action: function () {
            var deleteData = table.rows({ selected: true }).data()[0];
            var templateName = deleteData.template_name;
            var result = confirm("Do you confirm to delete " + templateName + "?")
            if (result) {
                $.ajax({
                    url: "template/delete/" + templateName,
                    type: "POST",
                    data: { csrfmiddlewaretoken: '{{ csrf_token }}' },
                    // request is ok 
                    success: function (data) {
                        table.ajax.reload();
                        table.buttons().disable();
                        table.buttons(0).enable();
                    },
                    // Error handling 
                    error: function (error) {
                        alert(`Error ${error}`);
                        table.ajax.reload();
                        table.buttons().disable();
                        table.buttons(0).enable();
                    }
                });
            }
        }
    }
    ],

});

table.buttons().disable();
table.buttons(0).enable();

table.on('select', function (e, dt, type, indexes) {
    table.buttons(1).enable();
    table.buttons(2).enable();
    table.buttons(3).enable();
});

table.on('deselect', function () {
    table.buttons(1).disable();
    table.buttons(2).disable();
    table.buttons(3).disable();
});