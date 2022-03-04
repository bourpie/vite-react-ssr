import { Button, React } from "./index";

const SqLink = ({
  className,
  disableRipple = true,
  href,
  children,
}) => {

  return (
    <Button
      className={`sq-link ${className ?? ""}`}
      disableRipple={disableRipple}
      href={href}
    >
      {children}
    </Button>
  );
};
export { SqLink };
