import { type FC, type ReactNode } from 'react';
import Modal from 'react-modal';
import { cn } from '@shared/lib/cn';

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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='bg-black/50 fixed top-0 left-0 right-0 bottom-0 '
      className={cn(
        'relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        className
      )}
      contentLabel='Our team modal'
      bodyOpenClassName='overflow-hidden'
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      {children}
    </Modal>
  );
};
