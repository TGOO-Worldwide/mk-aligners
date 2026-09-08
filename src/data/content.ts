export const navItems = [
  { href: "#visao-geral", label: "Visão Geral" },
  { href: "#k-line", label: "K Line" },
  { href: "#china", label: "China" },
  { href: "#comparacao", label: "Comparação" },
  { href: "#contactos", label: "Contactos" },
  { href: "#proximos-passos", label: "Próximos Passos" },
] as const;

export const opportunityItems = [
  "planeamento ortodôntico digital",
  "produção dos alinhadores",
  "simulação 3D",
  "portal para gestão de casos",
  "embalagens personalizadas",
  "caixas e estojos com a marca Maria Kerber",
  "retentores",
  "suporte técnico e clínico",
  "logística internacional",
] as const;

export const chainSteps = [
  "PACIENTE",
  "MARIA KERBER CLINIC",
  "PORTAL DIGITAL",
  "PLANEAMENTO ORTODÔNTICO",
  "FABRICAÇÃO",
  "MARIA KERBER ALIGNERS",
] as const;

export const kLineServices = [
  "planeamento realizado por ortodontistas",
  "fabricação de alinhadores",
  "utilização de alinhadores durante 14 dias por etapa",
  "embalagem personalizada",
  "portal para acompanhamento dos casos",
  "software de tratamento",
  "revisão e alteração dos planos",
  "materiais de marketing",
  "formação",
  "suporte clínico",
  "Doctor Pro",
  "retentores",
  "caixas personalizadas",
] as const;

export const starterKitItems = [
  "2 tratamentos/casos gratuitos com produção",
  "2 caixas físicas personalizadas",
  "portal configurado",
  "formação ao vivo",
  "introdução técnica",
  "materiais comerciais e de marketing",
  "Doctor Pro para os primeiros 5 casos",
  "suporte de onboarding durante 3 semanas",
  "especialista dedicado",
  "grupo de WhatsApp durante onboarding",
] as const;

export const kLinePlans = [
  { plan: "FAST", steps: "Até 6 etapas", one: "€320", two: "€380", highlight: false },
  { plan: "SMART", steps: "Até 12 etapas", one: "€450", two: "€520", highlight: false },
  { plan: "MODERATE", steps: "Até 24 etapas", one: "€620", two: "€765", highlight: true },
  { plan: "UNLIMITED", steps: "25+ etapas", one: "—", two: "€990", highlight: false },
] as const;

export const bestSmileFacts = [
  "fundada em 2018",
  "mais de 30.000 casos",
  "experiência em casos moderados e complexos",
  "produção OEM",
  "Private Label",
  "personalização da marca",
  "planeamento ortodôntico",
  "revisão dos planos",
  "plataforma cloud para gestão dos casos",
  "upload de scans, fotografias e exames",
  "visualização 3D",
  "aprovação digital do tratamento",
  "gestão de refinamentos",
  "suporte para várias clínicas/localizações",
  "formação",
  "fabricação industrial",
] as const;

export const chuhongxinServices = [
  "OEM",
  "ODM",
  "planeamento ortodôntico digital",
  "tratamento completo de casos",
  "simulação virtual do movimento dentário",
  "planeamento por etapas",
  "planeamento IPR",
  "definição de attachments",
  "impressão 3D",
  "termoformagem",
  "corte CNC",
  "marcação laser",
  "produção interna",
  "controlo de qualidade",
] as const;

export const chuhongxinMarkets = [
  "América do Norte",
  "América do Sul",
  "Europa Oriental",
  "Europa Ocidental",
  "Ásia Oriental",
] as const;

export const chinaPriceExtras = [
  "planeamento",
  "revisões",
  "refinamentos",
  "retentores",
  "packaging",
  "caixas",
  "personalização",
  "portal",
  "transporte",
  "impostos",
  "documentação regulatória",
  "eventuais taxas adicionais",
] as const;

export const simulationRows = [
  {
    label: "Até 6 etapas / duas arcadas",
    pieces: "12 peças",
    china: "US$84–96",
    kline: "€380",
  },
  {
    label: "Até 12 etapas / duas arcadas",
    pieces: "24 peças",
    china: "US$168–192",
    kline: "€520",
  },
  {
    label: "Até 24 etapas / duas arcadas",
    pieces: "48 peças",
    china: "US$336–384",
    kline: "€765",
  },
  {
    label: "Acima de 25 etapas",
    pieces: "variável",
    china: "variável",
    kline: "€990",
  },
] as const;

export const comparisonColumns = [
  "K Line",
  "Smartee",
  "Yongle",
  "Best Smile",
  "Chuhongxin",
  "Meiming",
  "Beame",
] as const;

export const comparisonRows = [
  { label: "Clear Aligners", values: ["✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
  { label: "Fabricação própria", values: ["✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
  { label: "OEM", values: ["✓", "✓", "✓", "✓", "✓", "Confirmar", "Confirmar"] },
  { label: "Private Label", values: ["✓", "✓/OEM", "✓", "✓", "✓", "Confirmar", "Confirmar"] },
  { label: "Planeamento", values: ["✓", "✓", "✓", "✓", "✓", "✓*", "✓*"] },
  { label: "Packaging personalizado", values: ["✓", "Confirmar", "✓*", "✓", "✓*", "Confirmar", "Confirmar"] },
  { label: "Portal White Label", values: ["✓", "Confirmar", "Confirmar", "✓", "Confirmar", "Confirmar", "Confirmar"] },
  { label: "Suporte clínico", values: ["✓", "✓", "Confirmar", "✓", "✓*", "Confirmar", "Confirmar"] },
  { label: "FDA", values: ["✓", "verificar produto específico", "—", "—", "—", "✓", "✓"] },
  { label: "ISO 13485", values: ["✓", "✓*", "✓", "—*", "—*", "—*", "—*"] },
  { label: "Produção na Europa", values: ["✓", "✓", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO"] },
  { label: "Preço público OEM", values: ["✓", "NÃO", "NÃO", "NÃO", "US$7–8/peça", "NÃO", "NÃO"] },
] as const;

export const regulationItems = [
  "MDR aplicável ao dispositivo",
  "documentação CE aplicável",
  "Declaração UE de Conformidade, quando aplicável",
  "ISO 13485",
  "fabricante legal",
  "representante autorizado na União Europeia quando necessário",
  "identificação correcta no rótulo",
  "rastreabilidade",
  "UDI quando aplicável",
  "documentação do material",
  "responsabilidades do importador",
  "responsabilidades associadas ao Private Label",
  "seguro e responsabilidade pelo produto",
] as const;

export const rfqItems = [
  "Preço para até 6 etapas",
  "Preço para até 12 etapas",
  "Preço para até 24 etapas",
  "Preço para 25+ etapas",
  "Uma arcada",
  "Duas arcadas",
  "Planeamento incluído",
  "Número de revisões",
  "Refinamentos incluídos",
  "Custo de refinamentos adicionais",
  "Retentores",
  "Custo de substituições",
  "Caixa personalizada",
  "Estojo personalizado",
  "Saquetas personalizadas",
  "Manual do paciente",
  "Branding Maria Kerber",
  "MOQ",
  "Portal",
  "Portal White Label",
  "Setup do portal",
  "Custos mensais/API",
  "Formação",
  "Suporte clínico",
  "Prazo de planeamento",
  "Prazo de produção",
  "Transporte para Lisboa",
  "Incoterm",
  "IVA/importação",
  "MDR/CE",
  "ISO 13485",
  "EU Authorized Representative",
  "Documentação técnica",
  "Amostras",
  "Caso piloto",
] as const;

export const strategySteps = [
  {
    n: "01",
    title: "AMOSTRAS",
    text: "Solicitar amostras físicas e comparar acabamento, transparência, corte, espessura, elasticidade, embalagem e conforto.",
  },
  {
    n: "02",
    title: "CASOS PILOTO",
    text: "Executar casos piloto controlados para avaliar plataforma, planeamento, comunicação, produção e logística.",
  },
  {
    n: "03",
    title: "NEGOCIAÇÃO",
    text: "Negociar contrato OEM/Private Label baseado em volume e só depois definir fornecedor principal.",
  },
] as const;

export const contacts = {
  bestSmile: {
    company: "Shenzhen Best Smile Tech Co., Ltd.",
    person: "Angela Xie",
    email: "info@bestsmiletech.com",
    phone: "+86 137 1525 2781",
    whatsapp: "+86 137 1525 2781",
    whatsappUrl: "https://wa.me/8613715252781",
    website: "bestsmiletech.com",
    websiteUrl: "https://bestsmiletech.com",
    address: [
      "705, Huanggekeng Shareholder Building",
      "Qinglin Road",
      "Longgang",
      "Shenzhen",
      "Guangdong",
      "China",
    ],
  },
  chuhongxin: {
    company: "Shenzhen Chuhongxin Technology Co., Ltd.",
    person: "Mr. Leon Zhao",
    email: "leonaligner@163.com",
    phone: "+86 186 2036 0667",
    whatsappUrl: "https://wa.me/8618620360667",
    madeInChinaUrl:
      "https://clearaligner.en.made-in-china.com/product/keywordSearch?searchKeyword=Clear+Aligner+for+Teeth+Alignment+Orthodontics&viewType=0",
    alibabaUrl: "https://clearaligner.en.alibaba.com/company_profile.html",
    address: [
      "951C, 9th Floor",
      "Zhongxin Technology Building",
      "Bagualing Industrial Zone",
      "No. 31 Bagua Road",
      "Hualin Community",
      "Yuanling Street",
      "Shenzhen",
      "Guangdong",
      "China",
    ],
  },
  kline: {
    company: "K Line Europe GmbH",
    person: "Comercial",
    email: "info@clearxaligners.de",
    phone: "+49 211 94198008",
    website: "kline-europe.com",
    websiteUrl: "https://kline-europe.com",
    address: [
      "SEGRO Park Düsseldorf-Süd",
      "Unit 203 J-K",
      "Bonner Straße 203-393",
      "40589 Düsseldorf",
      "Germany",
    ],
  },
  smartee: {
    company: "Shanghai Smartee Denti-Technology Co., Ltd.",
    person: "Comercial — Portugal",
    email: "geral@smarteealigners.pt",
    phone: "910 355 225",
    phoneUrl: "tel:+351910355225",
    internationalPhone: "+86 21 5079 8880",
    internationalEmail: "CS@smarteealigners.com",
    website: "smarteealigners.com",
    websiteUrl: "https://www.smarteealigners.com",
    address: [
      "2/F, No. 27 Lane 565, Shengxia Road",
      "Pudong District",
      "Shanghai",
      "China",
    ],
  },
  yongle: {
    company: "Yongle Dental (Shenzhen) Co., Ltd.",
    brand: "SmileCorrect",
    person: "William Yin — Founder/CEO",
    email: "yinduwen@hotmail.com",
    phone: "+86 136 9980 0637",
    whatsappUrl: "https://wa.me/8613699800637",
    website: "china-ortholab.com",
    websiteUrl: "https://china-ortholab.com",
    madeInChinaUrl: "https://dentallab-china.en.made-in-china.com/",
    address: [
      "5F, Block C, Huixin",
      "Yonghe Road, No. 31",
      "Bao'an, Shenzhen 518103",
      "Guangdong",
      "China",
    ],
  },
  meiming: {
    company: "Shenzhen Meiming Dentistry Technology Co., Ltd.",
    person: "Fei Hu",
    contactType: "Contacto regulatório / empresarial publicado na FDA",
    email: "shenzhenmeiming@gmail.com",
    phone: "+86 132 1900 6323",
    phoneUrl: "tel:+8613219006323",
    fda: "K213026",
    fdaUrl: "https://www.accessdata.fda.gov/cdrh_docs/pdf21/K213026.pdf",
    address: [
      "Floor 3, Building D",
      "Fuxinlin Industrial Park",
      "Mati Pond, Gushu Community",
      "Xixiang Street, Bao'an District",
      "Shenzhen, Guangdong 518102",
      "China",
    ],
  },
  beame: {
    company: "Beame Medical Technology (Shenzhen) Limited",
    person: "Yajuan Ou",
    contactType: "Contacto oficial publicado na FDA",
    email: "124230709@qq.com",
    phone: "+86 135 9041 5812",
    phoneUrl: "tel:+8613590415812",
    fda: "K251454",
    fdaUrl: "https://www.accessdata.fda.gov/cdrh_docs/pdf25/K251454.pdf",
    address: [
      "B03, B05, B06, 3rd Floor",
      "Carrianna Friendship Square",
      "2002 Renminnan Road",
      "Luohu District",
      "Shenzhen, Guangdong 518000",
      "China",
    ],
  },
} as const;

export const smarteeFacts = [
  "fundada em 2004",
  "mais de 20 anos dedicados à ortodontia invisível",
  "fabrica alinhadores invisíveis",
  "produção industrial automatizada",
  "fábrica inteligente de aproximadamente 100.000 m² inaugurada em Jiaxing",
  "fábrica europeia em Madrid",
  "tecnologia própria de alinhadores",
  "presença internacional",
  "capacidade OEM e colaboração industrial",
  "estrutura europeia",
] as const;

export const yongleServices = [
  "alinhadores invisíveis",
  "tratamento digital",
  "planeamento ortodôntico",
  "recebimento de ficheiros STL",
  "impressão de modelos",
  "fabricação dos aparelhos",
  "OEM",
  "marca própria",
  "produção para exportação",
] as const;

export const yongleFacts = [
  "Manufacturer / Factory",
  "perfil registado desde 2016",
  "ISO 9001",
  "ISO 14000",
  "ISO 13485",
  "mais de 10 linhas de produção",
  "mais de 90% da produção destinada à exportação",
  "mercados incluindo Europa Ocidental",
  "capacidade OEM",
  "marca própria SmileCorrect",
] as const;

export const credibilityRanking = [
  {
    rank: "01",
    name: "SMARTEE",
    stars: "★★★★★",
    score: "9,8 / 10",
    reasons: [
      "mais de 20 anos",
      "grande estrutura industrial",
      "produção europeia",
      "parceria estratégica com Straumann",
      "fabricação ClearCorrect EMEA/APAC",
      "presença internacional",
    ],
    tag: "Máxima credibilidade entre as alternativas chinesas analisadas",
    note: null,
  },
  {
    rank: "02",
    name: "K LINE EUROPE",
    stars: "★★★★★",
    score: "9,6 / 10",
    reasons: [
      "forte especialização em Private Label",
      "mais de 8,5 milhões de alinhadores produzidos",
      "25.000+ alinhadores/dia",
      "150+ marcas",
      "8 fábricas",
      "FDA, MDR, ISO 13485, MHRA e TGA declarados",
      "operação estruturada específica para OEM/Private Label",
    ],
    tag: "Referência actual em Private Label",
    note: null,
  },
  {
    rank: "03",
    name: "SHENZHEN MEIMING",
    stars: "★★★★☆",
    score: "8,3 / 10",
    reasons: [
      "Clear Aligner próprio",
      "FDA 510(k) K213026 verificado directamente",
      "produto Classe II",
    ],
    tag: null,
    note: "Modelo OEM/Private Label completo ainda precisa de confirmação.",
  },
  {
    rank: "04",
    name: "BEAME MEDICAL",
    stars: "★★★★☆",
    score: "8,2 / 10",
    reasons: [
      "FDA 510(k) K251454",
      "autorização recente — Janeiro de 2026",
      "fabricação de clear aligner confirmada",
    ],
    tag: null,
    note: "Estrutura OEM/Private Label ainda precisa de confirmação.",
  },
  {
    rank: "05",
    name: "YONGLE DENTAL / SMILECORRECT",
    stars: "★★★★☆",
    score: "7,9 / 10",
    reasons: [
      "fabricante",
      "OEM",
      "marca própria",
      "ISO 13485 declarado",
      "perfil comercial desde 2016",
      "forte exportação",
      "mais de 10 linhas de produção",
    ],
    tag: null,
    note: "Grande parte dos indicadores industriais provém de informações declaradas no marketplace.",
  },
  {
    rank: "06",
    name: "BEST SMILE TECH",
    stars: "★★★☆☆",
    score: "7,5 / 10",
    reasons: [
      "especialista especificamente em clear aligners",
      "OEM/White Label completo",
      "30.000+ casos declarados",
      "tratamento + produção + portal",
      "forte adequação operacional ao projecto Maria Kerber",
    ],
    tag: null,
    note: "Menos evidência independente sobre dimensão empresarial.",
  },
  {
    rank: "07",
    name: "SHENZHEN CHUHONGXIN",
    stars: "★★★☆☆",
    score: "7,2 / 10",
    reasons: [
      "OEM/ODM",
      "tratamento e fabricação",
      "30.000+ casos declarados",
      "produção interna",
      "preços públicos muito competitivos",
    ],
    tag: null,
    note: "Menor quantidade de evidência institucional independente encontrada.",
  },
] as const;

export const scaleRanking = [
  {
    rank: "01",
    name: "SMARTEE",
    stars: "★★★★★",
    highlight:
      "100.000 m² de nova base industrial automatizada. Operação internacional e produção europeia.",
    classification: "Grande grupo industrial",
  },
  {
    rank: "02",
    name: "K LINE EUROPE",
    stars: "★★★★★",
    highlight: "8 fábricas · 4 continentes · 25.000+ alinhadores/dia · 8,5 milhões+ produzidos · 150+ marcas",
    classification: "Grande fabricante global",
  },
  {
    rank: "03",
    name: "YONGLE DENTAL",
    stars: "★★★★☆",
    highlight:
      "10+ linhas de produção · 1.000.000 sets/ano declarados · >90% exportação · US$2,5–5 milhões de valor anual de produção declarado",
    classification: "Fabricante industrial de média escala",
  },
  {
    rank: "04",
    name: "BEST SMILE TECH",
    stars: "★★★☆☆",
    highlight: "30.000+ casos declarados desde 2018.",
    classification: "Fabricante especializado",
  },
  {
    rank: "05",
    name: "SHENZHEN CHUHONGXIN",
    stars: "★★★☆☆",
    highlight: "30.000+ casos clínicos declarados.",
    classification: "Fabricante especializado",
  },
] as const;

export const rankingHighlights = [
  { label: "Maior credibilidade encontrada na China", value: "SMARTEE" },
  { label: "Maior estrutura Private Label analisada", value: "K LINE" },
  { label: "Melhor alternativa chinesa directamente orientada a OEM", value: "YONGLE / BEST SMILE" },
  { label: "Preço de produção mais agressivo publicamente encontrado", value: "CHUHONGXIN" },
  { label: "Melhor validação FDA entre fabricantes chineses menores", value: "MEIMING / BEAME" },
] as const;

export const quoteEmail = {
  pt: {
    lang: "Português",
    subject: "Pedido de cotação OEM / Private Label — MK Aligners (Portugal)",
    body: `Exmos. Senhores,

A Maria Kerber Clinic (Lisboa, Portugal) solicita uma proposta comercial formal para desenvolver uma linha própria de alinhadores invisíveis em modelo OEM / Private Label / White Label, comercializada exclusivamente sob a marca MK.

Pedimos cotação por tratamento/caso (não apenas por peça), com indicação clara do que está incluído e do que é extra. A proposta deverá permitir comparar custo real por paciente, prazo, estrutura tecnológica e conformidade para a União Europeia.

1. PREÇOS
• Até 6, 12, 24 e 25+ etapas
• Uma arcada e duas arcadas
• MOQ
• Transporte DDP para Lisboa
• Confirmação do que o DDP inclui (direitos, IVA, desalfandegamento e entrega)

2. SERVIÇO CLÍNICO E DIGITAL
• Planeamento ortodôntico incluído? Quantas revisões?
• Refinamentos: incluídos e custo de refinamentos adicionais
• Retentores e custo de substituições
• Prazo de planeamento e prazo de produção
• Formação e suporte clínico

3. MARCA PRÓPRIA MK
• Branding MK em caixa, estojo, saquetas e manual do paciente
• Portal de gestão de casos
• Portal White Label: setup, custos mensais e/ou API
• Confirmação de que a identidade visível ao clínico e ao paciente é MK, e não a marca do fabricante

4. CONFORMIDADE — PORTUGAL E UNIÃO EUROPEIA
Solicitamos documentação original (não apenas menções no website):
• MDR aplicável ao dispositivo e documentação CE
• Declaração UE de Conformidade, quando aplicável
• ISO 13485
• Identificação do fabricante legal
• Representante autorizado na União Europeia, quando necessário
• Rotulagem correcta, rastreabilidade e UDI, quando aplicável
• Documentação do material
• Responsabilidades do importador e responsabilidades associadas ao Private Label
• Seguro e responsabilidade pelo produto

5. AMOSTRAS E PILOTO
• Disponibilidade e custo de amostras físicas
• Condições para um caso piloto controlado

Agradecemos proposta equivalente e completa, para decisão fundamentada.

Com os melhores cumprimentos,
Maria Kerber
Maria Kerber Clinic
WhatsApp: +351 916 835 339
care@mariakerberclinic.pt`,
  },
  en: {
    lang: "English",
    subject: "OEM / Private Label quotation request — MK Aligners (Portugal)",
    body: `Dear Sir or Madam,

Maria Kerber Clinic (Lisbon, Portugal) requests a formal commercial proposal to develop a proprietary invisible aligner line under an OEM / Private Label / White Label model, to be marketed exclusively under the MK brand.

Please quote per treatment/case (not per piece only), clearly stating what is included and what is extra. The proposal must allow comparison of real cost per patient, lead time, technology stack and regulatory compliance for the European Union.

1. PRICING
• Up to 6, 12, 24 and 25+ stages
• Single arch and dual arch
• MOQ
• DDP shipping to Lisbon
• Confirmation of what DDP includes (duties, VAT, customs clearance and delivery)

2. CLINICAL AND DIGITAL SERVICE
• Is orthodontic planning included? How many revisions?
• Refinements: included, and cost of additional refinements
• Retainers and replacement cost
• Planning lead time and production lead time
• Training and clinical support

3. MK PRIVATE LABEL
• MK branding on box, case, pouches and patient manual
• Case-management portal
• White Label portal: setup, monthly and/or API fees
• Confirmation that the identity visible to clinician and patient is MK, not the manufacturer's brand

4. COMPLIANCE — PORTUGAL AND THE EUROPEAN UNION
Please provide original documentation (not website claims only):
• Applicable MDR classification and CE documentation
• EU Declaration of Conformity, where applicable
• ISO 13485
• Identification of the legal manufacturer
• EU Authorized Representative, where required
• Correct labelling, traceability and UDI, where applicable
• Material documentation
• Importer responsibilities and Private Label responsibilities
• Product liability insurance

5. SAMPLES AND PILOT
• Availability and cost of physical samples
• Terms for a controlled pilot case

We would appreciate a complete, equivalent proposal to support a documented decision.

Yours faithfully,
Maria Kerber
Maria Kerber Clinic
WhatsApp: +351 916 835 339
care@mariakerberclinic.pt`,
  },
} as const;

export const dentalMasterProducts = [
  "implantes dentários",
  "pilares protéticos",
  "healing abutments",
  "componentes protéticos",
  "componentes de impressão",
  "kits cirúrgicos",
  "instrumentos",
  "soluções GBR",
  "componentes personalizados",
] as const;

export const dentalMasterRegItems = [
  "certificado MDR aplicável ao modelo exacto",
  "marcação CE",
  "EU Declaration of Conformity",
  "Organismo Notificado",
  "ISO 13485",
  "Basic UDI-DI / UDI",
  "registo aplicável em EUDAMED",
  "representante autorizado na União Europeia quando aplicável",
  "rotulagem e instruções adequadas para Portugal",
  "estrutura legal para Private Label",
  "identificação do fabricante legal",
  "responsabilidades do importador",
] as const;

export const dentalMasterSystemItems = [
  "fixture / implante",
  "cover screw",
  "healing abutment",
  "transfer",
  "analog",
  "straight abutment",
  "angled abutment",
  "multi-unit abutment",
  "componentes para All-on-4",
  "componentes para All-on-6",
  "kit cirúrgico",
  "embalagem personalizada Maria Kerber",
  "MOQ",
  "custo de Private Label",
  "prazo de produção",
  "prazo de transporte para Lisboa",
] as const;

export const dentalMasterDocs = [
  "MDR Certificate do sistema exacto",
  "EU Declaration of Conformity",
  "ISO 13485",
  "Notified Body",
  "Basic UDI-DI",
  "UDI dos produtos",
  "EU Authorised Representative",
  "informação EUDAMED",
  "rotulagem europeia",
  "confirmação escrita de Private Label",
] as const;

export const dentalMasterExtraCosts = [
  "transporte",
  "IVA",
  "importação",
  "embalagem personalizada",
  "componentes adicionais",
  "documentação",
  "logística",
  "volumes mínimos",
] as const;

export const dentalMasterChain = [
  "DENTALMASTER",
  "FABRICO DO SISTEMA DE IMPLANTES",
  "MARIA KERBER IMPLANTS",
  "MARIA KERBER CLINIC",
  "PACIENTE",
] as const;

export const dentalMasterLegalChain = [
  { title: "MARIA KERBER IMPLANTS", note: "Marca comercial" },
  { title: "DENTALMASTER", note: "Fabricante legal" },
  { title: "REPRESENTANTE / ESTRUTURA REGULAMENTAR UE", note: "" },
  { title: "IMPORTAÇÃO PARA PORTUGAL", note: "" },
  { title: "MARIA KERBER CLINIC", note: "Utilização clínica" },
] as const;

export const dentalMasterContact = {
  company: "DentalMaster (Xiamen) Medical Technology Co., Ltd.",
  group: "Double Medical Group",
  stock: "002901",
  phone: "+86 150 6073 9067",
  whatsappUrl: "https://wa.me/8615060739067",
  website: "dentalmastermed.com",
  websiteUrl: "https://www.dentalmastermed.com/",
  quoteQuestion:
    "Can you supply your EU MDR-compliant dental implant system under our private label 'Maria Kerber Implants', while DentalMaster remains identified as the legal manufacturer under EU MDR?",
  address: [
    "No. 18, Shanbianhong East Road",
    "Haicang District",
    "361026 Xiamen",
    "Fujian",
    "China",
  ],
} as const;

export const dentalMasterTechItems = [
  "Titânio Grau 4 trabalhado a frio",
  "Tratamento de superfície SLA",
  "Elevada biocompatibilidade",
  "Elevada resistência mecânica",
  "Resistência à corrosão",
  "Tecnologia orientada à osteointegração",
  "Sistema de implante + componentes",
  "MDR europeu confirmado para o sistema aplicável",
] as const;

export const implantDurabilityFactors = [
  "qualidade e composição do titânio",
  "precisão de fabrico",
  "ligação implante/pilar",
  "tratamento de superfície",
  "estabilidade inicial",
  "osteointegração",
  "planeamento cirúrgico",
  "condição óssea do paciente",
  "higiene oral",
  "manutenção",
  "experiência clínica",
] as const;

export const implantQuoteEmail = {
  pt: {
    lang: "Português",
    subject: "Pedido de cotação OEM / Private Label — Maria Kerber Implants (Portugal)",
    body: `Exmos. Senhores,

A Maria Kerber Clinic (Lisboa, Portugal) solicita uma proposta comercial formal para desenvolver uma linha própria de implantes dentários em modelo OEM / Private Label, a apresentar sob a marca comercial Maria Kerber Implants.

Pedimos cotação por sistema completo (não apenas pelo fixture), com indicação clara do que está incluído e do que é extra. A proposta deverá permitir comparar custo real por sistema, volumes, prazos, Private Label e conformidade para Portugal e União Europeia.

Pergunta essencial:
Can you supply your EU MDR-compliant dental implant system under our private label 'Maria Kerber Implants', while DentalMaster remains identified as the legal manufacturer under EU MDR?

1. PREÇOS E VOLUMES
Solicitamos preços para:
• 100 sistemas
• 500 sistemas
• 1.000 sistemas

Cada sistema deverá ser cotado especificando:
• fixture / implante
• cover screw
• healing abutment
• transfer
• analog
• straight abutment
• angled abutment
• multi-unit abutment
• componentes para All-on-4
• componentes para All-on-6
• kit cirúrgico
• embalagem personalizada Maria Kerber
• MOQ
• custo de Private Label
• prazo de produção
• prazo de transporte para Lisboa

2. TRANSPORTE
• Transporte DDP para Lisboa
• Confirmação do que o DDP inclui (direitos, IVA, desalfandegamento e entrega)

3. MARCA PRÓPRIA — MARIA KERBER IMPLANTS
• Apresentação Private Label/OEM com identidade Maria Kerber
• Embalagem personalizada
• Confirmação escrita de que a DentalMaster permanece identificada como fabricante legal ao abrigo do MDR da UE
• O Private Label/OEM está sujeito à confirmação contratual e regulamentar do fabricante

4. DOCUMENTAÇÃO EUROPEIA
Solicitamos documentação original do sistema exacto (não apenas menções no website):
1. MDR Certificate do sistema exacto
2. EU Declaration of Conformity
3. ISO 13485
4. Notified Body
5. Basic UDI-DI
6. UDI dos produtos
7. EU Authorised Representative
8. informação EUDAMED
9. rotulagem europeia
10. confirmação escrita de Private Label

5. AMOSTRAS
• Disponibilidade e custo de amostras físicas do sistema exacto destinado ao mercado europeu

Agradecemos proposta equivalente e completa, para decisão fundamentada. Qualquer decisão de aquisição será condicionada à validação regulamentar e clínica completa dos produtos destinados ao mercado português.

Com os melhores cumprimentos,
Maria Kerber
Maria Kerber Clinic
WhatsApp: +351 916 835 339
care@mariakerberclinic.pt`,
  },
  en: {
    lang: "English",
    subject: "OEM / Private Label quotation request — Maria Kerber Implants (Portugal)",
    body: `Dear Sir or Madam,

Maria Kerber Clinic (Lisbon, Portugal) requests a formal commercial proposal to develop a proprietary dental implant line under an OEM / Private Label model, to be presented under the commercial brand Maria Kerber Implants.

Please quote per complete system (not fixture only), clearly stating what is included and what is extra. The proposal must allow comparison of real cost per system, volumes, lead times, Private Label terms and regulatory compliance for Portugal and the European Union.

Essential question:
Can you supply your EU MDR-compliant dental implant system under our private label 'Maria Kerber Implants', while DentalMaster remains identified as the legal manufacturer under EU MDR?

1. PRICING AND VOLUMES
Please quote for:
• 100 systems
• 500 systems
• 1,000 systems

Each system quotation must specify:
• fixture / implant
• cover screw
• healing abutment
• transfer
• analog
• straight abutment
• angled abutment
• multi-unit abutment
• components for All-on-4
• components for All-on-6
• surgical kit
• Maria Kerber custom packaging
• MOQ
• Private Label cost
• production lead time
• shipping lead time to Lisbon

2. SHIPPING
• DDP shipping to Lisbon
• Confirmation of what DDP includes (duties, VAT, customs clearance and delivery)

3. PRIVATE LABEL — MARIA KERBER IMPLANTS
• OEM / Private Label presentation using the Maria Kerber identity
• Custom packaging
• Written confirmation that DentalMaster remains identified as the legal manufacturer under EU MDR
• Private Label/OEM is subject to the manufacturer's contractual and regulatory confirmation

4. EUROPEAN DOCUMENTATION
Please provide original documentation for the exact system (not website claims only):
1. MDR Certificate for the exact system
2. EU Declaration of Conformity
3. ISO 13485
4. Notified Body
5. Basic UDI-DI
6. Product UDI
7. EU Authorised Representative
8. EUDAMED information
9. European labelling
10. Written confirmation of Private Label

5. SAMPLES
• Availability and cost of physical samples of the exact system intended for the European market

We would appreciate a complete, equivalent proposal to support a documented decision. Any purchasing decision will be conditional on full regulatory and clinical validation of the products intended for the Portuguese market.

Yours faithfully,
Maria Kerber
Maria Kerber Clinic
WhatsApp: +351 916 835 339
care@mariakerberclinic.pt`,
  },
} as const;
