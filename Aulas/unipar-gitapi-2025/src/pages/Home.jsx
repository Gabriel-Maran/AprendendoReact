import { useState } from "react";
import { getUser, getUserRepos } from "../api/githubApi";
import { SearchBar } from "../components/SearchBar";
import { UserProfile } from "../components/UserProfile";

export function Home() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      //Chamar as funções da API
      const userData = await getUser(username);
      const userRepos = await getUserRepos(username);

      //Atualizar estados com dados recebidos
      setUser(userData);
      setRepos(userRepos);
    } catch (error) {
      setError("Erro ao buscar dados do usuarios");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
        Buscador de Perfis GitHub
      </h1>
      <SearchBar
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
      />

      {loading && <p style={{ textAlign: "center" }}>Carregando...</p>}
      {error && (
        <p style={{ textAlign: "center", color: "#dc2626" }}>{error}</p>
      )}
    </div>
  );
}
