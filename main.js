document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("button").addEventListener('click', function() {

    const circleDiv = document.createElement('div')

    

    circleDiv.classList.add('circle')
    createImageBitmap

    document.querySelector('.box').appendChild(circleDiv)

  })
})

