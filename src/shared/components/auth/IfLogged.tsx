import { selectIsUserLogged, useAuth } from "@shared/services";
import { PropsWithChildren, ReactNode } from "react";

interface ComponentProps extends PropsWithChildren {
  reverse?: boolean;
  elseNode?: ReactNode;
}

export function IfLogged({ children, reverse, elseNode }: ComponentProps) {
  const isUserLogged: boolean = useAuth(selectIsUserLogged);

  return (
    <>
      {(reverse ? !isUserLogged : isUserLogged) ? children : elseNode || null}
    </>
  );
}
