import { useEffect, useState } from "react";

export function Spinner() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const debounce: NodeJS.Timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(debounce);
  }, []);

  return show ? (
    <div className="flex w-full justify-center my-4">
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  ) : null;
}
