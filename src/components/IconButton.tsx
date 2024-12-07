import classNames from "classnames";
import "./IconButton.scss";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <div
      className={classNames("icon-btn-container", className, { disabled })}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </div>
  );
};

export default IconButton;
