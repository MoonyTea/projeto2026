from fastapi import FastAPI
from pydantic import BaseModel
from regras import regras
import unicodedata

app = FastAPI()


class Dados(BaseModel):
    nome_produto: str
    ingredientes: str
    restricoes: list[str]


def normalizar(texto):
    texto = texto.strip().lower()
    texto = unicodedata.normalize("NFD", texto)
    texto = "".join(
        letra for letra in texto
        if unicodedata.category(letra) != "Mn"
    )
    return texto


@app.get("/")
def home():
    return {"Mensagem": "Hello World!"}


@app.post("/analisar")
def analisar(dados: Dados):
    lista_ingredientes = [
        normalizar(i)
        for i in dados.ingredientes.split(",")
    ]

    restricoes = [
        normalizar(r)
        for r in dados.restricoes
    ]

    motivos = []

    for ingrediente in lista_ingredientes:
        if ingrediente in regras:
            restricao_necessaria = regras[ingrediente]["restricao"]

            if restricao_necessaria in restricoes:
                motivos.append(regras[ingrediente]["mensagem"])

    if motivos:
        return {
            "produto": dados.nome_produto,
            "resultado": "não recomendado",
            "motivos": motivos
        }

    return {
        "produto": dados.nome_produto,
        "resultado": "seguro para consumo",
        "motivos": []
    }