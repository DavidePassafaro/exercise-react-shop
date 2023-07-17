import { useUploadFile } from "@shared/hooks";
import { NewProduct, Product } from "@shared/models";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export interface CMSProductsFormProps {
  activeItem?: Partial<Product> | null;
  onSave: (product: Product) => void;
  onClose: () => void;
}

const initialFormData: NewProduct = {
  name: "",
  cost: 0,
  description: "",
  img: "",
};

export function CMSProductsForm({
  activeItem,
  onSave,
  onClose,
}: CMSProductsFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [dirty, setDirty] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState("");
  const { uploadFile } = useUploadFile();

  useEffect(() => {
    if (activeItem?.id) setFormData({ ...initialFormData, ...activeItem });
    else setFormData({ ...initialFormData });
    setDirty(false);
    setUploadedImage("");
  }, [activeItem]);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(formData as Product);
  }

  function removeImageHandler() {
    setFormData((formData) => ({ ...formData, img: "" }));
    setDirty(true);
  }

  function changeHandler({
    currentTarget,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((formData) => ({
      ...formData,
      [currentTarget.name]: currentTarget.value,
    }));
    setDirty(true);
  }

  function fileHandler(event: ChangeEvent<HTMLInputElement>) {
    setUploadedImage(event.currentTarget.value);

    uploadFile(event.target.files![0])
      .then((img: string) => setFormData((formData) => ({ ...formData, img })))
      .catch((error) => {
        console.error("Error: ", error);
        alert("An error occurs while uploading the image");
        setUploadedImage("");
      });
  }

  const isNameValid: boolean = !dirty || !!formData.name?.length;
  const isCostValid: boolean = !dirty || formData.cost > 0;
  const isFormValid: boolean = isNameValid && isCostValid;

  return (
    <div
      className={clsx(
        "fixed bg-slate-200 z-10 text-black top-0 w-96 h-full transition-all overflow-auto",
        activeItem ? "right-0" : "-right-96"
      )}
    >
      <form onSubmit={submitHandler}>
        <div className="flex justify-around h-16">
          <button
            type="submit"
            className="text-white w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
            disabled={!isFormValid}
          >
            SAVE
          </button>

          <button
            type="button"
            className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>

        {formData.img && (
          <div className="relative">
            <img className="w-full" src={formData.img} alt={formData.name} />

            <div
              className="absolute top-1 right-0 cursor-pointer"
              onClick={removeImageHandler}
            >
              <i className="fa fa-close fa-2x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <label className="flex flex-col gap-3 mx-3 mt-16">
          Product name:
          <input
            type="text"
            className={clsx({ error: !isNameValid })}
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </label>

        <label className="flex flex-col gap-3 mx-3 mt-16">
          Product cost:
          <input
            type="number"
            className={clsx({ error: !isCostValid })}
            name="cost"
            value={formData.cost}
            onChange={changeHandler}
          />
        </label>

        <label className="flex flex-col gap-3 mx-3 mt-16">
          Product description:
          <textarea
            name="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </label>

        <label className="flex flex-col gap-3 mx-3 mt-16">
          Product image:
          <input
            type="file"
            className="btn primary"
            name="img"
            value={uploadedImage}
            accept="image/*"
            onChange={fileHandler}
          />
        </label>
      </form>
    </div>
  );
}
