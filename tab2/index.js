import { enabableDrag } from '../util.js'
window.onload = function() {
    let lis = document.querySelectorAll('.dragBox')
    lis.forEach(item => {
        enabableDrag(item)
    })
}