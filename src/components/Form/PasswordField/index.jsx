import { Input } from "antd";
import clsx from "clsx";
import {  useState } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import styles from './style.module.scss'

export const PasswordField = (props) => {
  const [inputType,setInputType] = useState('password')

  return (
    <Input
      {...props}
      className={clsx(
        styles.passwordField,
        props.className
      )}
      type={inputType}
      placeholder={props?.placeholder ?? "Введите пароль"}
      suffix={
        inputType === "password" ? (
          <RiEyeCloseFill className="text-white cursor-pointer" onClick={()=>setInputType('text')}/>
        ) : (
          <RiEyeFill className="text-white" onClick={()=>setInputType('password')}/>
        )
      }
    />
  );
};
