import Link from "next/link";
import StyledButton from "./Button.styled";

const Button = ({
  url,
  variant,
  as,
  customButtonStyle,
  disabled,
  icon,
  iconMaterial,
  type,
  onClick,
  className,
  children,
  displayIconLeft
}) => {
  const ButtonElem = (
    <StyledButton
      as={as || variant === "text" ? "div" : null}
      variant={variant}
      customButtonStyle={customButtonStyle}
      disabled={disabled}
      hasIcon={!!icon || !!iconMaterial}
      hasChildren={!!children}
      onClick={onClick}
      type={type}
      className={className}
      displayIconLeft={displayIconLeft}
    >
      {icon && displayIconLeft && <i className={`icon ${icon}`} />}

      {iconMaterial && displayIconLeft && <span className='icon material-symbols-outlined'>{iconMaterial}</span>}

      {children && <span>{children}</span>}

      {icon && !displayIconLeft && <i className={`icon ${icon}`} />}

      {iconMaterial && !displayIconLeft && <span className='icon material-symbols-outlined'>{iconMaterial}</span>}
    </StyledButton>
  );
  if (url) {
    return <Link  href={url}>{ButtonElem}</Link>;
  }

  return ButtonElem;
};



Button.defaultProps = {
  url: undefined,
  variant: "primary",
  as: undefined,
  disabled: false,
  icon: undefined,
  iconMaterial: undefined,
  customButtonStyle: undefined,
  type: "button",
  className: undefined,
  onClick: () => {},
  children: undefined,
  displayIconLeft: false
};

export default Button;
