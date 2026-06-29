import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Disclosure() {
  return (
    <Alert className="bg-yellow-50 border-yellow-300">
      <AlertDescription className="text-yellow-900">
        <b>Disclosure:</b> Alignment is measured against mapped and assessed
        platform controls only and does not constitute certification or
        attestation.
      </AlertDescription>
    </Alert>
  );
}
