import s from "./Input.module.css"

export default function Input() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("Y yo qué sé?");
  };

  return (
    <div className={s.formCont}>
      <form className={s.inputCont} onSubmit={onSubmit}>
        <input className={s.inputSpace} placeholder="Envía un mensage." type="text" />
        <div className={s.submitButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke-width="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>  
        </div>
      </form>
    </div>
  );
}