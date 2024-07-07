import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ReactPortal from "../reactportal";

interface InvoiceModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function InvoiceModal({
  children,
  isOpen,
  handleClose,
}: InvoiceModalProps) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="invoice-modal">
      <div className="fixed inset-0 h-screen bg-white w-full z-30 flex items-center justify-center">
        <ArrowLeftIcon
          className="absolute inset-4 w-12 p-2 z-20 rounded-full bg-slate-200"
          onClick={handleClose}
        />
        <div className="relative z-10 w-full h-screen rounded-lg p-5">{children}</div>
      </div>
    </ReactPortal>
  );
}
