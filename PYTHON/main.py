from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Dados(BaseModel):
    nome_produto: str
    ingredientes: str
    restricoes: list[str]

regras = {
        "trigo": {
            "restricao": "gluten",
            "mensagem": "Contém trigo, incompatível com restrição a glúten"        
        },
        "cevada": {
            "restricoo": "gluten",
            "mensagem": "Contém cevada, incompatível com restrição a glúten"
        },
        "leite":{
            "restricao": "lactose",
            "mensagem": "Contém leite, incompatível com restrição à lactose"
        }
        
}

@app.get("/")
def home():
    return ({"Mensagem:":"hello World!"})

@app.post("/analisar")
def analisar(dados: Dados):
    lista_ingredientes = [i.strip().lower() for i in dados.ingredientes.split(",")]
    restricoes = [r.strip().lower().replace("ú", "u") for r in dados.restricoes]
    
    motivos = []

    for ingrediente in lista_ingredientes:
        if ingrediente in regras:
            restricao_necessaria = regras[ingrediente]["restricao"]

            if restricao_necessaria in restricoes:
                motivos.append(regras[ingrediente]["mensagem"])
    
    if motivos:
        return{
            "produto": dados.nome_produto,
            "resultado": "não recomendado",
            "motivos": motivos
        }
    
    return {
        "produto": dados.nome_produto,
        "resultado": "Seguro para consumo",
        "motivos": []
    }