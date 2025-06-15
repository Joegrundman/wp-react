import type { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

const textStyles = `
rounded
text-white
`;

const h1Styles = `
  text-3xl
  `;

export const H1: React.FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h1 className={`${textStyles} ${h1Styles} ${className ?? ""} `} {...props}>
    {children}
  </h1>
);

const h2Styles = `
  text-2xl
  `;

export const H2: React.FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h2 className={`${textStyles} ${h2Styles} ${className ?? ""} `} {...props}>
    {children}
  </h2>
);

const h3Styles = `
  text-xl
  `;

export const H3: React.FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h3 className={`${textStyles} ${h3Styles} ${className ?? ""} `} {...props}>
    {children}
  </h3>
);

const h4Styles = `
  text-lg
  `;

export const H4: React.FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h4 className={`${textStyles} ${h4Styles} ${className ?? ""} `} {...props}>
    {children}
  </h4>
);

const h5Styles = `
  text-semibold
  `;

export const H5: React.FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h5 className={`${textStyles} ${h5Styles} ${className ?? ""} `} {...props}>
    {children}
  </h5>
);

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const pStyles = `
  text-base
  `;
export const P: React.FC<ParagraphProps> = ({
  children,
  className,
  ...props
}) => (
  <p className={`${textStyles} ${pStyles} ${className ?? ""} `} {...props}>
    {children}
  </p>
);
