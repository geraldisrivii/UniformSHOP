export default {

    mounted(el, imageSrc) {
        let text = `, url('${imageSrc}') no-repeat center / cover;`
        el.style.background = getComputedStyle(el).background + text + ';'
    }
}