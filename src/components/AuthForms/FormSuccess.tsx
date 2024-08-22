import { IFormSuccess } from "@/types/AuthForms";
import { FaCheckCircle } from "react-icons/fa";

const FormSuccess = ({ message }: IFormSuccess) => {
  return (
    <div className="w-full">
      <p className="flex gap-4 items-center text-green-600 dark:text-green-500 p-3 rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
        <FaCheckCircle className="text-green-600 dark:text-green-500 flex-shrink-0" />
        {message}
      </p>
    </div>
  );
};

export default FormSuccess;
