import styles from './style.module.scss'

interface IRadioCircle {
    onChange: () => void,
    checked: boolean,
    name?: string,
    value?: string
}
export default function RadioCircle ({ onChange, checked, name, value }: IRadioCircle) {

    return (
        <div 
            className={styles.customRadio}
            data-testid='radio-circle'
        >
            <input
                type="radio"
                name={name || ''}
                value={value || ''}
                checked={checked}
                onChange={onChange}
            />
            <span className={styles.radioMark}></span>
        </div>
    )
}