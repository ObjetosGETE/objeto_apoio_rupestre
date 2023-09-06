$(() => {
  $(".draggable").draggable();
});

$(document).on("click", "#algumacoisa div label", function () {
  let mes = $(this).data('mes');

  $('.card').addClass('oculto');
  $(`#${mes}`).removeClass('oculto');
})