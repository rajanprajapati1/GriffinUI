// type.ts
export type BadgeProps = {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error' | 'custom';
  icon?: React.ReactNode;
  onClose?: () => void;
  backgroundColor?: string;
  textColor?: string;
  count?: number;
  style  :string | any ;
};
