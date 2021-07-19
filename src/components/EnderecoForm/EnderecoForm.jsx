import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import "./EnderecoFormStyle.css";

function EnderecoForm({ addressSearch }) {
  const [localidade, setLocalidade] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [UF, setUf] = useState("");

  return (
    <div className="containerComplete">
      <form
        className="formComplete"
        onSubmit={(event) => {
          event.preventDefault();
          addressSearch({ logradouro, localidade, UF });
        }}
      >
        <h3>Digite o seu Endereço</h3>

        <TextField
          value={logradouro}
          onChange={(e) => {
            setLogradouro(e.target.value);
          }}
          id="Logradouro"
          label="Rua/Av"
          variant="outlined"
          margin="normal"
          fullWidth
        ></TextField>
        <TextField
          value={localidade}
          onChange={(e) => {
            setLocalidade(e.target.value);
          }}
          id="Localidade"
          label="Cidade/Destrito"
          variant="outlined"
          margin="normal"
          fullWidth
        ></TextField>
        <TextField
          value={UF}
          onChange={(e) => {
            setUf(e.target.value);
          }}
          id="Uf"
          label="UF"
          variant="outlined"
          margin="normal"
          fullWidth
        ></TextField>

        <div>
          <Button type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EnderecoForm;
