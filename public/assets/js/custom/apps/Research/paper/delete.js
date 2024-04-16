

$(document).ready(function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    // delete user *************************************
    $('#ars_is_my_research').on('click', function () {
        var id = $(this).data('id');
        var url = $(this).data('url');
        var formData = { 'id': id };
        swalWithBootstrapButtons.fire({
            title: " <strong>Are you sure this search is for you? </strong> ",
            text: "Send a request to the system administrator ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, of course",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sendAjax(url, formData, function (data) {
                    swalWithBootstrapButtons.fire({
                        title: "Send a request to the system administrator",
                        text: data.message,
                        icon: data.status
                    });
                    $('#row-' + id).remove();
                }, function (error) {
                    console.log("error: " + error)
                    swalWithBootstrapButtons.fire({
                        title: "Not Send a request",
                        text: "An error occurred while Send a request to the system administrator",
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
                    text: "the request has been canceled :)",
                    icon: "error"
                });
            }
        });
    });

});
