import { Upload, Info } from "lucide-react";
import { Heading } from "@medusajs/ui";
import React, { useRef, useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { uploadMediaFiles } from "../../lib/medias";
import { DigitalProduct, MediaType } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sdk } from "../../lib/config";

export const imageTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];
export const modelExtensions = [
  "glb",
  "gltf",
  "obj",
  "fbx",
  "stl",
  "usdz",
  "3ds",
  "dae",
  "ply",
  "x3d",
  "wrl",
  "vrml",
];

type FileItem = {
  file?: File;
  type: "image" | "model";
  preview: string | null;
};
function MediaUpload({ product }: { product?: DigitalProduct }) {
  const queryClient = useQueryClient();

  const [Error, setError] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutateAsync: addMedias } = useMutation({
    mutationFn: async (
      medias: {
        type: MediaType;
        fileId: string;
        mimeType: string;
      }[]
    ) => {
      await sdk.client.fetch(`/admin/digital-products/${product?.id}/medias`, {
        method: "POST",
        body: {
          medias,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["digital-products"],
      });
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const res = await uploadMediaFiles(
      MediaType.PREVIEW,
      Array.from(e.target.files)
    );

    if (res?.files && res.medias) {
      const medias = res?.medias.map((media, idx) => ({
        type: MediaType.PREVIEW,
        fileId: res.files[idx].id,
        mimeType: media.type,
      }));
      console.log(medias)
      addMedias(medias);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.files;
    if (data?.length) {
      const dataTransfer = new DataTransfer();
      Array.from(data).forEach((file) => dataTransfer.items.add(file));
      if (fileInputRef.current) {
        fileInputRef.current.files = dataTransfer.files;
        fileInputRef.current.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      }
    }
  };
  return (
    <div className="flex flex-col justify-center space-y-2">
      
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium">
              Drag and drop or click to upload
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Supports multiple images (JPG, PNG) and 3D models (GLB, GLTF,
              etc.)
            </p>
            <div className="mt-2 flex items-center text-xs text-amber-600 bg-amber-50 p-2 rounded-md">
              <Info className="h-3 w-3 mr-1" />
              <span>3D model previews are not available in-browser</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png,.gif,.webp,.glb,.gltf,.obj,.fbx,.stl,.usdz,.3ds,.dae,.ply,.x3d,.wrl,.vrml"
              onChange={handleFileChange}
              multiple
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MediaUpload;
