import { FC } from "react";
import { Modale } from "~/ui/client";
import { BtnProps } from "~/ui/server";

interface ConfirmModaleProps extends BtnProps {
  title: string;
  content: string;
  onConfirm: () => void;
}

export const ConfirmModale: FC<ConfirmModaleProps> = ({
  content,
  onConfirm,
  title,
  ...props
}) => {
  return (
    <Modale>
      <Modale.Btn {...props} />
      <Modale.Portal>
        <Modale.overlayer>
          <Modale.Content asChild>
            <div className=" mx-2 w-full max-w-xs translate-y-8 rounded bg-theme p-4 text-center">
              <h2>{title}</h2>
              <p className=" py-6 leading-6">{content}</p>
              <div className=" flex justify-between">
                <Modale.Close variant="ghost">close</Modale.Close>
                <Modale.Close
                  className=" [--variant:--alert]"
                  onClick={onConfirm}
                >
                  confirm
                </Modale.Close>
              </div>
            </div>
          </Modale.Content>
        </Modale.overlayer>
      </Modale.Portal>
    </Modale>
  );
};
