$(function($) {
  $("input[type='checkbox']").prop({ checked: false });
  $("#c-sym").val("");
  $("#c-oct").val("");
  $(".m").change(function(e) {
    var target = $(e.target);
    switch (true) {
      case target.is("#c-oct"):
        $("input[type='checkbox']").prop({ checked: false });
        $("#c-sym").val("");
        var chmod = $.trim(target.val());
        var chmodLength = chmod.length;
        var chmodsym = "";
        var valid = true;
        target.parent().removeClass("has-error");
        $("#c-sym")
          .parent()
          .removeClass("has-error");

        if (!isNumber(chmod)) {
          valid = false;
        }
        if (chmodLength == 3) {
          if (chmod.charAt(0) < 0 || chmod.charAt(0) > 7) {
            valid = false;
          }
          if (chmod.charAt(1) < 0 || chmod.charAt(1) > 7) {
            valid = false;
          }
          if (chmod.charAt(2) < 0 || chmod.charAt(2) > 7) {
            valid = false;
          }
        } else {
          valid = false;
        }

        if (valid) {
          if (chmod >= 400) {
            $("#c-o-r").prop("checked", true);
            chmod -= 400;
            chmodsym += "r";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 200) {
            $("#c-o-w").prop("checked", true);
            chmod -= 200;
            chmodsym += "w";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 100) {
            $("#c-o-x").prop("checked", true);
            chmod -= 100;
            chmodsym += "x";
          } else {
            chmodsym += "-";
          }

          if (chmod >= 40) {
            $("#c-g-r").prop("checked", true);
            chmod -= 40;
            chmodsym += "r";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 20) {
            $("#c-g-w").prop("checked", true);
            chmod -= 20;
            chmodsym += "w";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 10) {
            $("#c-g-x").prop("checked", true);
            chmod -= 10;
            chmodsym += "x";
          } else {
            chmodsym += "-";
          }

          if (chmod >= 4) {
            $("#c-p-r").prop("checked", true);
            chmod -= 4;
            chmodsym += "r";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 2) {
            $("#c-p-w").prop("checked", true);
            chmod -= 2;
            chmodsym += "w";
          } else {
            chmodsym += "-";
          }
          if (chmod >= 1) {
            $("#c-p-x").prop("checked", true);
            chmod -= 1;
            chmodsym += "x";
          } else {
            chmodsym += "-";
          }
        } else {
          target.parent().addClass("has-error");
          $("#c-sym").val("");
        }

        break;

      case target.is("input[type='checkbox']"):
        var chmodsym = "";
        var chmod = 0;
        $("#c-sym")
          .parent()
          .removeClass("has-error");
        $("#c-oct")
          .parent()
          .removeClass("has-error");

        if ($("#c-o-r").prop("checked")) {
          chmod += 400;
          chmodsym += "r";
        } else {
          chmodsym += "-";
        }
        if ($("#c-o-w").prop("checked")) {
          chmod += 200;
          chmodsym += "w";
        } else {
          chmodsym += "-";
        }
        if ($("#c-o-x").prop("checked")) {
          chmod += 100;
          chmodsym += "x";
        } else {
          chmodsym += "-";
        }

        if ($("#c-g-r").prop("checked")) {
          chmod += 40;
          chmodsym += "r";
        } else {
          chmodsym += "-";
        }
        if ($("#c-g-w").prop("checked")) {
          chmod += 20;
          chmodsym += "w";
        } else {
          chmodsym += "-";
        }
        if ($("#c-g-x").prop("checked")) {
          chmod += 10;
          chmodsym += "x";
        } else {
          chmodsym += "-";
        }

        if ($("#c-p-r").prop("checked")) {
          chmod += 4;
          chmodsym += "r";
        } else {
          chmodsym += "-";
        }
        if ($("#c-p-w").prop("checked")) {
          chmod += 2;
          chmodsym += "w";
        } else {
          chmodsym += "-";
        }
        if ($("#c-p-x").prop("checked")) {
          chmod += 1;
          chmodsym += "x";
        } else {
          chmodsym += "-";
        }

        if (chmod < 10) {
          chmod = "00" + "" + chmod;
        } else if (chmod < 100) {
          chmod = "0" + "" + chmod;
        }
        $("#c-oct").val(chmod);
        $("#c-sym").val(chmodsym);

        break;

      case target.is("#c-sym"):
        $("input[type='checkbox']").prop({ checked: false });
        var chmod = 0;
        var chmodsym = $.trim(target.val());
        var chmodsymLength = chmodsym.length;

        var valid = true;

        target.parent().removeClass("has-error");
        $("#c-oct")
          .parent()
          .removeClass("has-error");

        if (chmodsymLength == 10) {
          if (chmodsym.charAt(0) == "d") {
            chmodsym = chmodsym.substring(1);
            chmodsymLength = chmodsym.length;
          } else if (chmodsym.charAt(0) == "-") {
            chmodsym = chmodsym.substring(1);
            chmodsymLength = chmodsym.length;
          } else {
            valid = false;
          }
        }
        if (chmodsymLength == 9) {
          if (chmodsym.charAt(0) == "r") {
            $("#c-o-r").prop("checked", true);
            chmod += 400;
          } else if (chmodsym.charAt(0) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(1) == "w") {
            $("#c-o-w").prop("checked", true);
            chmod += 200;
          } else if (chmodsym.charAt(1) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(2) == "x") {
            $("#c-o-x").prop("checked", true);
            chmod += 100;
          } else if (chmodsym.charAt(2) != "-") {
            valid = false;
          }

          if (chmodsym.charAt(3) == "r") {
            $("#c-g-r").prop("checked", true);
            chmod += 40;
          } else if (chmodsym.charAt(3) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(4) == "w") {
            $("#c-g-w").prop("checked", true);
            chmod += 20;
          } else if (chmodsym.charAt(4) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(5) == "x") {
            $("#c-g-x").prop("checked", true);
            chmod += 10;
          } else if (chmodsym.charAt(5) != "-") {
            valid = false;
          }

          if (chmodsym.charAt(6) == "r") {
            $("#c-p-r").prop("checked", true);
            chmod += 4;
          } else if (chmodsym.charAt(6) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(7) == "w") {
            $("#c-p-w").prop("checked", true);
            chmod += 2;
          } else if (chmodsym.charAt(7) != "-") {
            valid = false;
          }
          if (chmodsym.charAt(8) == "x") {
            $("#c-p-x").prop("checked", true);
            chmod += 1;
          } else if (chmodsym.charAt(8) != "-") {
            valid = false;
          }
        } else {
          valid = false;
        }
        if (valid) {
          $("#c-oct").val(chmod);
        } else {
          target.parent().addClass("has-error");
          $("#c-oct").val("");
        }
        break;
    }
  });
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
});
