import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
type TModalProps = {
  title: string;
  trigger: ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};
export function Modal({
  title,
  trigger,
  content,
  isOpen,
  setIsOpen,
}: TModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-4rem)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
