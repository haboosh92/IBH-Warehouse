

$(document).ready(function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    // delete  *************************************
    $('.ars_modal_edit_Department').on('click', function () {
        var id = $(this).data('id');
        var name = $(this).data('name');

        $("#depart-id").val(id);
        $("#depart-name").val(name);

    });

});
