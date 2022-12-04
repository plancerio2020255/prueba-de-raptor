/* -------------------------Iconos dinamicos de las preguntas------------------------- */
$(".preguntas__container--summary").click(function () {
  $(this)
    .children("i")
    .toggleClass("bi-dash-circle")
    .toggleClass("bi-plus-circle");
});

/* -------------------------Botón de cargar más------------------------- */
// let currentItem = 3;

// $('#load-more').click(function(){
//   let cajas = [...$('.galeria__container--box')];
//   for (var i = currentItem; i < currentItem + 3; i++) {
//     cajas[i].style.display = 'flex';
//   }
//   currentItem += 3;
//   if(currentItem >= cajas.length) {
//     $('#load-more').css('display', 'none');
//   }
// })

// let hoyDia = new Date();
// let dia = hoyDia.getDate();
// var mes = hoyDia.getMonth() + 1;
// var año = hoyDia.getFullYear();

// console.log(`${dia}/${mes}/${año}`);