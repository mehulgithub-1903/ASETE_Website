$(function () {
    $(window).on('scroll', function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topNav").classList.remove("navbar-light")
        document.getElementById("topNav").classList.add("navbar-dark")
        document.getElementById("topNav").style.transition = "all 1.2s";
        document.getElementById("logo").src ="./images/logo_white.png"
          document.getElementById("topNav").style.backgroundColor = "rgb(0, 0, 0)";
        }else{
          document.getElementById("topNav").classList.add("navbar-light")
          document.getElementById("topNav").classList.remove("navbar-dark")
          document.getElementById("topNav").style.transition = "all 1.2s";
          document.getElementById("logo").src ="./images/Logo.png"
          document.getElementById("topNav").style.backgroundColor = "transparent";
          
        }
    });
});
{/* <script>
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("topNav").style.backgroundColor = "rgb(0, 0, 0)";
        }else{
          document.getElementById("topNav").style.backgroundColor = "transparent";
        }
    }
</script>  */}