import classNames from "classnames";
import "./IconButton.scss";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div
      className={classNames("icon-btn-container", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
