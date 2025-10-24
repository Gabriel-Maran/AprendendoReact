import "./SearchBar.css";

export function SearchBar({ username, setUsername, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Digite o nome do usuário..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
