import React from "react";
import { LinkProps, Link } from "react-router-dom";

export const LinkBehavior = React.forwardRef<any, Omit<LinkProps, "to">>(
  (props, ref) => <Link ref={ref} to="/" {...props} role={undefined} />
);
