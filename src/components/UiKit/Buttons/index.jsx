import styles from './styles.module.scss'


export const FieldButton = ({ 
  children, 
  left = false, 
  right = false, 
  type = "default", 
  view = false, 
  className = "",
  onClick
}) => {

  const buttonTypes = {
    "bg8": "text-white bg-white8  hover:bg-white16 active:bg-white16",
    "bg16": "text-white bg-white16  hover:bg-white8 active:bg-white8",
    "bgPink": "text-white bg-brandPink  hover:bg-[#D4266E] active:bg-[#D4266E]",
    "bgBlueLight": "text-brandBlue bg-brandBlue8  hover:bg-brandBlue16 active:bg-brandBlue16",
    "bgRed": "text-errorRed bg-red8 hover:bg-red16 active:bg-red16",
    "default": "text-black bg-white hover:bg-[#EBEBEB] active:bg-[#EBEBEB]",
  }

  if (view) {
    return (
      <button onClick={onClick} className={`${styles.fieldButtonCircle} ${buttonTypes[type]} ${className}`}>
        <i className={`ri-add-line`}></i>
      </button>
    )
  }

  return (
    <button onClick={onClick} className={`${styles.fieldButton} ${buttonTypes[type]} ${className}`}>
      {left ? 
      <span className="mr-[1.1rem]"><i className="ri-add-line"></i></span>
      : null}

      {children}

      {right ? 
      <span className="ml-[1.1rem]"><i className="ri-add-line"></i></span>
      : null}
    </button>
  )
}

export const SliderButton = ({onClick, left = false, className}) => {
  
  return (
    <button 
      onClick={onClick}
      className={`${className} w-[5.6rem] h-[5.6rem] bg-white8 ${left && "mr-10" }
        rounded-full text-white text-[2rem] inline-flex items-center justify-center
        hover:bg-white16 active:scale-95 transition-all
        `}
    >
      {
        left ? 
        <i className="ri-arrow-left-s-line"></i>
        :
        <i className="ri-arrow-right-s-line"></i>
      }
    </button>
  )
}
