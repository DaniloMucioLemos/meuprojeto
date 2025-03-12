#!/bin/bash

echo "🚀 Iniciando atualização do site..."

# Verifica se está no diretório correto
if [ ! -d ".git" ]; then
    echo "❌ Erro: Este diretório não é um repositório Git."
    exit 1
fi

# Verifica se há alterações para commitar
if [ -z "$(git status --porcelain)" ]; then
    echo "✨ Nenhuma alteração para commitar."
    exit 0
fi

# Obtém a data e hora atual
DATA_HORA=$(date '+%d/%m/%Y às %H:%M')

# Adiciona todas as alterações
echo "📦 Adicionando alterações..."
git add .

# Solicita uma descrição opcional das alterações
echo "📝 Digite uma breve descrição das alterações (opcional - pressione Enter para pular):"
read DESCRICAO

# Cria a mensagem do commit
if [ -z "$DESCRICAO" ]; then
    MENSAGEM="Site atualizado em $DATA_HORA"
else
    MENSAGEM="$DESCRICAO - Atualizado em $DATA_HORA"
fi

# Faz o commit
echo "💾 Criando commit..."
git commit -m "$MENSAGEM"

# Faz o push
echo "☁️ Enviando para o GitHub..."
git push origin main

# Verifica se o push foi bem sucedido
if [ $? -eq 0 ]; then
    echo "✅ Site atualizado com sucesso!"
else
    echo "❌ Erro ao enviar as alterações. Por favor, verifique sua conexão e tente novamente."
fi 