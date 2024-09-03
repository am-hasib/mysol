import { z } from "zod";


export const gradeSchema = z.object({
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

export type GradeData = z.infer<typeof gradeSchema>;
