$(document).ready(function () {


    // edit user *************************************
    $('.ars_modal_edit_user').on('click', function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var email = $(this).data('email');
        var role = $(this).data('role');


        $("#user-id").val(id);
        $("#user-name").val(name);
        $("#user-email").val(email);
        $("#user-role").val(role);

        $('#user-role-Administrator').prop('checked', false);
        $('#user-role-Editor').prop('checked', false);
        $('#user-role-Professor').prop('checked', false);
        $('#user-role-' + role).prop('checked', true);


    });


});