import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";


const Form = ({onChangeProfessional, teamList}) => {
    const onSave = (event) => {
        event.preventDefault();
        onChangeProfessional({name, role, image, team})
        
    }

    const [name, setNameState] = useState("");
    const [role, setRoleState] = useState("");
    const [image, setImageState] = useState("");
    const [team, setTeamState] = useState(
        {name: "", value: "", primaryColor: "", secondaryColor: ""}
    );

    const setName = (value) => setNameState(value);

    const setRole = (value) => setRoleState(value);

    const setImage = (value) => setImageState(value);

    const setTeam = (value) => setTeamState(value);


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={setName}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    onChanged={setRole}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    onChanged={setImage}
                />
                <DropDown
                    required={true}
                    label="Time"
                    items={teamList}
                    value={team.value}
                    onChanged={setTeam}
                />
                <Button>Enviar</Button>
            </form>
        </section>
    );
}

export default Form;
