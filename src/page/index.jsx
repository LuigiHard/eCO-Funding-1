import React from 'react';
import { Carousel } from 'antd';
import Image from "../assets/images/image.png";


import './index.css';

const contentStyle = {
  position: 'relative',
  width: '100%',
  height: '716px', // Adjust the height as necessary
  color: '#fff', // Text color
  lineHeight: '160px',
  textAlign: 'center',
  background: `url(${Image}) no-repeat center center`,
  backgroundSize: 'cover',
  borderRadius: '0 0 60px 60px',
};

const textStyle = {
  fontSize: '48px', // Adjust the font size as necessary
  fontWeight: 'bold', // Font weight for the title
  textTransform: 'uppercase', // Uppercase text for the title
  margin: '0',
  position: 'absolute', // Positioning the text over the image
  top: '65%', // Center vertically
  left: '23%',
  transform: 'translate(-50%, -50%)', // Centering the text block
  width: '100%',
  padding: '0 20px', // Padding to ensure text does not touch the edges
  zIndex: 5, // Ensuring text is above the image
};
const subtextStyle = {
  position: 'absolute', // Absolute position within the relative container
  top: '60%', // Position below the main title
  left: '25%', // Center horizontally
  transform: 'translateX(-170%)', // Center the text block horizontally
  color: '#ffffff', // Subtext color for contrast, assuming a dark background
  textAlign: 'start', // Center the text horizontally
  fontSize: '18px', // Smaller font size for subtext
  maxWidth: '80%', // Max width to contain the text and maintain readability
  zIndex: 5, // High z-index to ensure visibility
  fontFamily: '"Core Narae Pro W01 Pro Bold", sans-serif',
};
const additionalTextStyle = {
  position: 'absolute', // Absolute position within the relative container
  top: '65%', // Position slightly below the subtext
  left: '25%', // Center horizontally
  transform: 'translateX(-50%)', // Center the text block horizontally
  color: '#ffffff', // Additional text color for contrast, assuming a dark background
  textAlign: 'center', // Center the text horizontally
  fontSize: '18px', // Same font size as subtext for consistency
  maxWidth: '80%', // Max width to match the subtext and maintain readability
  zIndex: 5, // High z-index to ensure visibility
  whiteSpace: 'pre-wrap', // Ensures that text formatting such as newlines are preserved
};



export default function Main() {
  const onChange = (currentSlide) => {
    console.log("Current slide is:", currentSlide);
  };
  ;
  return (
    <div className='main-container'>
      <div className='homepage'>
        <div className='hero-section'>
          <div className='top-header'>
            <div className='top-container'>
              <div className='full-white' />
              <div className='navigation-right'>
                <div className='navigation-menu'>
                  <span className='investir'>INVESTIR</span>
                  <span className='plataforma'>PLATAFORMA</span>
                  <span className='captar'>CAPTAR</span>
                  <span className='blog'>BLOG</span>
                </div>
                <button className='account-section'>
                  <span className='cadastre-se'>CADASTRE-SE</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className='search-section'>
  <Carousel autoplay dots={true} dotPosition="bottom" pauseOnHover={true}>
    <div className='hero'> 
      <div style={contentStyle}>
        <h1 style={textStyle}>Invista no futuro</h1>
        <p style={subtextStyle}>eCO is on a journey.</p>
        <p style={additionalTextStyle}>A eCO é a principal plataforma de investimentos sustentáveis do Brasil.</p>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <h1 style={textStyle}>Invista no futuro</h1>
        <p style={subtextStyle}>eCO is on a journey.</p>
        <p style={additionalTextStyle}>A eCO é a principal plataforma de investimentos sustentáveis do Brasil.</p>
      </div>
    </div>    
                  </Carousel>
          </div>
        </div>
        <div className='home-contents'>
          <div className='upcoming-flight-section'>
            <div className='upcoming-flight-section-1'>
              <div className='flight-details'>
                <div className='recent-searches'>
                  <div className='flight-main-container'>
                    <span className='descubra-maneiras-cumprir'>
                      Descubra maneiras de cumprir suas metas ESG e contribuir
                      para a realização de iniciativas socioambientais
                      certificadas.
                    </span>
                  </div>
                  <div className='flight-main-container-2'>
                    <span className='regulada-pela-cvm'>
                      Regulada pela CVM - Comissão de Valores Mobiliários.
                    </span>
                  </div>
                </div>
                <div className='prepare-menu'>
                  <div className='trip-menus'>
                    <div className='hotel'>
                      <div className='img' />
                    </div>
                    <div className='flight-main-container-3'>
                      <span className='comece-compensando-pegada'>
                        Comece compensando a pegada de carbono das suas
                        atividades administrativas.
                        <br />
                        <br />
                      </span>
                      <button className='frame-4'> 
                        <span className='compensar-pegada-carbono'>
                          Compensar pegada de carbono
                        </span>
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pop-destinations-main'>
            <div className='image'>
              <div className='rectangle' />
              <div className='destinations-titles'>
                <div className='title-container'>
                  <span className='como-funciona'>COMO FUNCIONA?</span>
                  <span className='modelo-full-service'>
                    Modelo full service na gestão de créditos de carbono. Desde
                    a geração de créditos de carbono, até a redução de gastos na
                    compra de créditos de carbono, gestão de emissões e uso de
                    ferramentas integradas de cálculo das emissões de CO2
                  </span>
                </div>
              </div>
              <div className='cards-container'>
                <div className='col'>
                  <div className='card'>
                    <div className='destination-details'>
                      <div className='pic-3' />
                      <span className='neutralizar-emissoes-co2'>
                        Neutralizar Emissões de CO2
                      </span>
                      <span className='negociar-comprar-registrar'>
                        Negociar, comprar e registrar créditos de carbono. Maior
                        diversidade e rastreabilidade de projetos certificados.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-5'>
                  <div className='card-6'>
                    <div className='destination-details-7'>
                      <div className='pic-4' />
                      <span className='cadastrar-projeto-ambiental'>
                        Cadastrar Projeto Ambiental
                      </span>
                      <span className='projetos-reduzam-emissoes'>
                        Projetos que reduzam as emissões de CO2 e impactos
                        ambientais e sociais podem participar
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-8'>
                  <div className='card-9'>
                    <div className='destination-details-a'>
                      <div className='pic-5' />
                      <span className='gestao-emissoes-co2-creditos'>
                        Gestão de Emissões de CO2 e Créditos
                      </span>
                      <span className='ferramenta-calculo-gestao-emissoes'>
                        Ferramenta de cálculo e gestão de emissões. Estoque e
                        registro de neutralizações de carbono.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-b'>
                  <div className='card-c'>
                    <div className='destination-details-d'>
                      <div className='pic-6' />
                      <span className='calculadoras-ferramentas-integracao'>
                        Calculadoras e Ferramentas de Integração
                      </span>
                      <span className='apis-calculadoras-online'>
                        APIs e calculadoras online para otimizar compensações e
                        engajar stakeholders
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-e'>
                  <div className='card-f'>
                    <div className='destination-details-10'>
                      <div className='img-3' />
                      <span className='apoio-cadeia-fornecedores'>
                        Apoiar a sua Cadeia de Fornecedores
                      </span>
                      <span className='desenvolvimento-projetos'>
                        Vamos desenvolver juntos, projetos de redução e/ou
                        captura de carbono na sua Cadeia de Fornecedores ou
                        outros setores.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-11'>
                  <div className='card-12'>
                    <div className='destination-details-13'>
                      <div className='pic-7' />
                      <span className='selo-neutralizacao-carbono'>
                        Selo de Neutralização de Carbono
                      </span>
                      <span className='certificar-acao-neutralizacao-carbono'>
                        Certificar a ação de neutralização de carbono e obter o
                        Selo e Certificado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='recommended-holidays-container'>
            <div className='rec-title'>
              <span className='entenda-eco'>Entenda a eCO</span>
            </div>
            <div className='rec-cards-container'>
              <div className='frame-14'>
                <div className='rec-card'>
                  <span className='text-1c'>-</span>
                  <button className='holiday-details'>
                    <div className='frame-15'>
                      <span className='neutralizar-emissoes-c'>
                        Neutralizar Emissoes de C02
                      </span>
                    </div>
                  </button>
                </div>
                <div className='rec-card-16'>
                  <span className='text-1e'>-</span>
                  <button className='holiday-details-17'>
                    <div className='frame-18'>
                      <span className='neutralizar-emissoes-c-19'>
                        Neutralizar Emissoes de C02
                      </span>
                    </div>
                  </button>
                </div>
                <div className='rec-card-1a'>
                  <span className='text-20'>-</span>
                  <button className='holiday-details-1b'>
                    <div className='frame-1c'>
                      <span className='neutralizar-emissoes-c-1d'>
                        Neutralizar Emissoes de C02
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className='rec-card-1e'>
                <div className='holiday-details-1f'>
                  <div className='card-info'>
                    <span className='o-que-e-credito-carbono'>
                      O que é crédito de carbono?
                    </span>
                    <span className='credito-carbono'>
                      Crédito de carbono, também conhecido como Reduções
                      Certificadas de Emissões (RCEs) é considerado um
                      certificado que comprova redução das emissões de gases de
                      efeito estufa de um projeto. Por convenção internacional,
                      cada crédito de carbono que for gerado corresponde a uma
                      tonelada de carbono que deixou de ser emitida na
                      atmosfera.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='popular-stays'>
            <div className='hotel-cards'>
              <div className='hotel-card'>
                <div className='hotel-card-20'>
                  <div className='stay-details'>
                    <div className='stay-details-rows'>
                      <span className='span-economia-regenerativa'>
                        A economia regenerativa é um movimento de todos
                      </span>
                      <span className='span-valorizar-financeiramente'>
                        Valorizar financeiramente o meio ambiente, considerando
                        sua relação com as pessoas, é uma forma de prevenir uma
                        crise socioambiental e conter a degradação desses
                        recursos.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hotel-card-21'>
                <div className='hotel-card-22'>
                  <span className='span-invistanofuturo'>
                    #Invistanofuturo
                    <br />
                  </span>
                  <span className='span-corporateesg'>#CorporateESG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-section'>
          <div className='share-your-travels-form'>
            <div className='text'>
              <span className='span-form-title-subtext'>
                Empresas e Compradores de Crédito de Carbono:
              </span>
              <span className='span-form-title'>
                Maior diversidade de projetos Transparência, rastreabilidade e
                baixo custo. <br />
                Maior diversidade de projetos Transparência, rastreabilidade e
                baixo custo. <br />
                Alcançar compromissos e metas sociais, ambientais e governança
                ESG.
              </span>
            </div>
            <div className='text-23'>
              <div className='div-form-title-subtext'>
                <span className='span-projetos-socioambientais'>
                  Projetos Socioambientais e
                </span>
                <span className='span-vendedores'>Vendedores</span>
                <span className='span-vendedores-24'>:</span>
              </div>
              <span className='span-form-title-25'>
                Mensurar e detalhar os benefícios ambientais e sociais, conforme
                metodologias reconhecidas e verificação de terceira parte;
                <br />
                Facilitar o acesso ao mercado de créditos de carbono
              </span>
            </div>
          </div>
          <div className='share-your-travels-form-26' />
        </div>
        <div className='footer-section-27'>
          <div className='subscribe-section' />
          <div className='frame-28'>
            <div className='frame-29'>
              <span className='span-criar-uma-nova-relacao'>
                Criar uma nova relação de sustentabilidade entre pessoas,
                organizações e a natureza
              </span>
              <span className='span-nossa-missao-comecou'>
                Nossa missão começou em 2020, com a primeira plataforma de
                registro de créditos de carbono brasileira, e hoje com a
                eCOfunding, lançamos a primeira plataforma de negociação de
                créditos de carbono utilizada para conectar de forma
                transparente, simples e efetiva projetos socioambientais e
                empresas.
              </span>
            </div>
          </div>
          <div className='frame-2a'>
            <span className='span-ecofunding'>
              eCOfunding é a primeira plataforma full service em gestão e
              negociação de créditos de carbono, auxiliando empresas a atingirem
              suas metas e compromissos ambientais.
            </span>
          </div>
          <div className='frame-2b'>
            <div className='img-6' />
            <div className='pic-8' />
            <div className='img-7' />
          </div>
          <div className='frame-2c'>
            <div className='div' />
            <div className='frame-2d'>
              <span className='span-plataforma-autorizada'>
                Plataforma autorizada pela CVM conforme o Ato Declaratório CVM
                nº 19.142, de 5/10/2021Plataforma autorizada pela CVM conforme o
                Ato Declaratório CVM nº 19.142, de 5/10/2021.
              </span>
              <span className='span-as-sociedades-empresarias'>
                As sociedades empresárias de pequeno porte e as ofertas
                apresentadas nesta plataforma estão automaticamente dispensadas
                de registro pela Comissão de Valores Mobiliários - CVM. A CVM
                não analisa previamente as ofertas. As ofertas realizadas não
                implicam por parte da CVM a garantia da veracidade das
                informações prestadas, de adequação à legislação vigente ou
                julgamento sobre a qualidade da sociedade empresária de pequeno
                porte. Antes de aceitar uma oferta leia com atenção as
                informações essenciais da oferta, em especial a seção de alertas
                sobre riscos.
              </span>
            </div>
          </div>
        </div>
        <div className='footer-section-2e'>
          <div className='subscribe-section-2f'>
            <span className='team'>Team</span>
            <div className='div-30' />
            <div className='frame-31'>
              <span className='conheca-nossa-equipe'>
                Conheça nossa equipe.
              </span>
              <button className='frame-32'>
                <span className='conheca'>conheça</span>
              </button>
            </div>
          </div>
          <div className='subscribe-section-33'>
            <div className='frame-34'>
              <div className='full-white-35' />
              <span className='inscreva-se-na-nossa-newsletter'>
                Inscreva-se na nossa newsletter e acompanhe o nosso trabalho.
              </span>
              <div className='input-outlined'>
                <div className='border-left' />
                <div className='border-right'>
                  <div className='input'>
                    <span className='email'>Email</span>
                    <button className='button-contained-text-icon'>
                      <div className='contained-text-icon'>
                        <div className='content'>
                          <span className='button'>Enviar</span>
                          <div className='icon' />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='checkbox-default'>
                <div className='default-checkbox-label'>
                  <div className='checkbox' />
                </div>
                <span className='label'>
                  Li e concordo com os termos de uso e política de privacidade.
                </span>
              </div>
            </div>
            <div className='frame-36'>
              <span className='falecom-moss-earth'>
                FIcou com dúvida? falecom@moss.earth
              </span>
              <span className='faca-parte-da-nossa-comunidade-nas-redes-sociais'>
                Faça parte da nossa comunidade nas redes sociais:
              </span>
              <div className='frame-37'>
                <div className='pic-d' />
                <div className='pic-e' />
                <div className='pic-f' />
              </div>
              <div className='button-38'>
                <div className='icon-39'>
                  <div className='group' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
