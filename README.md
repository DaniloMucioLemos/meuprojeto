# Site Portfolio

Este é um site portfolio construído com Next.js, TypeScript e Tailwind CSS.

## Configuração de Segurança

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_chave_aqui
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

### Configuração do EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um novo serviço de email
3. Crie um template de email
4. Substitua `YOUR_SERVICE_ID` e `YOUR_TEMPLATE_ID` no arquivo `app/page.tsx` pelos seus IDs

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Rodar em produção
npm start
```

## Medidas de Segurança Implementadas

- Headers de segurança configurados
- Validação de formulários
- Proteção contra XSS
- CSP (Content Security Policy)
- HTTPS forçado
- Sanitização de dados
- Rate limiting
- Proteção contra CSRF

## Boas Práticas de Segurança

1. Mantenha todas as dependências atualizadas
2. Use HTTPS em produção
3. Implemente rate limiting
4. Faça backup regular dos dados
5. Monitore logs de segurança
6. Realize testes de segurança regularmente

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes. 