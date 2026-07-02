from google import genai

client = genai.Client(api_key="COLE_SUA_CHAVE_AQUI")


def verificar_com_ia(resultado_regras):
    prompt = f"""
Você é uma IA que ajuda a revisar uma análise de ingredientes para restrições alimentares.

Este foi o JSON gerado pelo sistema:

{resultado_regras}

Analise esse JSON e responda de forma simples:

1. O resultado parece correto?
2. As restrições do usuário foram consideradas?
3. Algum ingrediente perigoso pode ter passado despercebido?
4. A resposta deveria continuar igual ou deveria ser revisada?

Responda de forma curta, clara e fácil de entender.
"""

    resposta = client.models.generate_content(
        model="gemini-2.5-flash-lite",
        contents=prompt
    )

    return resposta.text