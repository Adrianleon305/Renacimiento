
var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')
   
}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})





const announcementVersion = "311"; // Cambiar este valor cuando el anuncio cambie

        document.addEventListener("DOMContentLoaded", function() {
            const cookie = document.cookie.split("; ").find(row => row.startsWith("announcementVersion="));
            if (cookie && cookie.split('=')[1] === announcementVersion) {
                document.getElementById('announcementOverlay').style.display = 'none';
            } else {
                document.getElementById('announcementOverlay').style.display = 'flex';
                document.body.classList.add('no-scroll');
            }
        });

        function closeAnnouncement() {
            document.getElementById('announcementOverlay').style.display = 'none';
            document.body.classList.remove('no-scroll');
        }

        function closeAndSetCookie() {
            document.getElementById('announcementOverlay').style.display = 'none';
            document.body.classList.remove('no-scroll');
            // Set cookie to expire in 30 days (30 days * 24 hours * 60 minutes * 60 seconds)
            document.cookie = `announcementVersion=${announcementVersion}; max-age=${30*24*60*60}; path=/`;
        }
