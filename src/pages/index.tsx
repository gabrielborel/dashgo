import { Button, Flex, Stack, ScaleFade } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <ScaleFade
        initialScale={0.9}
        in
        delay={0.3}
        style={{ width: '100%', maxWidth: '360px' }}
      >
        <Flex as="form" flexDir="column" bg="gray.800" p="8" borderRadius={8}>
          <Stack spacing="4">
            <Input type="email" name="email" label="E-mail" />

            <Input type="password" name="password" label="Senha" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
}
