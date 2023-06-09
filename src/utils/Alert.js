import { toast } from 'react-toastify';

let commonError = 'OOPS! Something went wrong!';

const toastList = new Set();
const MAXIMUM_TOAST = 1;

export const Alert = (type, message = commonError) => {
  if (!navigator.onLine) {
    commonError = 'No internet connection';
  }
  switch (type) {
    case 1: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.success(message, {
          onClose: () => toastList.delete(id)
        });
        toastList.add(id);
      }
      break;
    }
    case 2: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.error(message, {
          onClose: () => toastList.delete(id)
        });
        toastList.add(id);
      }
      break;
    }
    case 3: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.info(message, {
          onClose: () => toastList.delete(id)
        });
        toastList.add(id);
      }
      break;
    }
    case 4: {
      var toastIdsConstant = 'Nointernetconnection';
      if (!toast.isActive(toastIdsConstant)) {
        toastIdsConstant = toast.error('No internet connection', {
          toastId: toastIdsConstant,
          className: 'toast-error'
        });
      }
    }
  }
};
