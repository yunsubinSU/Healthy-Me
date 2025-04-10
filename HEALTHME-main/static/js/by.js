// 메뉴바 선택 시 해당 콘텐츠 표시
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".content").forEach(function (content) {
    content.style.display = "none"; // 초기에는 모든 콘텐츠 숨김
  });

  document.getElementById("menu1").addEventListener("click", function () {
    showContent(1);
  });
  document.getElementById("menu2").addEventListener("click", function () {
    showContent(2);
  });
  document.getElementById("menu3").addEventListener("click", function () {
    showContent(3);
  });
  document.getElementById("menu4").addEventListener("click", function () {
    showContent(4);
  });

  function showContent(menuNumber) {
    // 모든 콘텐츠 숨기기
    document.querySelectorAll(".content").forEach(function (content) {
      content.style.display = "none";
    });

    // 선택된 메뉴에 해당하는 콘텐츠만 표시
    document.getElementById("content" + menuNumber).style.display = "block";

    // 모든 메뉴에서 active 클래스 제거
    document.querySelectorAll(".ani-navbar-menu").forEach(function (menu) {
      menu.classList.remove("active");
    });

    // 클릭한 메뉴에 active 클래스 추가
    document.getElementById("menu" + menuNumber).classList.add("active");
  }
});

// jQuery 로드 함수
function loadJQuery(callback) {
  if (window.jQuery) {
    callback();
  } else {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.onload = callback; // jQuery 로드 완료 후 실행
    document.head.appendChild(script);
  }
}

// jQuery 코드 실행
loadJQuery(function () {
  //옆 슬라이더 바 내려오는 제이쿼리
  $(document).ready(function () {
    var $floating = $(".floating");
    var stopPosition = 150;
    var startOffset = 300;

    $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      var newTop = scrollTop + startOffset;

      if (scrollTop < stopPosition) {
        $floating.stop().animate({ top: newTop + "px" });
      } else {
        $floating.stop().animate({ top: stopPosition + "px" });
      }
    });
  });

  // 헤더랑 푸터 불러오는 제이쿼리
  $(function () {
    $("#header").load("../../common/header.html");
  });
  $(function () {
    $("#footer").load("../../common/footer.html");
  });
});

// 하트 숫자
document.addEventListener("DOMContentLoaded", function () {
  const check_btn = document.querySelectorAll(".check_icon");
  const count_btn = document.querySelectorAll(".counter");

  check_btn.forEach((item, index) => {
    let count = 0;
    item.addEventListener("click", (e) => {
      e.preventDefault();
      count_btn[index].textContent = ++count;
    });
  });
});

// 맨위로 올라가는 아이콘
document.addEventListener("DOMContentLoaded", function () {
  const go_top = document.querySelector(".page_up");
  go_top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
