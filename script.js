function changePage(event) {
    if($(event.target).hasClass('nav-link')) {
        window.location.href = $(event.target).attr('href');
        return;
    }
}

$(function () {
    $('.nav li').click(changePage);
})
