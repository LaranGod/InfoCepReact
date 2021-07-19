import React, { useState } from "react";
import { TextField, Button, Box, Input } from "@material-ui/core";
import "./CepFormStyle.css";

function CepForm({ cepSearch }) {
  const [cep, setCep] = useState("");

  return (
    <div className="containerCep">
      <form
        className="formCep"
        onSubmit={(event) => {
          event.preventDefault();
          cepSearch({ cep });
        }}
      >
        <div className="searchBox">
          <h3>Digite o seu Cep:</h3>
          <TextField
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
            id="Cep"
            label="Cep"
            variant="outlined"
            margin="normal"
            fullWidth
          ></TextField>

          <div>
            <Button type="submit" variant="contained" color="primary">
              Buscar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CepForm;
