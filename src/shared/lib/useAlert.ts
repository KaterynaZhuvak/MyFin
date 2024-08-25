import { useStore } from './useStore';

interface UseAlertHookResponse {
  createAlert: (
    message: string,
    status: 'pending' | 'success' | 'error'
  ) => void;
  updateAlert: (
    message: string,
    status: 'pending' | 'success' | 'error'
  ) => void;
}

export const useAlert = (): UseAlertHookResponse => {
  const { alertStore } = useStore();

  const createAlert = (
    message: string,
    status: 'pending' | 'success' | 'error'
  ): void => {
    alertStore.setMessage(message);
    alertStore.setPending(status === 'pending');
    alertStore.setSuccess(status === 'success');
    alertStore.setError(status === 'error');
    alertStore.toggleIsOpen();
  };

  const updateAlert = (
    message: string,
    status: 'pending' | 'success' | 'error'
  ): void => {
    alertStore.updateAlert(status, message);
  };

  return { createAlert, updateAlert };
};
