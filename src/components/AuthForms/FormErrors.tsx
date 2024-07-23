import { IFormErrors } from "@/types/AuthForms";
import { FaExclamationTriangle } from "react-icons/fa";

export function FormErrors({ message }: IFormErrors) {
  return (
    <div className="w-full">
      <p className="flex gap-1 items-center text-red-600 dark:text-red-500 p-3 text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
        <FaExclamationTriangle className="text-red-600 dark:text-red-500" />
        {message}
      </p>
    </div>
  );
}
