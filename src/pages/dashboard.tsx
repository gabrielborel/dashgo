import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-21T00:00:00.000Z',
      '2022-04-22T00:00:00.000Z',
      '2022-04-23T00:00:00.000Z',
      '2022-04-24T00:00:00.000Z',
      '2022-04-25T00:00:00.000Z',
      '2022-04-26T00:00:00.000Z',
      '2022-04-27T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 33, 59, 19, 98],
  },
];

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => setShowChart(true), []);

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: 20 }}
      direction='column'
      h='100vh'
    >
      <Header />

      <Flex w='100%' my='6' maxWidth={1300} mx='auto' px='6'>
        <Sidebar />

        {showChart && (
          <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
            <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb={4}>
              <Text fontSize='lg' mb='4'>
                Inscritos da semana
              </Text>
              <Chart options={options} series={series} type='area' height={160} />
            </Box>

            <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb={4}>
              <Text fontSize='lg' mb='4'>
                Taxa de abertura
              </Text>
              <Chart options={options} series={series} type='area' height={160} />
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
