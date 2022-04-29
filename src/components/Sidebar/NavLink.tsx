import { ElementType } from 'react';
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  href: string;
}

export const NavLink = ({ href, children, icon, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
