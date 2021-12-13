const SpotifyWebApi = require("spotify-web-api-node");
const YouTube = require("ytsr");
const fs = require("fs");
const ytdl = require("ytdl-core");
const config = require("./config");

const spotifyApi = new SpotifyWebApi({
  clientId: config.spotifyClientId,
});

spotifyApi.setAccessToken(config.spotifyAccessToken);
console.log(`Starting Download, This may take a while...`);
spotifyApi.getPlaylistTracks(config.spotifyPlaylistId).then((data) => {
  data.body.items.map((item, index) =>
    YouTube(item.track.name + config.additionalSearchTerm, {
      limit: 1,
      filter: "audioonly",
    }).then((res) => {
      const stream = ytdl(res.items[0].url);
      stream.pipe(fs.createWriteStream(`${config.folderName}/${index}.mp4`));
      stream.on("end", () => {
        fs.rename(
          `${config.folderName}/${index}.mp4`,
          `${config.folderName}/${item.track.name.replace(
            ":",
            "-"
          )}.mp3` /* since ":" is not considered valid */,
          () => {
            console.log(`Successfully downloaded ${item.track.name}[${index}]`);
          }
        );
        stream.on("error", (err) => console.error(`Encountered error: ${err}`));
      });
    })
  );
});
