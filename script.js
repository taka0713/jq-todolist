$(function () {
  let count = 0;
  $("#register").on("click", function () {
    const task = $("#task").val();
    let delete_btn =
      '<button class="delete">削除</button> <button class="completion_button">完了</button>';

    if ($("#task").val() === "") {
      alert("登録できません。");
    } else {
      $("#task_list").append(
        "<li data-count=" + count + ">" + task + delete_btn + "</li>"
      );
      count++;
      $("#task").val("");
    }
  });

  $(document).on("click", ".delete", function () {
    $(this).parent().remove();
    console.log($(this).parent());
  });
  // $(".delete").on("click", function () {
  //   console.log("hoge");
  // });
  $(document).on("click", ".completion_button", function () {
    $("#completion_list").append(
      "<li data-count=" + count + ">" + $(this).parent() + "</li>"
    );

    $(this).parent().remove();
  });
});
