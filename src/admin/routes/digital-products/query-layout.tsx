
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import DigitalProductsPage from './page'
import { defineRouteConfig } from "@medusajs/admin-sdk";
import { PhotoSolid } from "@medusajs/icons";
import { PropsWithChildren } from 'react';
function QueryLayout({children}: PropsWithChildren) {
  return (
    <QueryClientProvider client={new QueryClient()}>
        {children}
    </QueryClientProvider>    
)
}

 

export default QueryLayout