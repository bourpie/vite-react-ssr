import { Link, React } from "./index";

const SqLink = ({
  className,
  disableRipple = true,
  href,
  children,
}) => {

  return (

    <Link 
      href={href} 
      underline="always" 
      className={`sq-link ${className ?? ""}`}>
    {children}
  </Link>

  );
};
export { SqLink };
