import clsx from 'clsx';
import React, { useEffect } from 'react'
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useHistoryBack } from '../../app/hooks/useHistoryBack';
import { FieldButton } from '../UiKit/Buttons';
import styles from './AuthConfirmStatus.module.scss';

export const AuthConfirmStatus = ({ text, locale, error = false }) => {
  const { handleBack } =  useHistoryBack();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <span className="mb-[2.4rem]">
        {
          !error ?
          <RiCheckboxCircleFill className="w-[8.33rem] h-[8.33rem] text-successGreen" />
          :
          <RiCloseCircleFill className="w-[8.33rem] h-[8.33rem] text-errorRed" />
        }
      </span>

      <span className={clsx(styles.text, "druk")}>
        {text}
      </span>

      {
        !error ?
        <Link to="/sign_in">
          <FieldButton>
            Супер, войти
          </FieldButton>
        </Link>
        :
        <FieldButton onClick={handleBack}>test</FieldButton>
      }
    </div>
  )
}
