$(function () {
  let count = 0;

  $("#register").on("click", function () {
    const task = $("#task").val();
    let delete_btn =
      '<button class="delete">削除</button> <button class="completion_button">完了</button>';
    let do_name = $("[name=example]").val();
    if ($("#task").val() === "") {
      alert("登録できません。");
    } else {
      $("#task_list").append(
        "<li data-count=" + count + ">" + task + delete_btn + do_name + "</li>"
      );
      count++;
      $("#task").val("");
    }
  });

  $(document).on("click", ".delete", function () {
    $(this).parent().remove();
  });

  $(document).on("click", ".completion_button", function () {
    let back_btn =
      '<button class="delete">削除</button> <button class="return_button">戻す</button>';
    $("#completion_list").append(
      "<li data-count=" +
        count +
        ">" +
        $(this).parent().text().split("\n")[0].replace("削除 完了", "") +
        back_btn +
        "</li>"
    );
    $(this).parent().remove();
  });
  $(document).on("click", ".return_button", function () {
    delete_btn =
      '<button class="delete">削除</button> <button class="completion_button">完了</button>';
    $("#task_list").append(
      "<li data-count=" +
        count +
        ">" +
        $(this).parent().text().split("\n")[0].replace("削除 戻す", "") +
        delete_btn +
        "</li>"
    );
    $(this).parent().remove();
  });
  $("#reset").on("click", function () {
    $(".completion_list").children().remove();
  });
});
