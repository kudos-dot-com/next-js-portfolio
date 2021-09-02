import ButtonStyle from '../styles/button.module.scss'
const Button = ({title}) => {
    return ( 
        <div>
            <div>
                <button className={ButtonStyle.body}>{title}</button>
            </div>
        </div>
     );
}
 
export default Button;