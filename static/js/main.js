(function() {
   var Slideshow = document.getElementById('Slideshow'), // Takes all DOM of Slideshow
   Elements = Slideshow.getElementsByTagName('li'), // Takes li elements
   autoPlay = true,
   length = Elements.length

   function changeTab() {
      if (autoPlay) { // If variable autoPlay is 'true' it will change tab autom.
         var radio
         for (var i=0; i < length; i++) { // It goes from first element to last
            radio = Elements[i].getElementsByTagName('input')[0] // Takes radio
            if (radio.checked) { // if actual is checked
               toggleClasses(i)
               return false
            }
         }
      }
   }

   Slideshow.addEventListener("click", function(){ // On click in slideshow
      autoPlay = false // Variable autoPlay goes false, so, no more autoPlay tabs
      var radio
      for (var i=0; i < length; i++) { // It goes from first element to last
         radio = Elements[i].getElementsByTagName('input')[0] // Takes radio
         if (radio.checked) { // if actual is checked
            toggleClasses(i)
         }
      }
   })

   function toggleClasses(c) { // c = current element
      var p = c-1, // (p)rev
      n = c+1 // (n)ext
      if (n === length) n = 0
      if (p < 0 ) p = length - 1
         // console.log('Prev = ' + (p) + ' | Current = ' + (c) + ' | Next = ' + (n))
      Elements[p].classList.toggle('prev') // Remove Previous class 'prev' to Previous tab
      Elements[c].classList.toggle('selected') // actual tab remove 'selected' class
      Elements[n].classList.toggle('next') // Remove 'next' class of next tab
      if (autoPlay) {
         Elements[c].classList.toggle('prev') // actual tab goes 'prev'
         Elements[n].classList.toggle('selected') // Next tab goes 'selected'
         Elements[n].getElementsByTagName('input')[0].checked = true
         var f = n+1
         if (f === length) f = 0
         Elements[f].classList.toggle('next') // Remove Next class to Next tab
      }
   }

   Elements[length-1].classList.toggle('prev')

   setInterval(changeTab, 2000) // Repite una función cada x segundos (x1000)
})()