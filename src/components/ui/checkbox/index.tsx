import styles from './style.module.scss'

interface ICheckbox {
    onChange: () => void,
    checked: boolean,
    name?: string,
    value?: string
}
export default function Checkbox ({ onChange, checked, name }: ICheckbox) {

    return (
        <div 
            className={styles.customCheckbox}
            data-testid="checkbox-container"
        >
            <input
                type="checkbox"
                name={name || ''}
                checked={checked}
                onChange={onChange}
            />
            <span className={styles.checkmark}></span>
        </div>
    )
}