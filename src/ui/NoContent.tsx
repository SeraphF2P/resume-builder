import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";
import { cn } from "~/lib/cva";
import { Icon } from "~/ui/server";

interface NoContentProps extends ComponentPropsWithoutRef<"div"> {
  caption?: ReactNode;
}

export const NoContent = forwardRef<ElementRef<"div">, NoContentProps>(
  ({ caption = "no content available", className, ...props }, ref) => {
    const Component = typeof caption === "string" ? <p>{caption}</p> : caption;
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          " m-auto  flex min-h-[135px] w-full max-w-[240px]  flex-col items-center justify-center gap-2 rounded bg-gray-300 px-4 py-2 text-center shadow  dark:bg-gray-500",
          className,
        )}
      >
        <Icon.info className="  size-24" />
        {Component}
      </div>
    );
  },
);
