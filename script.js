$(function () {
  let count = 0;
  $("#register").on("click", function () {
    const task = $("#task").val();
    let delete_btn = '<button class="delete">削除</button>';
    $("#task_list").append(
      "<li data-count=" + count + ">" + task + delete_btn + "</li>"
    );
    count++;
  });

  //   $(document).on("click", ".delete", function () {
  //     console.log("aaa");
  //     console.log($(this).parent());
  //   });
  $(".delete").on("click", function () {
    console.log("unko");
  });
});
