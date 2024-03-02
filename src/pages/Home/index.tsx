import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { MainContainer } from './styled';

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section />
        <Footer />
      </MainContainer>
    </>
  );
}
