import Link from "next/link";
const LinkComp = ({ to, className, children, activeClassName, onClick, prevPath, openExternal, role, ...props }) => {

  return (
    <Link
      role={role}
      partiallyActive
      to={to}
      className={className}
      activeClassName={activeClassName}
      onClick={onClick}
      state={{ prevSlug: prevPath }}
      {...props}
    >
      {children}
    </Link>
  );
};



export default LinkComp;
