import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Borel</Text>
          <Text color="gray.300" fontSize="sm">
            biel_borel@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Borel"
        src="https://github.com/gabrielborel.png"
      />
    </Flex>
  );
};
