import { Button, Flex, Stack, ScaleFade } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { motion } from 'framer-motion';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const router = useRouter();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push('/dashboard');

    console.log(values);
  };

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: 20 }}
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex as='form' flexDir='column' bg='gray.800' p='8' borderRadius={8} onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing='4'>
          <Input type='email' name='email' label='E-mail' error={errors.email} {...register('email')} />

          <Input type='password' name='password' label='Senha' error={errors.password} {...register('password')} />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
