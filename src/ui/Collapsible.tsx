import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { ReactNode } from "react";
import { Btn } from "~/ui/server";
type CollapsapleTable = { children: ReactNode; text: string };
export function Collapsible({ children, text }: CollapsapleTable) {
  return (
    <RadixCollapsible.Root>
      <RadixCollapsible.Trigger asChild>
        <Btn className=" mx-auto" variant="ghost">
          {text}
        </Btn>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content asChild>
        <div className="  overflow-hidden data-[state='closed']:animate-slideUp data-[state='open']:animate-slideDown">
          {children}
        </div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
}
