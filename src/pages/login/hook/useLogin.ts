import { User } from "@shared/models";
import {
  selectAuthError,
  selectIsUserLogged,
  selectLogin,
  useAuth,
} from "@shared/services";
import { ChangeEvent, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const TEST_USER: User = { username: "test@test.com", password: "Test01!!!!" };

export function useLogin() {
  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useState<User>(TEST_USER);
  const [dirty, setDirty] = useState<boolean>(false);

  const login: (user: User) => Promise<unknown> = useAuth(selectLogin);
  const loginError: string | null = useAuth(selectAuthError);
  const isUserLogged: boolean = useAuth(selectIsUserLogged);

  useEffect(() => {
    if (isUserLogged) navigate("/cms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLogged]);

  function changeHandler({ currentTarget }: ChangeEvent<HTMLInputElement>) {
    setUser((user) => ({ ...user, [currentTarget.name]: currentTarget.value }));
    setDirty(true);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(user);
  }

  const isUsernameValid: boolean = !dirty || !!user.username.length;
  const isPasswordValid: boolean = !dirty || !!user.password.length;
  const isFormValid: boolean = isUsernameValid && isPasswordValid;

  return {
    user,
    loginError,
    validators: { isUsernameValid, isPasswordValid, isFormValid },
    actions: { changeHandler, submitHandler },
  };
}
