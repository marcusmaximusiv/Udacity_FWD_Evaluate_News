// Import JS diles handling responses from the api 
import { checkUrl } from './js/checkUrl'
import { handleSubmit } from './js/formHandler'
//Import all CSS Stylings 
import './styles/base.scss'
import './styles/header.scss'
import './styles/resets.scss'
import './styles/footer.scss'
import './styles/form.scss'
//This area of the file exports all of the JS functions
export {
    handleSubmit,
    checkUrl
}