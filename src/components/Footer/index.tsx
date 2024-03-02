import { Button } from '../Button';
import { Divider } from '../Divider';
import {
  ContactContainer,
  FooterContainer,
  InfosContainer,
  SocialContainer,
} from './styled';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <FooterContainer>
      <Divider />

      <ContactContainer>
        <div>
          <a href="#">
            <img src="/logolacreisaude2.svg" alt="Logo da Lacrei Saúde" />
          </a>
          <SocialContainer>
            <li>
              <a href="#">
                <img src="/facebook.svg" alt="Logo do Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/instagram.svg" alt="Logo do Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/linkedin.svg" alt="Logo do LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
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
            <a href="#">Quem Somos</a>
          </li>
          <li>
            <a href="#">Nosso Propósito</a>
          </li>
          <li>
            <a href="#">Missão, Visão e Valor</a>
          </li>
          <li>
            <a href="#">Acessibilidade</a>
          </li>
        </ul>

        <ul>
          <li>
            <span>Saúde</span>
          </li>
          <li>
            <a href="#">Buscar atendimento</a>
          </li>
          <li>
            <a href="#">Oferecer atendimento</a>
          </li>
        </ul>

        <ul>
          <li>
            <span>Segurança e Privacidade</span>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Direitos de Titular</a>
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
          <Button onclick={scrollToTop}>
            <img src="/arrow-up.svg" alt="Ícone seta apontada para cima" />
          </Button>
        </div>
      </InfosContainer>
    </FooterContainer>
  );
}
