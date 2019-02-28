$(document).foundation()

$(document).ready(function() {
  $('.japanese-supply-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });
  
  $('.japanese-news-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });
  
  $('.japanese-select--region').gentleSelect({
    columns: 1,
    itemWidth: 100,
    hideOnMouseOut: false
  });

  $('.japanese-select--brand').each(function() {
    $(this).gentleSelect({
      prompt: "Марка",
      columns: 7,
      itemWidth: 117,
      maxDisplay: 3
    });
  });

  $('.japanese-select--model').each(function() {
    $(this).gentleSelect({
      prompt: "Модель",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--carcass').each(function() {
    $(this).gentleSelect({
      prompt: "Кузов",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--engine').each(function() {
    $(this).gentleSelect({
      prompt: "Двигатель",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--location').each(function() {
    $(this).gentleSelect({
      prompt: "Расположение",
      rows: 4,
      itemWidth: 100,
      maxDisplay: 2
    });
  });

  $('.japanese-select--warehouse').each(function() {
    $(this).gentleSelect({
      prompt: "Склад",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 2
    });
  });

  $('.japanese-select--radius').each(function() {
    $(this).gentleSelect({
      prompt: "Радиус",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--width').each(function() {
    $(this).gentleSelect({
      prompt: "Ширина",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--height').each(function() {
    $(this).gentleSelect({
      prompt: "Высота",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--season').each(function() {
    $(this).gentleSelect({
      prompt: "Сезонность",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--type').each(function() {
    $(this).gentleSelect({
      prompt: "Тип",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--sortie').each(function() {
    $(this).gentleSelect({
      prompt: "Вылет",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });

  $('.japanese-select--drilling').each(function() {
    $(this).gentleSelect({
      prompt: "Сверловка",
      columns: 1,
      itemWidth: 100,
      maxDisplay: 1
    });
  });
});