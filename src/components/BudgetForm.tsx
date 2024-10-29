import { useState, ChangeEvent, useMemo, FormEvent } from "react";
import { useBudget } from "../hooks/useBudget";
export default function BudgetForm() {
  //Creamos el useState de budget que empezara en 0 y lo cambiamos mediante handleChange
  const [budget, setBudget] = useState(0);
  // Usamos el custom hooks de useBudget
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.name);
    //console.log(e.target.id);
    //console.log(e.target.value);
    //console.log(e.target.valueAsNumber);
    setBudget(e.target.valueAsNumber);
  };

  // Creamos un useMemo que valida cada vez que cambia budget para permitir enviar el formulario
  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  // Creamos el submit del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log("añadir");
    // Usamos el reducer para añadir un presupuesto
    dispatch({ type: "add-budget", payload: { budget } });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={isValid}
      />
    </form>
  );
}
