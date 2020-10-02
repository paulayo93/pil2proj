
let travelOpts = {
  "Select Travel Detail": "Select Travel Detail",
  "Lagos": "Lagos",
  "Aba": "Aba",
  "Abuja (Gudu)": "Abuja (Gudu)",
  "Asaba": "Asaba",
  "Calabar": "Calabar",
  "Enugu": "Enugu",
  "Onitsha": "Onitsha",
  "Owerri": "Owerri",
  "Port-Harcourt": "Port-Harcourt"
};



(function ($) {
  'use strict';

  $('.arrdate').hide();
  $('.hirearrdate').hide();

  $('#travfrom').select2();
  $('#travto').select2();
  $('#numpassenger').select2();
  $('#seatnum').select2();

  $('#deptdate').datetimepicker({
    format: 'll'
  });

  $('#arrdate').datetimepicker({
    format: 'll'
  });

  $('#hiredeptdate').datetimepicker({
    format: 'll'
  })
  $('#hirearrdate').datetimepicker({
    format: 'll'
  })

  setDeptTime();

  $.each(travelOpts, function (value, text) {
      $('#travfrom').append($("<option></option>")
          .attr("value", value).text(text));
  });



  /*-----------------
    sticky
    -----------------*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 85) {
      $('.pil-header__navigation').addClass('navbar-fixed-top');
    } else {
      $('.pil-header__navigation').removeClass('navbar-fixed-top');
    }
  });

  /*---------------------
    smooth scroll
    --------------------- */
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;

    if (target == '#home') {
      console.log(target);
      $('html, body').stop().animate(
        {
          scrollTop: 0,
        },
        1200
      );
    } else {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top - 80,
          },
          1200
        );
    }
  });
})(jQuery);

 
$('#oneway').click(function () {
  if ($('#oneway').is(':checked')) {
      $('.arrdate').hide();
  }
});

$('#roundtrip').click(function () {
  if ($('#roundtrip').is(':checked')) {
      $('.arrdate').show();
  }
});

$('#onewayhire').click(function () {
  if ($('#onewayhire').is(':checked')) {
      $('.hirearrdate').hide();
     
  }
});

$('#roundtriphire').click(function () {
  if ($('#roundtriphire').is(':checked')) {
      $('.hirearrdate').show();
     
  }
});

$('#travfrom').change(function () {
  let travelFrom = $('#travfrom option:selected').text()

  if (travelFrom && travelOpts.hasOwnProperty(travelFrom)) {

    $('#travto').empty();

      $.each(travelOpts, function (value, text) {
        if (travelFrom !== value) {
        $('#travto').append($("<option></option>")
            .attr("value", value).text(text));
        }
      });
  }
});

function setDeptTime() {
  $('#depttime').datetimepicker({
    format: 'LT',
    defaultDate: moment({ hour: 6, minute: 0 })
  });
}