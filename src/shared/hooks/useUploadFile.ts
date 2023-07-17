export function useUploadFile() {
  function uploadFile(blob: Blob) {
    return new Promise<string>((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }

  return { uploadFile };
}
