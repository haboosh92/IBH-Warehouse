$(document).ready(function () {
    $("#filterInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#fiterSelected").val("all");
    $("#fiterSelected").change(function (e) {
        var val = $(this).val();

        $(".item").removeClass('active');
        if (val == "all")
            $(".item").addClass('active');
        else

            $(".item." + val).addClass('active');


    });
});
