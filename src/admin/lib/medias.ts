import { FileDTO } from "@medusajs/framework/types";
import { MediaType } from "../types";

export const uploadMediaFiles = async (
  type: MediaType,
  medias: File[]
) => {
  const formData = new FormData();

  if (!medias.length) {
    return;
  }

  medias.forEach((media) => {
     
    formData.append("files", media);
  });

  const { files }: {files: FileDTO[]} = await fetch(`/admin/digital-products/upload/${type}`, {
    method: "POST",
    credentials: "include",
    body: formData,
  }).then((res) => res.json());

  return {
    medias,
    files,
  };
};
