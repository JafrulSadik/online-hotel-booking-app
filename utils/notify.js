import Okey from "@/components/ui/svg/Okey";
import { Flip, toast } from "react-toastify";

export const successToast = (message) => {
  return toast(message, {
    icon: Okey,
    hideProgressBar: true,
    position: "top-right",
    transition: Flip,
  });
};