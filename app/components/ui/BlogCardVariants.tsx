import { cva } from "class-variance-authority";

export const BlogCardVariants: any = cva(
  "py-10 pb-3 relative group cursor-pointer transition ease-out duration-300 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shadow-xs hover:shadow-md",
  {
    variants: {
      variant: {
        purple:
          "bg-purple-50 hover:bg-purple-100 dark:bg-slate-900/80 dark:hover:bg-purple-950/60 mt-72",
        indigo:
          "bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-900/80 dark:hover:bg-indigo-950/60 mt-32",
        red: "bg-rose-50 hover:bg-rose-100 dark:bg-slate-900/80 dark:hover:bg-rose-950/60 mt-5",
      },
    },
  },
);
