import { Button } from '../Button';
import { Divider } from '../Divider';
import { ButtonContainer, ImageContainer, SectionContainer } from './styled';

export function Section() {
  return (
    <SectionContainer data-testid="section">
      <div>
        <h1>
          <span>Junte-se à</span>
          nossa comunidade
        </h1>

        <Divider
          width="10rem"
          height="3px"
          $margin="1rem 0px"
          color="#018762"
        />
        <p>
          Encontre atendimento clínico de qualidade ou entre para o time de
          profissionais da Lacrei Saúde.
        </p>
        <ButtonContainer>
          <Button color="#018762">Buscar atendimento</Button>
          <Button>Oferecer atendimento</Button>
        </ButtonContainer>
      </div>
      <ImageContainer>
        <img
          src="/imagem2I.jpg"
          alt="Uma médica segurando um tablet e conversando com uma paciente"
        />
      </ImageContainer>
    </SectionContainer>
  );
}
