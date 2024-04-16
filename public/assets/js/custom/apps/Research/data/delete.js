

$(document).ready(function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    // delete user *************************************
    $('.ars_modal_delete').on('click', function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var url = $(this).data('url');
        var formData = { 'id': id };
        swalWithBootstrapButtons.fire({
            title: " <strong>Are you sure? </u></strong><br>" + name + "</br>",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sendAjax(url, formData, function (data) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: data.message,
                        icon: data.status
                    });
                    $('#row-' + id).remove();
                }, function (error) {
                    console.log("error: " + error)
                    swalWithBootstrapButtons.fire({
                        title: "Not Deleted",
                        text: "An error occurred while deleting the Research ",
                        icon: "error"
                    });
                })


                //

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Research  is safe :)",
                    icon: "error"
                });
            }
        });
    });

});
