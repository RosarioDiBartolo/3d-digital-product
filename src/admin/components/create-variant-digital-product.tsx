import * as zod from "zod"
import { useForm } from "react-hook-form"
 
import { 
  FocusModal,
  Heading,
  Label,
  Input,
  Button,
  Badge,
} from "@medusajs/ui"
import { 
  FormProvider,
  Controller,
} from "react-hook-form"
import { AdminProductVariant } from "@medusajs/framework/types"
import { sdk } from "../lib/config"
import { useMutation,  useQueryClient } from "@tanstack/react-query"

const schema = zod.object({
  name: zod.string(),
})


export const CreateForm = (data: AdminProductVariant) => {
    const form = useForm<zod.infer<typeof schema>>({
      defaultValues: {
        name: data.title || "",
      },
    })
  
    const queryClient = useQueryClient()

    const {mutateAsync: createDigitalProduct} = useMutation({
      mutationFn: async (name: string)=>{
         
      console.log(name)
      sdk.client.fetch(`/admin/digital-products`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body:  {
          name ,
          variant_id: data.id
 
        }
      })
       
       },
       onSuccess: ()=>{
        queryClient.invalidateQueries({
          queryKey: ["product_variants", data.id ]
        })

       }
              
    })
    const handleSubmit = form.handleSubmit(({ name }) => {
      createDigitalProduct(name)
    })
  
    return(
        <FocusModal>
      <FocusModal.Trigger asChild>
        <Button>Create one</Button>
      </FocusModal.Trigger>
      <FocusModal.Content>
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col overflow-hidden"
          >
            <FocusModal.Header>
              <div className="flex items-center justify-end gap-x-2">
                  <FocusModal.Close asChild>
                    <Button size="small" variant="secondary">
                      Cancel
                    </Button>
                  </FocusModal.Close>
                  <FocusModal.Close asChild> 

                  <Button type="submit" size="small">
                    Save
                  </Button>
                  </FocusModal.Close>
                </div>
            </FocusModal.Header>
            <FocusModal.Body>
                <div className="flex flex-1 flex-col items-center overflow-y-auto">
                  <div className="mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16">
                    <div>
                      <Heading  >
                        Create a related digital product for <Badge >{data.title}</Badge> variant.
                      </Heading>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Controller
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center gap-x-1">
                                <Label size="small" weight="plus">
                                  Name
                                </Label>
                              </div>
                              <Input {...field} />
                            </div>
                          )
                        }}
                      />
                    </div>
                  </div>
                </div>
            </FocusModal.Body>
          </form>
        </FormProvider>
      </FocusModal.Content>
    </FocusModal>

    )
}  