"use client"
import React from 'react';
import s from "./Input.module.css";
import { useAppDispatch } from '@/middlewares/redux/hooks';
import { newQuery } from '@/middlewares/features/chatSlice';

export default function Input() {
  const dispatch = useAppDispatch();

  let inputDisabled: boolean = false;

  let inputValue: string = "";

  const handleInput = (e: any) => {
    inputValue = e.target.value;
    return;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(newQuery(inputValue));
  }
  return (
    <div className={s.formCont}>
      <form className={s.inputCont} onSubmit={(e: any) => handleSubmit(e)}>
        <input
          className={s.inputSpace}
          placeholder="Envía un mensaje."
          type="text"
          onInput={(e: any) => handleInput(e)}
          />
        <button className={s.submitButton} type="submit" disabled={inputDisabled}>
          <div className={s.submitDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" color="var(--gray-600)" viewBox="0 0 16 16" fill="none">
              <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
            </svg>  
          </div>
        </button>
      </form>
    </div>
  );
};