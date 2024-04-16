

$(document).ready(function () {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });


    $('.ars_modal_edit_research').on('click', function () {
        var id = $(this).data('id');
        var name = $(this).attr('data-name');
        $("#research_id").val(id);
        $("#research_title").val(name);
    });



    $('#ars_modal_edit_research_form').submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();
        var url = $(this).attr('action');
        // Serialize the form data
        var formData = $(this).serialize();

        sendAjax(url, formData, function (data) {
            swalWithBootstrapButtons.fire({
                title: "Updated!",
                text: data.message,
                icon: data.status
            });
            if (data.status == "success") {
                var id = $("#research_id").val();
                var title = $("#research_title").val();

                $('#research_id-' + id).html(title);
                $('#edit_research_id-' + id).attr("data-name", title);
                $('#ars_modal_edit_research').modal('hide');
            }
        }, function (error) {
            console.log("error: " + error)
            swalWithBootstrapButtons.fire({
                title: "Not update",
                text: "An error occurred during the update process",
                icon: "error"
            });
        })

    });


});
