import React, { forwardRef, useState, useRef, useCallback, useId, createContext, useContext } from 'react';
import './Tabs.css';

export type TabsVariant = 'underline' | 'pills' | 'enclosed';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: TabsVariant;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs compound components must be used within <Tabs>');
  return ctx;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: TabsVariant;
  defaultTab?: string;
  value?: string;
  onChange?: (tabId: string) => void;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface TabsTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}
export interface TabsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...rest }, ref) => {
    const { variant } = useTabsContext();
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('role') !== 'tab') return;

      const container = listRef.current;
      if (!container) return;

      const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
      const currentIndex = tabs.indexOf(target as HTMLButtonElement);
      let nextIndex = -1;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      if (nextIndex >= 0) {
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    }, []);

    const classNames = [
      'lex-tabs__list',
      `lex-tabs__list--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={(node) => {
          listRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={classNames}
        role="tablist"
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
TabsList.displayName = 'Tabs.List';

const TabsTab = forwardRef<HTMLButtonElement, TabsTabProps>(
  ({ value, className, children, ...rest }, ref) => {
    const { activeTab, setActiveTab, variant, baseId } = useTabsContext();
    const isActive = activeTab === value;

    const classNames = [
      'lex-tabs__tab',
      `lex-tabs__tab--${variant}`,
      isActive && 'lex-tabs__tab--active',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        role="tab"
        id={`${baseId}-tab-${value}`}
        aria-selected={isActive}
        aria-controls={`${baseId}-panel-${value}`}
        tabIndex={isActive ? 0 : -1}
        onClick={() => setActiveTab(value)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
TabsTab.displayName = 'Tabs.Tab';

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ value, className, children, ...rest }, ref) => {
    const { activeTab, baseId } = useTabsContext();
    const isActive = activeTab === value;

    if (!isActive) return null;

    const classNames = ['lex-tabs__panel', className].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        role="tabpanel"
        id={`${baseId}-panel-${value}`}
        aria-labelledby={`${baseId}-tab-${value}`}
        tabIndex={0}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
TabsPanel.displayName = 'Tabs.Panel';

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      variant = 'underline',
      defaultTab = '',
      value: controlledValue,
      onChange,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const baseId = useId();
    const [uncontrolledTab, setUncontrolledTab] = useState(defaultTab);
    const activeTab = controlledValue !== undefined ? controlledValue : uncontrolledTab;

    const setActiveTab = useCallback(
      (tabId: string) => {
        if (controlledValue === undefined) {
          setUncontrolledTab(tabId);
        }
        onChange?.(tabId);
      },
      [controlledValue, onChange]
    );

    const classNames = ['lex-tabs', className].filter(Boolean).join(' ');

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant, baseId }}>
        <div ref={ref} className={classNames} style={style} {...rest}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
) as React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>> & {
  List: typeof TabsList;
  Tab: typeof TabsTab;
  Panel: typeof TabsPanel;
};

Tabs.displayName = 'Tabs';
Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
