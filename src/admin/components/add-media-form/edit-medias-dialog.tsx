import React, { PropsWithChildren, useRef, useState } from "react";
import { DigitalProduct, DigitalProductMedia } from "../../types";
import {
  Checkbox,
  Heading,
  CommandBar,
  Container,
  FocusModal,
  Button,
} from "@medusajs/ui";
import { cn } from "../../lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sdk } from "../../lib/config";
import {  FileUp, Info, Upload } from "lucide-react";
import MediaUpload, { imageTypes } from "./media-upload";
 
function EditMediasDialog({
  product,
  children,
}: PropsWithChildren<{ product?: DigitalProduct }>) {
  const [selected, setSelected] = useState<string[]>([]);

  const queryClient = useQueryClient();

  const { mutateAsync: deleteMedias } = useMutation({
    mutationFn: async () => {
      await sdk.client.fetch(`/admin/digital-products/${product?.id}/medias`, {
        method: "DELETE",
        body: {
          medias: selected,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["digital-products"],
      });

      setSelected([]);
    },
  });

  return (
    <FocusModal>
      {children}
      <FocusModal.Content>
        <FocusModal.Header>
          <Heading level="h2">Edit medias</Heading>
        </FocusModal.Header>
        <FocusModal.Body>
          <div className="p-6 space-y-6">
            {/* Media Preview Section */}
            <div className="grid grid-cols-3 gap-4 items-start">
              <div className=" col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {product?.medias?.map((media, idx) => {
                  const mediaSelected = selected.includes(media.id);
                  return (
                    <Container key={idx} className="relative group">
                      <Checkbox
                        onCheckedChange={() =>
                          setSelected((prev) =>
                            mediaSelected
                              ? prev.filter((mid) => mid !== media.id)
                              : [...prev, media.id]
                          )
                        }
                        className={cn(
                          "absolute top-3 left-3 transition-opacity duration-200",
                          mediaSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                      {imageTypes.includes(media.mimeType) ? (
                        <img
                          src={`/static/${media.fileId}` || "/placeholder.svg"}
                          alt={media.fileId}
                          className="w-full h-48 object-contain rounded"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-48 text-center px-4">
                          <FileUp className="h-10 w-10 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 truncate">
                            {media.fileId}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Preview not available
                          </p>
                        </div>
                      )}
                    </Container>
                  );
                })}
              </div>

              <MediaUpload product={product} />
            </div>

            <CommandBar open={selected.length !== 0}>
              <CommandBar.Bar>
                <CommandBar.Value>{selected.length} selected</CommandBar.Value>
                <CommandBar.Seperator />
                <CommandBar.Command
                  action={() => {
                    deleteMedias();
                  }}
                  label="Delete"
                  shortcut="d"
                />
              </CommandBar.Bar>
            </CommandBar>
          </div>
        </FocusModal.Body>
      </FocusModal.Content>
    </FocusModal>
  );
}

export default EditMediasDialog;
