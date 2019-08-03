$(document).ready(function() {
    $(".hidden").hide();
    $("#notebook").click(function() {
        $(".hidden").show();
        $("#testlist").hide();
        $("#notelist").show();
    })
    $("#test").click(function() {
        $(".hidden").show();
        $("#notelist").hide();
        $("#testlist").show();
    })
})