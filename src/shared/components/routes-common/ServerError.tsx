import { PropsWithChildren } from "react";

export function ServerError({ children }: PropsWithChildren) {
  return (
    <div className="bg-red-700 text-white rounded-xl p-3 my-6">
      {children || "A server error occurs!"}
    </div>
  );
}
