(function() {
   var Slideshow = document.getElementById('Slideshow') // Takes all DOM of Slideshow
   var Elements = Slideshow.getElementsByTagName('li') // Takes li elements
   var autoChange = true

   function changeTab() {
      if (autoChange) { // If variable autochange is 'true' it will change tab autom.
         var radio
         for (var i=0; i < Elements.length; i++) { // It goes from first element to last
            radio = Elements[i].getElementsByTagName('input')[0] // Takes radio
            if (radio.checked) { // if actual is checked
               var w = i+1 // Actual + 1 is going to be selected
               if (w == Elements.length) { w = 0 } // If i+1 > total elements, it goes 0
               Elements[w].getElementsByTagName('input')[0].checked = true // check next
               Elements[w].getElementsByTagName('label')[0].classList.toggle('selected') // next tab goes class checked
               Elements[i].getElementsByTagName('label')[0].classList.toggle('selected') // actual tab remove checked
               return false
            }
         }
      }
   }

   Slideshow.addEventListener("click", function(){ // On click in slideshow
      autoChange = false // Variable autochange goes false, so, no more autoChange tabs
      var Labels = Slideshow.getElementsByTagName('label'), radio
      for (var i=0; i < Elements.length; i++) { // It goes from first element to last
         radio = Elements[i].getElementsByTagName('input')[0] // Takes radio
         Elements[i].getElementsByTagName('label')[0].classList.remove('selected') // remove class 'selected' from all tabs
         if (radio.checked) { // if actual is checked
            Elements[i].getElementsByTagName('label')[0].classList.toggle('selected') // clicked tab goes selected class
         }
      }
   })

   setInterval(changeTab, 6000) // Repite una función cada x segundos (x1000)
})()