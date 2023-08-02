import "./ProfessionalCard.css";

const ProfessionalCard = ({professional, primaryColor}) => {
    const professionalStyle = {backgroundColor: primaryColor};

    return (
        <div className="professional" >
            <div className="header" style={professionalStyle}>
                <img
                    src={professional.image}
                    alt={professional.name}
                />
            </div>
            <div className="footer">
                <h4>{professional.name}</h4>
                <h5>{professional.role}</h5>
            </div>
        </div>
    );
};

export default ProfessionalCard;
