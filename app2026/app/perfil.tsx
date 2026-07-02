
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Perfil() {
  const [restricoes, setRestricoes] = useState([
    { nome: "Glúten", icone: "🌾", selecionado: true },
    { nome: "Lactose", icone: "🥛", selecionado: true },
    { nome: "Oleaginosas", icone: "🥜", selecionado: false },
    { nome: "Soja", icone: "🫘", selecionado: false },
    { nome: "Ovos", icone: "🥚", selecionado: false },
    { nome: "Frutos do mar", icone: "🦐", selecionado: false },
    { nome: "Peixes", icone: "🐟", selecionado: false },
    { nome: "Trigo", icone: "🌿", selecionado: false },
    { nome: "Açúcar", icone: "🍬", selecionado: false },
    { nome: "Sódio", icone: "🧂", selecionado: false },
    { nome: "Conservantes", icone: "🧪", selecionado: false },
    { nome: "Corantes artificiais", icone: "🎨", selecionado: false },
  ]);

  function alterarRestricao(index: number) {
    const novaLista = [...restricoes];
    novaLista[index].selecionado = !novaLista[index].selecionado;
    setRestricoes(novaLista);
  }

  function salvarAlteracoes() {
    console.log("Restrições salvas:", restricoes);
    alert("Alterações salvas com sucesso!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View>
          <Text style={styles.titulo}>Meu Perfil</Text>
          <Text style={styles.emailTopo}></Text>
        </View>

      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cardUsuario}>
          <View style={styles.avatar}>
            <Text style={styles.avatarIcone}>🤠</Text>
          </View>

          <View>
            <Text style={styles.nome}>Usuário</Text>
            <Text style={styles.email}></Text>
          </View>
        </View>

        <View style={styles.abas}>
          <Text style={[styles.aba, styles.abaAtiva]}>Restrições</Text>
          <Text style={styles.aba}>Ingredientes</Text>
        </View>

        <View style={styles.grid}>
          {restricoes.map((item, index) => (
            <TouchableOpacity
              key={item.nome}
              style={styles.cardRestricao}
              onPress={() => alterarRestricao(index)}
            >
              <Text style={styles.icone}>{item.icone}</Text>
              <Text style={styles.textoRestricao}>{item.nome}</Text>

              {item.selecionado && (
                <View style={styles.check}>
                  <Text style={styles.checkTexto}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarAlteracoes}>
          <Text style={styles.botaoTexto}>✓ Salvar alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fedece",
  },

  header: {
    height: 90,
    backgroundColor: "#fff",
    paddingTop: 35,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  voltar: {
    fontSize: 28,
    color: "#344054",
    textDecorationLine: "none",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
  },

  emailTopo: {
    fontSize: 12,
    color: "#667085",
  },

  sair: {
    fontSize: 24,
    color: "#e74c3c",
  },

  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },

  cardUsuario: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#f5dfbd",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  avatarIcone: {
    fontSize: 28,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#344054",
  },

  email: {
    fontSize: 13,
    color: "#667085",
    marginTop: 4,
  },

  abas: {
    flexDirection: "row",
    backgroundColor: "#edf0f5",
    borderRadius: 25,
    padding: 4,
    marginBottom: 22,
  },

  aba: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#667085",
  },

  abaAtiva: {
    backgroundColor: "#fff",
    borderRadius: 20,
    color: "#344054",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardRestricao: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9e1ea",
    position: "relative",
  },

  icone: {
    fontSize: 22,
    marginRight: 10,
  },

  textoRestricao: {
    fontSize: 14,
    fontWeight: "600",
    color: "#344054",
    flex: 1,
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#007f43",
    alignItems: "center",
    justifyContent: "center",
  },

  checkTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

  botaoSalvar: {
    backgroundColor: "#007f43",
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});