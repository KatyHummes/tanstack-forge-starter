import { SignIn } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface AuthModalProps {
  trigger?: React.ReactNode;
}

export function AuthModal({ trigger }: AuthModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline">
            Sign In
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent w-auto">
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <SignIn 
          appearance={{
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
              showOptionalFields: false,
              logoPlacement: "none"
            },
            elements: {
              card: "shadow-2xl"
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}