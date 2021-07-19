import React, { useState } from "react";
import "./TipoPesquisaStyle.css";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Box,
} from "@material-ui/core";

function TipoPesquisa({ searchType }) {
  const [tipoPesquisa, setTipoPesquisa] = useState("cep");

  return (
    <div className="mainButtons">
      <form>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="tipoDePesquisa"
            name="tipoDePesquisa"
            value={tipoPesquisa}
            onChange={(e) => {
              setTipoPesquisa(e.target.value);
              searchType(e.target.value);
            }}
          >
            <FormControlLabel
              value="cep"
              control={<Radio />}
              label="Busca po CEP"
            />
            <FormControlLabel
              value="completo"
              control={<Radio />}
              label="Busca Por Endereco"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
}

export default TipoPesquisa;
