import { useCallback } from 'react';
import { Button } from '../Button';
import { Divider } from '../Divider';
import {
  ContactContainer,
  FooterContainer,
  InfosContainer,
  SocialContainer,
} from './styled';

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <FooterContainer data-testid="footer">
      <Divider />

      <ContactContainer>
        <div>
          <a href="#" role="button">
            <img src="/logolacreisaude2.svg" alt="Logo da Lacrei Saúde" />
          </a>
          <SocialContainer>
            <li>
              <a href="#" role="button">
                <img src="/facebook.svg" alt="Logo do Facebook" />
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <img src="/instagram.svg" alt="Logo do Instagram" />
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <img src="/linkedin.svg" alt="Logo do LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <img src="/email.svg" alt="Ícone de email" />
              </a>
            </li>
          </SocialContainer>
        </div>

        <ul>
          <li>
            <span>Lacrei Saúde</span>
          </li>
          <li>
            <a href="#" role="button">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Nosso Propósito
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Missão, Visão e Valor
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Acessibilidade
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <span>Saúde</span>
          </li>
          <li>
            <a href="#" role="button">
              Buscar atendimento
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Oferecer atendimento
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <span>Segurança e Privacidade</span>
          </li>
          <li>
            <a href="#" role="button">
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Termos de Uso
            </a>
          </li>
          <li>
            <a href="#" role="button">
              Direitos de Titular
            </a>
          </li>
        </ul>
      </ContactContainer>
      <Divider />
      <InfosContainer>
        <div>
          <p>
            A Lacrei não oferece tratamento médico emergencial. Em caso de
            emergência procure o hospital mais próximo.
          </p>
          <p>
            Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o
            site www.cvv.org.br
          </p>
          <p>
            Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ:
            51.265.351/0001-65
          </p>
        </div>
        <div>
          <Button onClick={scrollToTop}>
            <img src="/arrow-up.svg" alt="Ícone seta apontada para cima" />
          </Button>
        </div>
      </InfosContainer>
    </FooterContainer>
  );
}
