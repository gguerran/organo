import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';



function App() {
    const teamList = [
        {
            name: "Programação",
            value: "programmnig",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            name: "Front End",
            value: "front-end",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Data Science",
            value: "data-science",
            primaryColor: "#A6D157",
            secondaryColor: "#F0F8E2",
        },
        {
            name: "DevOps",
            value: "devops",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
        {
            name: "UX e Design",
            value: "ux-design",
            primaryColor: "#DB6EBF",
            secondaryColor: "#FAE9F5",
        },
        {
            name: "Mobile",
            value: "mobile",
            primaryColor: "#FFBA05",
            secondaryColor: "#FFF5D9",
        },
        {
            name: "Inovação e Gestão",
            value: "innovation-management",
            primaryColor: "#FF8A29",
            secondaryColor: "#FFEEDF",
        },
    ];

    const [professionals, setProfessionalsState] = useState([]);

    const setProfessionals = (professional) => {
        setProfessionalsState([...professionals, professional]);
    }

    return (
        <div className="App">
            <Banner />
            <Form
                onChangeProfessional={setProfessionals}
                teamList={teamList}
            />
            {teamList.map((team) => <Team
                team={team} key={team.value}
                professionals={professionals.filter(
                    (professional) => professional.team === team.value)
                }
            />)}
        </div>
    );
}

export default App;
