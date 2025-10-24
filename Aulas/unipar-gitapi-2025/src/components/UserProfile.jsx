import "./UserProfile.css";

export function UserProfile({ user, repos }) {
    return (
        <div className="profile-container">
            <div className="profile">
                <img src={"TESTE"} alt="Teste" />
                <div className="profile-info">
                    <h2>teste</h2>
                    <p>teste</p>
                    <p>Repositórios públicos: teste</p>
                </div>
            </div>


            {/* Pegar os 10 Repositórios */}
            <div className="repos">
                <h3>Repositórios:</h3>
                <ul>

                </ul>
            </div>
        </div>
    );
}