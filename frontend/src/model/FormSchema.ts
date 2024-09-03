import { z } from "zod";
export const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  father: z.string().min(1, "Name is required"),
  centre: z.string().min(1, "Centre is required"),
  institute: z.string().min(1, "Institute is required"),
  dateOfBirth: z.object({
    date: z.string().min(1, "This field is required"),
    month: z.string().min(1, "This field is required"),
    year: z.string().min(1, "This field is required"),
  }),
  dateToWord: z.string(),
  roll: z
    .string()
    .regex(
      /^[1-9][0-9]{5}$/,
      "Roll must be 6 digits long and the first digit cannot be 0"
    ),
  reg: z
    .string()
    .regex(
      /^[1-9][0-9]{11}$/,
      "Reg must be 12 digits long and the first digit cannot be 0"
    ),
  session: z
    .string()
    .regex(
      /^((196[2-9]-(6[3-9]|7[0-9]|8[0-9]|9[0-9]))|(197[0-9]-(7[1-9]|8[0-9]|9[0-9]))|(198[0-9]-(8[1-9]|9[0-9]))|(1990-91))$/,
      "Year must be between 1962 and 1991"
    ),
  studentType: z.string().min(1, "This field is required"),
  studentGroup: z.string().min(1, "This field is required"),
  examYear: z
    .string()
    .min(1, "This field is required")
    .max(4, "Please insert a valid year")
    .regex(
      /^(196[2-9]|197[0-9]|198[0-9]|199[0-1])$/,
      "Year must be between 1962 and 1991"
    ),
  district: z.string().min(1, "This field is required"),
  thana: z.string().min(1, "This field is required"),
  held: z.string().min(1, "This field is required"),
  pub: z.string().min(1, "This field is required"),
});

export const step2Schema = z.object({
  banglaFirst: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),
  banglaSecond: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),
  banglaTotal: z.coerce.number(),
  englishFirst: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),
  englishSecond: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),
  englishTotal: z.coerce.number(),
  mathematicsMarsk: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),
  religionName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  religionMarks: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(40, "Marks Must Above 40")
    .max(100, "Marks Must Below 100"),

  subFiveName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subFiveTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subFivePractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subFiveTotal: z.coerce.number(),

  subSixName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subSixTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subSixPractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subSixTotal: z.coerce.number(),

  subSevenName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subSevenTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subSevenPractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subSevenTotal: z.coerce.number(),

  subEightName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subEightTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subEightPractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subEightTotal: z.coerce.number(),
  subNineName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subNineTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subNinePractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subNineTotal: z.coerce.number(),
  subTenName: z.coerce.string({
    invalid_type_error: "Please Select Subject",
  }),
  subTenTheory: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(25, "Marks Must Above 25")
    .max(75, "Marks Must Below 75"),
  subTenPractical: z.coerce
    .number({ invalid_type_error: "Pease Input Marks" })
    .min(8, "Marks Must Above 8")
    .max(25, "Marks Must Below 25"),
  subTenTotal: z.coerce.number(),

  totalMarks: z.coerce.number(),
  averageMarks: z.coerce.number(),
  grade: z.coerce.string(),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
