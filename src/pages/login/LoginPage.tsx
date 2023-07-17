import { ServerError } from "@shared/components";
import clsx from "clsx";
import { useLogin } from "./hook/useLogin";

export function LoginPage() {
  const { user, loginError, validators, actions } = useLogin();

  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      <form className="flex flex-col gap-3" onSubmit={actions.submitHandler}>
        <input
          type="text"
          className={clsx({ error: !validators.isUsernameValid })}
          placeholder="Insert your username"
          name="username"
          value={user.username}
          onChange={actions.changeHandler}
          required
        />

        <input
          type="password"
          className={clsx({ error: !validators.isPasswordValid })}
          placeholder="Insert password"
          name="password"
          value={user.password}
          onChange={actions.changeHandler}
          required
        />

        <button
          type="submit"
          className="btn primary"
          disabled={!validators.isFormValid}
        >
          SIGN IN
        </button>
      </form>

      {loginError && <ServerError>{loginError}</ServerError>}
    </div>
  );
}
