import { usePermission } from "./RBAC/hooks/usePermission";

export const Button = (props) => {
  const { children, action, ...rest } = props;
  const { hasActionPermisson } = usePermission();
  return (
    <button {...rest} disabled={!hasActionPermisson(action)}>
      {children}
    </button>
  );
};
