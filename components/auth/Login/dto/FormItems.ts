export interface FormItemsProps {
  onChange: (text: string) => void;
  textLabel: string;
  style: any;
  value: string;
  placeholder: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
}
