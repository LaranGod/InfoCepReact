import React, { useState, Fragment } from "react";
import { Box, Container } from "@material-ui/core";
import "./App.css";
import CepForm from "./components/CepForm/CepForm";
import EnderecoForm from "./components/EnderecoForm/EnderecoForm";
import TipoPesquisa from "./components/TipoPesquisa/TipoPesquisa";
import axios from "axios";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchType, setSearchType] = useState("cep");
  const [arryDados, setArryDados] = useState([]);

  function SearchType(data) {
    setSearchType(data);
  }

  async function CepSearch({ cep }) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      console.log(data);
      FormataEndereco(data, searchType);
      if (data.erro === true || data.length === 0) {
        console.log("Endereço não encontrado");
        console.log("erro");
      } else {
      }
    } catch (err) {
      console.log(err);

      console.log("Verifique o CEP e tente novamente");
    }
  }

  async function AddressSearch({ logradouro, localidade, UF }) {
    logradouro = logradouro.toUpperCase();
    localidade = localidade.toUpperCase();
    UF = UF.toUpperCase();

    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${UF}/${localidade}/${logradouro}/json/`
      );
      console.log(data);
      FormataEndereco(data, searchType);
    } catch (err) {
      console.log(err);
      console.log("Verifique se os dados digitados estão corretos");
    }
  }

  function FormataEndereco(dados, tipo_busca) {
    if (tipo_busca === "cep") {
      setArryDados([dados]);
    } else if (tipo_busca === "completo") {
      setArryDados(dados);
    }
  }

  return (
    <div className="content">
      <TopBar />

      <Container className="compSearch" component="article" maxWidth="md">
        <section className="mainContent">
          <TipoPesquisa searchType={SearchType} />

          <Box
            className="BoxCep"
            style={{ display: `${searchType === "cep" ? "block" : "none"}` }}
          >
            <CepForm cepSearch={CepSearch} />
          </Box>

          <Box
            style={{
              display: `${searchType === "completo" ? "block" : "none"}`,
            }}
          >
            <EnderecoForm addressSearch={AddressSearch} />
          </Box>

          <ul>
            {arryDados.map((item, index) => (
              <Fragment key={index}>
                <li>{"CEP :" + item.cep}</li>
                <li>{"Logradouro :" + item.logradouro}</li>
                <li>{"Complemento :" + item.complemento}</li>
                <li>{"Bairro :" + item.bairro}</li>
                <li>{"Localidade :" + item.localidade}</li>
                <li>{"UF :" + item.uf}</li>
                <br></br>
              </Fragment>
            ))}
          </ul>
        </section>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
