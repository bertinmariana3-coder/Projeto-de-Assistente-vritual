import React from 'react';

const data = {
  nomeProjeto: "Gestão Virtual e Administrativa – Projeto Profissional de Mariana da Silva Bertin",
  subtitulo: "Assistente Virtual da Terapeuta Marly Nunes Almeida",
  apresentacao: "Este projeto apresenta a atuação como assistente virtual e administrativa para a terapeuta Marly Nunes Almeida, com foco em otimização de processos, gestão digital de rotinas e apoio remoto personalizado.",
  objetivo: "Oferecer suporte profissional à distância, garantindo eficiência, organização e equilíbrio entre compromissos pessoais e profissionais da terapeuta.",
  areasAtuacao: [
    "Agendamento e desmarcação de consultas online",
    "Planejamento remoto de viagens e palestras",
    "Organização da agenda pessoal e profissional",
    "Gestão digital de documentos e protocolos",
    "Criação de lembretes automáticos e integração de compromissos pessoais"
  ],
  ferramentas: ["Google Agenda", "Google Planilhas", "Trello", "Canva", "Google Docs", "WhatsApp Business"],
  atividades: [
    {
      titulo: "Gestão Online de Consultas e Agenda",
      detalhes: [
        "Agendamento, confirmação e reagendamento de consultas via e-mail e WhatsApp Business",
        "Comunicação digital com pacientes, reduzindo cancelamentos de última hora",
        "Sincronização automática com o Google Agenda para evitar conflitos de horário"
      ]
    },
    {
      titulo: "Organização Digital de Documentos e Protocolos",
      detalhes: [
        "Atualização e manutenção remota da planilha de protocolos de atendimento",
        "Etiquetagem digital dos formulários dos pacientes conforme a prioridade do caso: Vermelho, Amarelo, Verde"
      ]
    },
    {
      titulo: "Planejamento de Viagens e Palestras",
      detalhes: [
        "Pesquisa e reserva online de hospedagem e transporte",
        "Comunicação com instituições e escolas para agendamento de palestras",
        "Organização digital de materiais de apresentação e slides no Canva e Google Drive"
      ]
    },
    {
      titulo: "Organização de Compromissos Pessoais",
      detalhes: [
        "Inserção e lembretes automáticos de atividades pessoais como Ballet da filha e jantar com o marido",
        "Integração dos compromissos pessoais com a agenda profissional para equilíbrio"
      ]
    }
  ],
  resultados: [
    "Redução de 30% no tempo médio de agendamento e resposta",
    "Eliminação de sobreposições entre compromissos pessoais e profissionais",
    "Aumento da eficiência e controle digital da rotina da terapeuta",
    "Comunicação e atendimento 100% remotos, mantendo empatia e organização"
  ],
  conclusao: "A atuação como Assistente Virtual de Marly Nunes Almeida demonstra habilidades em planejamento, tecnologia e organização remota. O projeto reflete uma abordagem moderna, eficiente e humanizada de suporte administrativo à distância, promovendo mais produtividade e equilíbrio.",
  assinatura: "Desenvolvido por: Mariana da Silva Bertin – Assistente Virtual"
};

export default function Portfolio() {
  return (
    <div className="bg-beige min-h-screen p-8 font-sans text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-3xl text-gray-700 font-bold mb-2">{data.nomeProjeto}</h1>
        <h2 className="text-xl text-yellow-700 italic">{data.subtitulo}</h2>
      </header>
      
      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Apresentação</h3>
        <p>{data.apresentacao}</p>
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Objetivo</h3>
        <p>{data.objetivo}</p>
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Áreas de Atuação</h3>
        <ul className="list-disc list-inside">
          {data.areasAtuacao.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Ferramentas</h3>
        <ul className="list-disc list-inside">
          {data.ferramentas.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Atividades Detalhadas</h3>
        {data.atividades.map((atividade, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-1">{atividade.titulo}</h4>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              {atividade.detalhes.map((detalhe, i) => <li key={i}>{detalhe}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Resultados e Benefícios</h3>
        <ul className="list-disc list-inside">
          {data.resultados.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Conclusão</h3>
        <p>{data.conclusao}</p>
      </section>

      <footer className="text-center mt-12 text-gray-700 italic">
        {data.assinatura}
      </footer>
    </div>
  );
}