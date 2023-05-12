import { useState } from 'react'
import './App.css'

function App() {
  const [access, setAccess] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit= (e) => {
      e.preventDefault();
      const time = new Date()
      const data = {'name':name, 'email':email, 'datetime': time.toString()}
      setAccess(data)
      console.log(data)
      fetch('http://localhost:3000/access',{
        body:JSON.stringify(data),
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        }
      }).then(res => res.json())
    }

    const handleOpenModal = (e) => {
      e.preventDefault();
      const modal = document.querySelector("[data-modal]")
      modal.showModal()
    }

    const handleCloseModal = (e) => {
      e.preventDefault();
      const modal = document.querySelector("[data-modal]")
      modal.close()
    }
  
    return (
      <>
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Nome:</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <label>Email:</label>
        <br />
        <input 
          name='email' 
          type='text' 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input 
          type='submit' 
          value='Confirmar' 
        />
        <br />
        <input
        required
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          value="newsletter" />
        <label>Estou de acordo com os Termos de Uso </label>
      </form>
      <br />
      <button onClick={(e) => handleOpenModal(e)}>Abrir</button>

      
      <dialog data-modal>
        <div>
          <h2>TERMOS DE USO DE ACESSO À INTERNET – Wi-Fi</h2>
          <p>Para utilizar o Wi-Fi disponibilizado pela Prefeitura Municipal de  Jaraguá do Sul (PMJS) para acesso à Internet, o USUÁRIO expressamente aceita, sem reservas ou ressalvas, todas as condições abaixo descritas. </p>
          <ol>
            <li>O Wi-Fi disponibilizado pela PMJS permite acesso a sites na internet (somente http e https), envio e recebimento de mensagens instantâneas através de aplicativos públicos (Gtalk, Facebook,  Whatsapp, entre outros) e a utilização de correio eletrônico. </li>
            <li>O acesso à internet pelo Wi-Fi não gera qualquer direito ao USUÁRIO e poderá ser interrompido a qualquer momento sem prévio aviso. </li>
            <li>O USUÁRIO deverá dispor e manter o equipamento necessário ("computador", "notebook", “tablet” ou “smartphone”) com dispositivo interno ou externo, compatível com a tecnologia WiFi para ter acesso à internet em condições de funcionamento, bem como deverá promover as medidas de segurança necessárias à proteção de seus equipamentos, sistemas e arquivos contra a atuação indevida e invasões não autorizadas de outros usuários de internet.</li>
            <li>O USUÁRIO não poderá utilizar o Wi-Fi disponibilizado pela PMJS para acessar, propagar ou manter portal ou site(s) na internet com conteúdos que:
              <ul>
                <li>Violem a lei ou não sejam autorizados;</li>
                <li>Ofendam os direitos à honra, à vida privada, à imagem, à intimidade pessoal e familiar de quem quer que seja, assim como a propriedade intelectual; </li>
                <li>Estimulem a prática de condutas contrárias à moral e aos bons costumes;</li>
                <li>Incitem a prática de atos discriminatórios, seja em razão de sexo, raça, religião, crença, idade, ideologia ou qualquer outra condição;</li>
                <li>Coloquem à disposição ou possibilitem o acesso às mensagens, produtos ou serviços ilícitos, inapropriados, difamatórios, violentos, obscenos e pornográficos;</li>
                <li>Induzam ou incitem práticas perigosas, de risco ou nocivas para a saúde e para o equilíbrio psíquico;</li>
                <li>Sejam falsos, ambíguos, inexatos, exagerados ou extemporâneos, de forma que possam induzir a erro sobre seu objeto ou sobre as intenções ou propósitos do comunicador;</li>
                <li>Violem o sigilo das comunicações;</li>
                <li>Constituam publicidade ilícita, enganosa ou desleal, em geral, que configurem concorrência desleal e/ou denominados "spam-mails";</li>
                <li>Veiculem, incitem ou estimulem a pedofilia; e/ou,</li>
                <li>Incorporem vírus ou outros elementos físicos ou eletrônicos que possam danificar ou impedir o normal funcionamento da rede, do sistema ou dos equipamentos (hardware e software) de terceiros ou que possam danificar os documentos eletrônicos e arquivos armazenados nestes equipamentos.</li>
                <li></li>
              </ul>
            </li>
            <li>A PMJS não se responsabiliza, direta ou indiretamente, por quaisquer despesas, danos ou perdas que sejam efetiva ou alegadamente causados por quaisquer conteúdos, produtos ou serviços disponíveis em sites de terceiros ou recursos externos, não garantindo a perfeição, qualidade, veracidade, adequação, utilidade ou segurança do conteúdo ou de qualquer serviço oferecido na internet, inclusive, mas não se limitando a, serviços envolvendo compra e/ou venda, investimentos, seguros, aplicações, transferências de valores e demais operações financeiras, ou pela utilização ou confiança depositada pelo USUÁRIO em tais conteúdos, produtos ou serviços. </li>
            <li>Embora a PMJS utilize as melhores tecnologias e empenhe seus maiores esforços, não há condições de controle que garanta a ausência de vírus nos conteúdos transmitidos, difundidos, armazenados, recebidos, obtidos, colocados à disposição, ou acessíveis por meio da utilização do Wi-Fi, nem a ausência de outros elementos que possam produzir alterações no equipamento do USUÁRIO ou nos documentos eletrônicos e pastas armazenadas ou transmitidas desde o equipamento do USUÁRIO.</li>
            <li>Assim, a PMJS SE EXIME DE QUALQUER RESPONSABILIDADE PELOS DANOS E PREJUÍZOS DE QUALQUER NATUREZA QUE POSSAM DECORRER DA PRESENÇA DE VÍRUS OU DE OUTROS ELEMENTOS NOCIVOS NOS CONTEÚDOS DA INTERNET E QUE, DESTA FORMA, POSSAM PRODUZIR ALTERAÇÕES E/ OU DANOS NO SISTEMA FÍSICO E/ OU ELETRÔNICO DOS EQUIPAMENTOS DO USUÁRIO. </li>
            <li>Ao se cadastrar e fornecer seus dados pessoais, como nome, endereço de e-mail e informações de contato, nós coletamos essas informações com o objetivo de oferecer acesso à nossa rede de visitantes e garantir a segurança da mesma. Além disso, poderemos utilizar seus dados para fins de análise interna e melhorias na qualidade dos nossos serviços.</li>
            <li>Os dados pessoais fornecidos serão armazenados em ambiente seguro e serão tratados de forma confidencial, garantindo a integridade e a privacidade das informações coletadas. Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, uso indevido, alteração ou divulgação não autorizada.</li>
            <li>Seus dados pessoais não serão compartilhados com terceiros, exceto quando necessário para cumprir com obrigações legais ou a pedido das autoridades competentes.</li>
            <li>Você tem o direito de solicitar acesso, retificação ou exclusão dos seus dados pessoais a qualquer momento. Além disso, você pode solicitar a limitação do processamento dos seus dados ou se opor ao uso dos mesmos para fins de marketing direto. Para exercer seus direitos, entre em contato conosco através dos canais indicados no final deste documento.</li>
            <li>Ao aceitar o termo e utilizar nossa rede de visitantes via login Wi-Fi, você consente expressamente com a coleta, uso e processamento dos seus dados pessoais, conforme descrito nesta política de privacidade.</li>
            <li>A PMJS não tem obrigação de controlar e não controla o conteúdo e natureza dos conteúdos transmitidos, difundidos ou postos à disposição de terceiros pelos USUÁRIOS através do Wi-Fi. INDEPENDENTE DISSO, A PMJS TERÁ O DIREITO DE REVISAR, A QUALQUER MOMENTO E SEM AVISO PRÉVIO, POR PRÓPRIA INICIATIVA, A SEU CRITÉRIO OU A PEDIDO DE TERCEIRO, OS CONTEÚDOS TRANSMITIDOS, DIFUNDIDOS OU POSTOS À DISPOSIÇÃO DE TERCEIROS PELOS USUÁRIOS ATRAVÉS DO WI-FI E IMPEDIR SUA TRANSMISSÃO, DIFUSÃO OU COLOCAÇÃO A DISPOSIÇÃO DE TERCEIROS, QUANDO ESSES CONTEÚDOS ESTIVEREM EM DESACORDO COM O DISPOSTO NESTE TERMO.</li>
          </ol> 
          <p>AO CHECAR O ITEM “EU CONCORDO COM OS TERMOS DE USO” SIGNIFICA QUE VOCÊ (USUÁRIO):</p>
          <ul>
            <li>LEU E COMPREENDEU TODO O CONTEÚDO DESTE TERMO;</li>
            <li>ESTÁ DE PLENO ACORDO COM TODAS AS CONDIÇÕES DESTE TERMO; E,</li>
            <li>TEM CAPACIDADE LEGAL PARA SE RESPONSABILIZAR PELAS OBRIGAÇÕES AQUI ASSUMIDAS.</li>
          </ul>
        </div>
        <button data-close-modal onClick={(e) => handleCloseModal(e)}>Close</button>
      </dialog>
      </>
  )
}

export default App
