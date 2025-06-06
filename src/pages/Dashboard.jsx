// src/pages/Dashboard.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box minH="100vh" bg="green.50" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p={10} rounded="lg" shadow="md" width="100%" maxW="600px">
        <VStack spacing={6}>
          <Heading>Panel de Control</Heading>
          <Text fontSize="lg">Bienvenido a la aplicación de gestión de Alma Verde 🌱</Text>
          <Button colorScheme="red" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Dashboard;
