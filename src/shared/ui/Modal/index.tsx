import { useEffect, type FC, type ReactNode } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  className: string;
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}

export const CustomModal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onRequestClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='bg-black/50 fixed top-0 left-0 right-0 bottom-0 '
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      {children}
    </Modal>
  );
};
