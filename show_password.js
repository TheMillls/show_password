$(document).ready(function () {
  $('input[type="password"]').each(function () {
    const $wrapper = $("<div>", {
      class: "password-wrapper",
      css: {
        position: "relative",
        display: "inline-block",
      },
    });

    const $icon = $("<span>", {
      class: "password-toggle",
      css: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        width: "20px",
        height: "20px",
        backgroundImage: "url(eye_close.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    });
    
    $(this).wrap($wrapper).after($icon);
    
    $icon.on("click", function () {
      const $input = $(this).prev("input");
      const isPassword = $input.attr("type") === "password";

      $input.attr("type", isPassword ? "text" : "password");

      $(this).css(
        "backgroundImage",
        isPassword ? "url(eye_open.svg)" : "url(eye_close.svg)"
      );
});
  });
});
