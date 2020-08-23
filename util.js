export function enabableDrag(dragBox) {
    let curCell
    let offsetX = dragBox.offsetWidth / 2
    let offsetY = dragBox.offsetHeight / 2
    dragBox.addEventListener('mousedown', (e) => {
        document.addEventListener('mousemove', moveHandler)
    })
    dragBox.addEventListener('mouseup', (e) => {
        if (curCell) {
            curCell.style.background = ''
        }
        moveToCurCell()
        document.removeEventListener('mousemove', moveHandler)
    })
    function moveHandler(e) {
        let el = getCurrentCell(e)
        if (el !== null && el !== curCell) {
            if (!curCell) {
                curCell = el
            }
            curCell.style.background = ''
            curCell = el
            curCell.style.background = 'rgb(231,171,171)'
        }
        moveTo(e.clientX, e.clientY)
    }
    function getCurrentCell(e) {
        dragBox.hidden = true
        let el = document.elementFromPoint(e.clientX, e.clientY).closest('.dropple')
        dragBox.hidden = false
        return el
    }
    // 要防止dragBox 互相影响
    function moveToCurCell(e) {
        let rec = curCell.getBoundingClientRect()
        // let x = rec.x + rec.width / 2
        // let y = rec.y + rec.height / 2
        // moveTo(x, y)
        initBox()
        curCell.a
        curCell.appendChild(dragBox)
        curCell.style.height = curCell.childNodes.length * dragBox.offsetHeight
    }
    function initBox() {
        dragBox.style.position = 'static'
    }
    function moveTo(x, y) {
        dragBox.style.position = 'absolute'
        dragBox.style.left = x - offsetX
        dragBox.style.top = y - offsetY
    }
}