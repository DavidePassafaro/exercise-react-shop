export function Spinner() {
  return (
    <div className="flex w-full justify-center my-4">
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
