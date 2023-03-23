class RamApi {

    _apiBase = 'https://rickandmortyapi.com/api/character';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    return this.getResource(`${this._apiBase}?page=1`);
  }

  getCharacter = async (id) => {
    return this.getResource(`${this._apiBase}/${id}`);
  }

  
}
export default RamApi;
