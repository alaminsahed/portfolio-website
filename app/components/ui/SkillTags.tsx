import { cva } from "class-variance-authority";

export const skillTagsVariants: any = cva(
  "text-sm font-medium mr-2 lg:px-1 lg:px-2.5 lg:py-0.5 rounded-sm border",
  {
    variants: {
      variant: {
        default:
          "bg-blue-100 text-blue-800 dark:bg-transparent dark:text-blue-400 border-blue-400",
        red: "bg-red-100 text-red-800 dark:bg-transparent  dark:text-red-400 border-red-400",
        green:
          "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400",
        yellow:
          "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-400 border-yellow-400",
        purple:
          "bg-purple-100 text-purple-800 dark:bg-transparent dark:text-purple-400 border-purple-400",
        pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400",
        indigo:
          "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400",
        gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400",
        orange:
          "bg-orange-100 text-orange-800 dark:bg-gray-700 dark:text-orange-400 border-orange-400",
      },
    },
  }
);
