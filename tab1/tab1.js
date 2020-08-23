import { enabableDrag } from '../util.js'
window.onload = function () {
    let vm = new Vue({
        el: '.container',
        data: function () {
            return {
                x: 1,
                list: []
            }
        },
        methods: {
            makeList() {
                let names = ['YOU','CAN','NOT','DROP','HERE']
                for (let i = 0; i < 5; i++) {
                    this.$set(this.list,i,{list:[]})
                    for(let j=0;j<10;j++) {
                        let x = { id: i+''+j,name:''}
                        if(i === 0) {
                            x.name = names[j%5]
                        }
                        this.list[i].list.push(x)
                    }
                }
            }
        },
        mounted() {
            this.makeList()
            let dragBoxes = document.querySelectorAll('.drag-box')
            let i=0
            dragBoxes.forEach(box => {
                box.textContent= i++
                enabableDrag(box)
            })
        }
    })
}