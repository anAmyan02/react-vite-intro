import styles from './Button.module.css'

export default function Button({children, isActive, ...props }){

    return (
        <button 
        {... props}
        className={isActive ? `${styles.button} ${styles.active}` : styles.button}
        >{children}</button>
        )
}