import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDevAuth } from "../../providers/auth-provider";

interface DevAuthModalProps {
  trigger?: React.ReactNode;
}

export function DevAuthModal({ trigger }: DevAuthModalProps) {
  const { setIsSignedIn } = useDevAuth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Sign In</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Development Authentication</DialogTitle>
          <DialogDescription>
            This is a mock authentication interface for development purposes.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button onClick={() => setIsSignedIn(true)}>
            Sign In as Test User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}