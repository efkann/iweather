import * as Ariakit from '@ariakit/react';

interface ComboboxProps extends Ariakit.ComboboxProviderProps {
  placeholder: string;
  loadingIcon: React.ReactNode;
  children: React.ReactNode;
}

export default function Combobox({
  placeholder,
  loadingIcon,
  children,
  ...props
}: ComboboxProps) {
  return (
    <Ariakit.ComboboxProvider {...props}>
      <div className="relative">
        <Ariakit.Combobox
          placeholder={placeholder}
          maxLength={64}
          className="h-14 px-5 w-full text-md rounded-md border-none placeholder-gray-400 text-gray-100 bg-gray-secondary outline-1 data-[active-item]:outline-2 outline-offset-[-1px] outline-blue-600 data-[focus-visible]:outline [box-shadow:inset_0_0_0_1px_rgba(0_0_0/0.15),inset_0_2px_5px_0_rgba(0_0_0/0.08)]"
        />
        {loadingIcon}
      </div>
      <Ariakit.ComboboxPopover
        gutter={4}
        sameWidth
        unmountOnHide
        className="max-h-[min(var(--popover-available-height,300px),300px)] relative flex flex-col z-50 overscroll-contain overflow-auto rounded-lg bg-gray-500 text-black shadow-lg divide-y"
      >
        {children}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
  );
}

export const ComboboxItem = Ariakit.ComboboxItem;
