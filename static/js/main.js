(function() {
   var Slideshow = document.getElementById('Slideshow') // Takes all DOM of Slideshow
   var Elements = Slideshow.getElementsByTagName('li') // Takes li elements


   function changeTab() {
      var radio
      for (var i=0; i < Elements.length; i++) {
         radio = Elements[i].getElementsByTagName('input')[0]
         if (radio.checked) {
            var w = i+1
            if (w == Elements.length) { w = 0 }
            Elements[w].getElementsByTagName('input')[0].checked = true
            Elements[w].getElementsByTagName('label')[0].classList.toggle('selected')
            Elements[i].getElementsByTagName('label')[0].classList.toggle('selected')
            return false
         }
      }
   }

   setInterval(changeTab, 6000) // Repite una función cada x segundos (x1000)
})();