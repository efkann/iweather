import * as Ariakit from '@ariakit/react';

interface SelectProps extends Ariakit.SelectProviderProps {
  label: string;
  children: React.ReactNode;
}

export default function Select({ label, children, ...props }: SelectProps) {
  return (
    <Ariakit.SelectProvider {...props}>
      <Ariakit.SelectLabel className="text-gray-200">{label}</Ariakit.SelectLabel>
      <Ariakit.Select className="cursor-default text-gray-100 font-medium w-[200px] flex justify-end h-10 items-center gap-1 rounded-lg border-none px-4 text-base select-none no-underline whitespace-nowrap aria-disabled:opacity-50 sm:gap-2 data-[focus-visible]:outline outline-2 outline-offset-2 outline-blue-600 capitalize" />
      <Ariakit.SelectPopover
        gutter={4}
        sameWidth
        className="z-50 flex flex-col rounded-lg border p-2 overflow-auto overscroll-contain border-gray-600 bg-gray-800 shadow-lg focus-visible:outline-2 focus-visible:outline-blue-600 -outline-offset-1 max-h-[min(var(--popover-available-height,300px),300px)]"
      >
        {children}
      </Ariakit.SelectPopover>
    </Ariakit.SelectProvider>
  );
}

export const SelectItem = Ariakit.SelectItem;
