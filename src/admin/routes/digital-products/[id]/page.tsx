import { useDigitalProduct } from "../../../lib/digital-products";
import { useParams } from "react-router-dom";
import { Container, Heading, IconButton, DropdownMenu } from "@medusajs/ui";
import { EllipsisHorizontal } from "@medusajs/icons";
import { FocusModal } from "@medusajs/ui";
import EditMediasDialog from "../../../components/add-media-form/edit-medias-dialog";
import { imageTypes } from "../../../components/add-media-form/media-upload";
import { FileUp } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

function DigitalProductPage() {
  const { id } = useParams();
  const { data: product } = useDigitalProduct(id);

  return (
    <>
     <EditMediasDialog product={product} >
      <Container className="p-0">
        <div className=" p-4 flex justify-between  border-b items-center ">
          <Heading className=" " level="h1">
            {product?.name}
          </Heading>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton>
                <EllipsisHorizontal />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <FocusModal.Trigger asChild>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
              </FocusModal.Trigger>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {product?.medias?.map((media) => (
          <Card> 
            <CardContent> 
            
          { imageTypes.includes(media.mimeType) ? (
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
          )  }
          
          </CardContent>
          </Card>))}
        </div>
      </Container>
      </EditMediasDialog>
    </>
  );
}

export default DigitalProductPage;
