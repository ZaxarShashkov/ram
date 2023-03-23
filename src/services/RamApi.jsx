class RamApi {
  _apiBase = "https://rickandmortyapi.com/api/character";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}?page=3`);
    return res.results.map(this._tansformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}/${id}`);
    return this._tansformCharacter(res);
  };

  _tansformCharacter = (res) => {
    return {
      name: res.name,
      status: res.status,
      image: res.image,
      species: res.species,
      gender: res.gender,
      location: res.location.name,
      origin: res.origin.name,
    };
  };
}
export default RamApi;
