import { ReactNode } from 'react';
import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="sm">
        {title}
      </Text>

      <Stack spacing="4" mt="4" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
