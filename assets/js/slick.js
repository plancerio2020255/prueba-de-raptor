$(document).ready(function () {
  let hoyDia = new Date();
  let dia = hoyDia.getDate();
  var mes = hoyDia.getMonth() + 1;
  var año = hoyDia.getFullYear();
  let fecha = `#${dia}-${mes}-${año}`;
  let slickInicial = $(fecha.toString());
  let cajasDeFechas = [...$(".ubicaciones__container--items")];
  let encontrados = cajasDeFechas.indexOf(slickInicial[0]);
  if (slickInicial[0] == undefined) {
    for (var i = dia; i < 31; i++) {
      let diaNuevo = dia++;
      fecha = `#${diaNuevo}-${mes}-${año}`;
      if($(fecha.toString())[0] !== undefined) {
      slickInicial = $(fecha.toString());
      encontrados = cajasDeFechas.indexOf(slickInicial[0]);
      break;
      }
      console.log(fecha);
      slickInicial = $(fecha.toString());
      encontrados = cajasDeFechas.indexOf(slickInicial[0]);
      console.log(diaNuevo)
    }
  }

  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    initialSlide: encontrados,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider-gallery").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
