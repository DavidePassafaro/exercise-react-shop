import { CartItem, OrderForm, OrderStatus, OrderUser } from "@shared/models";
import {
  selectCartList,
  selectClearCart,
  selectTotalCartCost,
  useCart,
  useOrdersService,
} from "@shared/services";
import { ChangeEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const EMAIL_REGEX: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function useCheckout() {
  const navigate: NavigateFunction = useNavigate();
  const [user, setUser] = useState<OrderUser>({
    name: "Mario Biondi",
    email: "marion.biondi@test.com",
  });
  const [dirty, setDirty] = useState<boolean>(false);
  const totalCartCost: number = useCart(selectTotalCartCost);
  const order: CartItem[] = useCart(selectCartList);
  const clearCart: () => void = useCart(selectClearCart);
  const { state: ordersState, actions } = useOrdersService();

  function changeHandler({ currentTarget }: ChangeEvent<HTMLInputElement>) {
    setUser((user) => ({ ...user, [currentTarget.name]: currentTarget.value }));
    setDirty(true);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const status: OrderStatus = OrderStatus.Pending;
    const orderInfo: OrderForm = { user, order, status, total: totalCartCost };

    actions
      .addOrder(orderInfo)
      .then(() => {
        clearCart();
        navigate("/thankyou");
      })
      .catch(console.error);
  }

  const isNameValid: boolean = !dirty || !!user.name.length;
  const isEmailValid: boolean = !dirty || !!user.email.match(EMAIL_REGEX);
  const isValid: boolean = isNameValid && isEmailValid;

  return {
    user,
    totalCartCost,
    validators: { isNameValid, isEmailValid, isValid },
    actions: { changeHandler, submitHandler },
    error: ordersState.error,
  };
}
