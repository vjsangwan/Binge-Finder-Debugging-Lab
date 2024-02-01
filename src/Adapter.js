class Adapter {
  static async getShows() {
    const response = await fetch("http://api.tvmaze.com/shows");
    const data = await response.json();
    return data;
  }

  static async getShowEpisodes(showID) {
    const response = await fetch(
      `http://api.tvmaze.com/shows/${showID}/episodes`
    );
    const data = await response.json();
    return data;
  }
}

export default Adapter;
