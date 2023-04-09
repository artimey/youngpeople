import styles from './ContainerLayout.module.scss'

const ContainerLayout = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ContainerLayout