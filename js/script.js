$(document).ready(function () {
    $(".tbtn").click(function () {
        $(this).parents(".custom-table").find(".toggler1").removeClass("toggler1");
        $(this).parents("tbody").find(".toggler").addClass("toggler1");
        $(this).parents(".custom-table").find(".fa-minus-circle").removeClass("fa-minus-circle");
        $(this).parents("tbody").find(".fa-plus-circle").addClass("fa-minus-circle");
    });
});



$('.delete').on('click', function(event) {
    $(this).parents('tbody').remove();
});



$(document).on('click', '.edit', function() {
    $(this).parent().siblings('td.data').each(function() {
        var content = $(this).html();
        $(this).html('<input value="' + content + '" />');
    });

    $(this).siblings('.save').show();
    $(this).siblings('.delete').hide();
    $(this).hide();
});



$(document).on('click', '.save', function() {

    $('input').each(function() {
        var content = $(this).val();
        $(this).html(content);
        $(this).contents().unwrap();
    });
    $(this).siblings('.edit').show();
    $(this).siblings('.delete').show();
    $(this).hide();

});

