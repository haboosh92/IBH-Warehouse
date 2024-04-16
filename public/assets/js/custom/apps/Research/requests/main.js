

$(document).ready(function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    // delete user *************************************
    $('.ars_modal_request_accept').on('click', function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var url = $(this).data('url');
        var status = $(this).data('status');
        var formData = { 'id': id };
        swalWithBootstrapButtons.fire({
            title: " <strong>are you sure ? </strong> ",
            text: name,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, of course",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sendAjax(url, formData, function (data) {
                    swalWithBootstrapButtons.fire({
                        title: "Approval of the request",
                        text: data.message,
                        icon: data.status
                    });

                    $('#Accept').removeClass('d-none');
                    $('#Reject').removeClass('d-none');

                    $('#' + status).addClass('d-none');
                }, function (error) {
                    console.log("error: " + error)
                    swalWithBootstrapButtons.fire({
                        title: "Not Send a request",
                        text: "An error occurred while Approval of the request",
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
                    text: "the accept request has been canceled :)",
                    icon: "error"
                });
            }
        });
    });

});
