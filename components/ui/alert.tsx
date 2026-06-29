import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Alert({ className = "", ...props }: AlertProps) {
  return (
    <div className={`rounded-3xl border px-4 py-3 ${className}`} {...props} />
  );
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function AlertDescription({ className = "", ...props }: AlertDescriptionProps) {
  return <p className={`text-sm ${className}`} {...props} />;
}
