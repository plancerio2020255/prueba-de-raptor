$(".preguntas__container--summary").click(function () {
  $(this)
    .children("i")
    .toggleClass("bi-dash-circle")
    .toggleClass("bi-plus-circle");
});
