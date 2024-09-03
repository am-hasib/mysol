import { z } from "zod";

const MAX_FILE_SIZE = 200;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const imageSchema = z.object({
    photo: z
      .any()
      // To not allow empty files
      .refine((files) => files?.length >= 1, { message: "Image is required." })
      // To not allow files other than images
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
        message: ".jpg, .jpeg, .png and .webp files are accepted.",
      })
      // To not allow files larger than 5MB
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
        message: `Max file size is 200KB.`,
      }),
  });