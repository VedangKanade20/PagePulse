// import { ZodObject, ZodError } from "zod";
// import { Request, Response, NextFunction } from "express";

// export const validate = (schema: ZodObject<any>) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       req.body = schema.parse(req.body);
//       next();
//     } catch (error) {
//       if (error instanceof ZodError) {
//         return res.status(400).json({
//           success: false,
//           error: {
//             code: "VALIDATION_ERROR",
//             message: "Invalid request body",
//             details: error.issues,
//           },
//         });
//       }

//       next(error);
//     }
//   };
// };

import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid request body",
          details: result.error.issues,
        },
      });
    }

    req.body = result.data;

    next();
  };
