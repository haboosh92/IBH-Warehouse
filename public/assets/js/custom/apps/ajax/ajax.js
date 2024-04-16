

// Define your sendAjax function
function sendAjax(url, formData, callback, errorcallback) {
    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Include CSRF token
        },
        success: function (response) {
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
