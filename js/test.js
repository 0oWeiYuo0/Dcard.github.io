        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("idhreftext").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.href')) {
     
            var clicklist = document.getElementsByClassName("hreftext");
            var i;
            for (i = 0; i < clicklist.length; i++) {
              var openlist = clicklist[i];
              if (openlist.classList.contains('show')) {
                  openlist.classList.remove('show');
              }
            }
          }
        }