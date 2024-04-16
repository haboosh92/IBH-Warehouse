"use strict";
var KTUsersAddPermission = function () {
    const t = document.getElementById("kt_modal_add_permission"), e = t.querySelector("#kt_modal_add_permission_form"),
        n = new bootstrap.Modal(t);
    return {
        init: function () {
            (() => {
                var o = FormValidation.formValidation(e,
                    {
                        fields: {
                            permission_name:
                            {
                                validators: {
                                    notEmpty:
                                        { message: "Permission name is required" }
                                }
                            }
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    }); t.querySelector('[data-kt-permissions-modal-action="close"]').addEventListener("click",
                        (t => {
                            t.preventDefault(), Swal.fire({
                                text: "Are you sure you would like to close?",
                                icon: "warning", showCancelButton: !0,
                                buttonsStyling: !1,
                                confirmButtonText: "Yes, close it!",
                                cancelButtonText: "No, return",
                                customClass: {
                                    confirmButton: "btn btn-primary",
                                    cancelButton: "btn btn-active-light"
                                }
                            }).then((function (t) { t.value && n.hide() }))
                        })),
                        t.querySelector('[data-kt-permissions-modal-action="cancel"]').addEventListener("click",
                            (t => {
                                t.preventDefault(), Swal.fire({
                                    text: "Are you sure you would like to cancel?",
                                    icon: "warning",
                                    showCancelButton: !0,
                                    buttonsStyling: !1,
                                    confirmButtonText: "Yes, cancel it!",
                                    cancelButtonText: "No, return", customClass: {
                                        confirmButton: "btn btn-primary",
                                        cancelButton: "btn btn-active-light"
                                    }
                                }).then((function (t) {
                                    t.value ? (e.reset(),
                                        n.hide()) : "cancel" === t.dismiss && Swal.fire({
                                            text: "Your form has not been cancelled!.",
                                            icon: "error", buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: { confirmButton: "btn btn-primary" }
                                        })
                                }))
                            }));
                const i = t.querySelector('[data-kt-permissions-modal-action="submit"]');
                e.addEventListener("submit", function (event) {
                    event.preventDefault(); // Prevent default form submission

                    // Serialize the form data
                    var formData = new FormData(e);
                    var url = 

                    // Validate the form using FormValidation
                    o && o.validate().then(function (isValid) {
                        if (isValid == "Valid") {
                            // If the form is valid, call the sendAjax function
                            sendAjax("your_url_here", formData, handleAjaxError, handleAjaxSuccess);
                        } else {
                            // If there are validation errors, show an error message
                            Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: { confirmButton: "btn btn-primary" }
                            });
                        }
                    });
                });
            })()
        }
    }
}(); KTUtil.onDOMContentLoaded((function () { KTUsersAddPermission.init() }));

// Define your error callback function
function handleAjaxError(error) {
    $("#error").html("Error occurred: " + error);
}

// Define your success callback function
function handleAjaxSuccess(responseData) {
    $("#response").html(responseData);
}

// Define your sendAjax function
function sendAjax(url, formData, errorcallback, callback) {
    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        success: function (response) {
            // Update the target element with the response data
            $("#response").html(response);
            // If a callback function is provided, call it with the response data
            if (typeof callback === 'function') {
                callback(response);
            }
        },
        error: function (xhr, status, error) {
            // If an error callback function is provided, call it with the error message
            if (typeof errorcallback === 'function') {
                errorcallback(error);
            }
        }
    });
}