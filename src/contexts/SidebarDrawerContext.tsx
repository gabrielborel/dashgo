import {
  useBreakpointValue,
  useDisclosure,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);
SidebarDrawerContext.displayName = 'SidebarDrawerContext';

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerContextProps) => {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (isWideVersion) disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
