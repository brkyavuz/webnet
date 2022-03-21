var table = $('#template-table').DataTable();


$(document).ready(function() {
    var table = $('#template-table').DataTable();
    $('#template-table tbody').on('click', 'button', function() {
        var temp_name = table.row($(this).parents('tr')).data()[0];
        var btnId = $(this).attr('id')
            // Ajax Calls based on the button id
        if (btnId == "btn-update") {
            $.ajax({
                url: "template/get/" + temp_name,
                type: "GET",
                // request is ok 
                success: function(data) {
                    $('.modal-content .modal-header .fake-modal-update-title').html(data.template_name);
                    $('.modal-content .fake-modal-update-body ').html(`				
												<form action="template/update/${data.template_name}" method="post">
													{% csrf_token %}
													<div class="form-group">
														<label>Description</label>
														<input type="text" name="description" class="form-control" value="${data.description}" placeholder="Template Description">
														</div>
													</div>
													<div class="form-group">
													<label>Content</label>
													<textarea name="template_content" id="template-content" class="p-3">${data.template_content}</textarea>
													</div>
													<div class="d-flex justify-content-between">
														<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
														<button type="submit" class="btn btn-primary">Save</button>
													</div>
												</form>`);
                    // CodeMirror
                    runCodeMirror();
                    $('#modal-template').modal('show');
                },
                // Error handling 
                error: function(error) {
                    alert(`Error ${error}`);
                }
            });

        } else {
            var result = confirm("Do you confirm to delete " + temp_name + "?")
            if (result) {
                $.ajax({
                    url: "template/delete/" + temp_name,
                    type: "POST",
                    data: { csrfmiddlewaretoken: '{{ csrf_token }}' },
                    // request is ok 
                    success: function(data) {
                        window.location.replace("");
                    },
                    // Error handling 
                    error: function(error) {
                        alert(`Error ${error}`);
                    }
                });
            }
        }
    });
});

CodeMirror.fromTextArea(document.getElementById("template-add-content"), {
    mode: "jinja2",
    theme: "monokai",
    readOnly: false,
    autoRefresh: true,
    indentWithTabs: true,
    tabSize: 2,
    lint: true,
    lineNumbers: true,
    scrollbarStyle: "simple",
});

$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: encodeURI("../CtrlName/MethodName"), // adjust your path  
    async: true,
    data: JSON.stringify({ "param": _param }),
    dataType: "json",
    success: function(data) {
        console.log(data);
    },
    error: function(data) {
        console.log(data);
    }
});