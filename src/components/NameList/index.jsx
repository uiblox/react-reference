import classes from "./styles.module.css"

export const NameList = ({names}) => {
    return (
        <div className={classes['name-wrapper']}>
            {names === undefined ? "No data" : (
                names.map((name) => {
                    return <div key={name}>{name}</div>
                })
            )}
        </div>
    )
}