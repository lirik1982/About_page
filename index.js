
document.addEventListener("DOMContentLoaded", function () {

  //проверка, нет ли клика вне меню бургера и строки поиска
  document.querySelectorAll('*').forEach(v => {
    v.onclick = function (event) {
      console.log("клик " + event.target.id);
      switch (event.target.id) {
        case "header-burger":
          document.querySelector('.header-logo-mobile').classList.remove("is-active");
          document.querySelector('.header-burger').classList.remove("is-active");
          document.querySelector(".burger-menu").classList.add('is-active');
          event.stopImmediatePropagation();
          break;
        case "burger-cancel-icon":
          console.log('убираем меню');
          document.querySelector('.header-logo-mobile').classList.add("is-active");
          document.querySelector('.header-burger').classList.add("is-active");
          document.querySelector(".burger-menu").classList.remove('is-active');
          event.stopImmediatePropagation();
          break;
        default:
          document.querySelector('.header-logo-mobile').classList.add("is-active");
          document.querySelector("#burger-menu").classList.remove("is-active");
          document.querySelector('.header-burger').classList.add("is-active");
          break;
      }
    }
  });

  //аккордеон в разделе "гости"
  $(function () {
    $("#accordion").accordion({
      heightStyle: "content",
      icons: false,
      collapsible: true,
      active: 0,
      header: '.element-listitem-header'
    });

    $(".refresh").click(function () {
      $("#accordion").accordion({
        collapsible: true,
        active: false
      });
    })
  });


  $(document).ready(function () {
    $(".element-item").hide(); // Скрытое содержимое
    $(".element-item.is-on").fadeIn(); // Показ первого контента таба
  });



  document.querySelectorAll('.element-listitem-content__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      $('.element-item').hide('slow');
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.element-listitem-content__link').forEach(function (btn) {
        btn.classList.remove('is-on');
      });
      e.currentTarget.classList.add('is-on');
      document.querySelectorAll('.element-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-on');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-on');
      $('.element-item.is-on').fadeIn('slow');

      if (clientWidth < 768)
        document.querySelector('#element-info').scrollIntoView({ behavior: 'smooth' })
    });
  });




  window.onresize = function () {
    document.querySelector('.header-logo-mobile').classList.add("is-active");
    document.querySelector("#burger-menu").classList.remove("is-active");
    document.querySelector('.header-burger').classList.add("is-active");
    console.log("resize");
    hidden_check();
  }

});
