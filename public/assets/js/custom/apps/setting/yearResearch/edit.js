$(document).ready(function() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    // delete  *************************************
    $('.ars_modal_edit_yearResearch').on('click', function() {
        var id = $(this).data('id');
        var name = $(this).data('name');

        $("#year-id").val(id);
        $("#year-name").val(name);

    });

});