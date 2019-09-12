$(document).ready(function() {

    $(".alert").hide();

    $("#btnSubmit").on('click', function() {

        event.preventDefault();
        let postData = $("#frmLogin").serialize();
        $(".alert").show();

        $.ajax({
                url: 'http://localhost:3000/users/register',
                type: "POST",
                data: postData
            })
            .done(function() {
                $(".alert").html('true');
            })
            .fail(function() {
                $(".alert").html('false');
            });
    });

});