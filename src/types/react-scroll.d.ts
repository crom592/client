declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    onClick?: () => void;
  }

  export const Link: React.FC<LinkProps & React.HTMLAttributes<HTMLElement>>;
  export const Element: React.FC<{ name: string } & React.HTMLAttributes<HTMLElement>>;
  export const scroller: {
    scrollTo(element: string, options?: { smooth?: boolean; duration?: number }): void;
  };
}
