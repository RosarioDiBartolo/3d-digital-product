import { z } from "zod";
import { MediaType } from "../modules/digital-product/types";
export declare const createDigitalProductsSchema: z.ZodObject<{
    name: z.ZodString;
    medias: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof MediaType>;
        file_id: z.ZodString;
        mime_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }, {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }>, "many">;
    product: z.ZodObject<any, any, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }> | z.ZodEffects<any, any, any>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    medias?: {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }[];
    product?: any;
}, {
    name?: string;
    medias?: {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }[];
    product?: any;
}>;
export declare const addDigitalProductMediasSchema: z.ZodObject<{
    medias: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof MediaType>;
        fileId: z.ZodString;
        mimeType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type?: MediaType;
        fileId?: string;
        mimeType?: string;
    }, {
        type?: MediaType;
        fileId?: string;
        mimeType?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    medias?: {
        type?: MediaType;
        fileId?: string;
        mimeType?: string;
    }[];
}, {
    medias?: {
        type?: MediaType;
        fileId?: string;
        mimeType?: string;
    }[];
}>;
export declare const deleteDigitalProductMediasSchema: z.ZodObject<{
    medias: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    medias?: string[];
}, {
    medias?: string[];
}>;
