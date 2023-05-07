import s from "../css/Input.module.css"

export default function Input() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("Y yo qué sé?");
  };

  return (
    <div className={s.formCont}>
      <form className={s.inputCont} onSubmit={onSubmit}>
        <input className={s.inputSpace} placeholder="Envía un mensage." type="text" />
        <button className={s.submitButton}>{'>>'}</button>
      </form>
    </div>
  );
}