declare module "react-step-progress-bar" {
  import React from "react";

  export interface ProgressBarProps {
    percent: number;
    filledBackground?: string;
    unfilledBackground?: string;
    children?: React.ReactNode;
  }

  export const ProgressBar: React.FC<ProgressBarProps>;

  export interface StepProps {
    position: number;
    children?: React.ReactNode | (({ accomplished }: { accomplished: boolean }) => React.ReactNode);
  }

  export const Step: React.FC<StepProps>;
}
