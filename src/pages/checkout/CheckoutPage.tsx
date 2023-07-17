import clsx from "clsx";
import { useCheckout } from "./hook/useCheckout";

export function CheckoutPage() {
  const { user, totalCartCost, validators, actions } = useCheckout();

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="title">CHECKOUT</h1>

      <div className="flex justify-between text-xl my-3 pb-3 border-b">
        <div>Total:</div>

        <div>€ {totalCartCost}</div>
      </div>

      <form className="flex flex-col gap-3" onSubmit={actions.submitHandler}>
        {"Your name:"}
        <input
          className={clsx({ error: !validators.isNameValid })}
          type="text"
          placeholder="Insert your name"
          name="name"
          value={user.name}
          onChange={actions.changeHandler}
          required
        />

        {"Your email:"}
        <input
          className={clsx({ error: !validators.isEmailValid })}
          type="email"
          placeholder="Insert your email"
          name="email"
          value={user.email}
          onChange={actions.changeHandler}
          required
        />

        <div className="mt-3 flex justify-center">
          <button
            className={clsx("btn", validators.isValid ? "success" : "primary")}
            type="submit"
            disabled={!validators.isValid}
          >
            CONFIRM ORDER
          </button>
        </div>
      </form>
    </div>
  );
}
