// $(document).ready(function () {


//     // enabel user *************************************
//     $('.kt_modal_enabled_user').on('click', function () {
//         var id = $(this).data('id');
//         var name = $(this).data('name');
//         var status = $(this).data('status');
//         var title = $(this).data('title');
//         var url = $(this).data('url');


//         $("#name-v").html(name);
//         $("#en_user_id").val(id);
//         $("#en_user_status").val(status);
//         $("#en_dis_title").html(title);

//         $("#kt_modal_enabled_user_form").attr('action', url);

//     });


// });


$(document).ready(function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    $('.kt_modal_enabled_user').on('click', function () {


        var id = $(this).data('id');
        var name = $(this).data('name');
        var status = $(this).data('status');
        var title = $(this).data('title');
        var url = $(this).data('url');


        var formData = { 'id': id };
        swalWithBootstrapButtons.fire({
            title: "Are you sure ? ",
            text: title + " account : " + name,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, " + title + " it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sendAjax(url, formData, function (data) {
                    console.log("data = " + data.message + " | " + data.status);
                    swalWithBootstrapButtons.fire({
                        title: title + "!",
                        text: data.message,
                        icon: data.status
                    });

                    if (status == 0) {
                        $('#en_' + id).removeClass('d-none');
                        $('#dis_' + id).addClass('d-none');


                        $('#btn-dis_' + id).removeClass('d-none');
                        $('#btn-en_' + id).addClass('d-none');

                    }
                    else {
                        $('#dis_' + id).removeClass('d-none');
                        $('#en_' + id).addClass('d-none');


                        $('#btn-dis_' + id).addClass('d-none');
                        $('#btn-en_' + id).removeClass('d-none');

                    }


                }, function (error) {
                    console.log("error: " + error)
                    swalWithBootstrapButtons.fire({
                        title: "Not Activated",
                        text: "An error occurred while Activating the user",
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
                    text: "account is safe :)",
                    icon: "error"
                });
            }
        });
    });

});
