// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ejemplo básico: usuario 'admin', contraseña '1234'
    if (username === 'admin' && password === '1234') {
      toast({
        title: 'Login correcto',
        description: 'Bienvenido al sistema',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/dashboard');
    } else {
      toast({
        title: 'Error de acceso',
        description: 'Usuario o contraseña incorrectos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p={10} rounded="lg" shadow="md" width="100%" maxW="400px">
        <Heading mb={6} textAlign="center">
          Acceso Alma Verde
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Usuario</FormLabel>
            <Input
              placeholder="Introduce tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="green" width="100%" onClick={handleLogin}>
            Entrar
          </Button>
          <Text fontSize="sm" color="gray.500" textAlign="center">
            Usuario: <strong>admin</strong> – Contraseña: <strong>1234</strong>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
