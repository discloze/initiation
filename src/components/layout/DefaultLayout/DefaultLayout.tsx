
import { ReactNode } from 'react';
import { Container } from '@mantine/core';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container w={'screen'} size="xl">
      {children}
    </Container>
  );
}

export default DefaultLayout;
