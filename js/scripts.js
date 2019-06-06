$(document).ready(function() {

  $(".btn").click(function(){

    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());

    var resulting = function(q1, q2, q3, q4) {
      return q1 + q2 + q3 + q4;

    }
    var results = resulting(q1, q2, q3, q4);


      if (results > 2) {
        $(".con").show();
        $(".mod").hide();
        $(".lib").hide();
      } else if (results < 2) {
        $(".lib").show();
        $(".con").hide();
        $(".mod").hide();
      } else {
        $(".mod").show();
        $(".con").hide();
        $(".lib").hide();
      }
    });
  });
// });
