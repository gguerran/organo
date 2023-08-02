import ProfessionalCard from "../ProfessionalCard";
import "./Team.css";

const Team = ({professionals, team}) => {
    const sessionStyle = {
        backgroundColor: team.secondaryColor,
    };
    const primaryTextStyle = {
        borderColor: team.primaryColor,
    };
    return (
        professionals.length > 0 ? <section className="team" style={sessionStyle}>
            <h3 style={primaryTextStyle}>{team.name}</h3>
            <div className="professionals">
                {professionals.map(
                    (professional) => <ProfessionalCard
                        professional={professional}
                        key={professional.name}
                        primaryColor={team.primaryColor}
                    />
                )}
            </div>
        </section>
        : ""
    );
};
export default Team;
