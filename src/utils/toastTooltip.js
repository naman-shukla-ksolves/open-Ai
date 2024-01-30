import { toast } from "react-toastify";

export const toastTooltip = (message, type, ms = 3000) => {
  toast(message, {
    position: "top-center",
    autoClose: ms,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    type: type,
    progress: undefined,
  });
};
