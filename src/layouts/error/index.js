import template from './template.hbs'
import './style.css'

export default {
    selector: '.error-layout',
    template,
    props: {},
    mounted() {
        console.log('render error layout')
    }
}