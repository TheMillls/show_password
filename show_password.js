$(document).ready(function () {
  // Добавляем иконки ко всем полям password
  $('input[type="password"]').each(function () {
    // Создаем обертку
    const $wrapper = $("<div>", {
      class: "password-wrapper",
      css: {
        position: "relative",
        display: "inline-block",
      },
    });

    // Создаем элемент для иконки
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
        backgroundImage: "url(/upload/eye_close.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    });

    // Оборачиваем input и добавляем иконку
    $(this).wrap($wrapper).after($icon);

    // Обработчик клика по иконке
    $icon.on("click", function () {
      const $input = $(this).prev("input");
      const isPassword = $input.attr("type") === "password";

      $input.attr("type", isPassword ? "text" : "password");

      // Меняем иконку
      $(this).css(
        "backgroundImage",
        isPassword ? "url(/upload/eye_open.svg)" : "url(/upload/eye_close.svg)"
      );
});
  });
});
