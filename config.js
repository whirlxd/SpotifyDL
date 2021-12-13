/**
 * @param {string} spotifyClientId - The client id of the spotify app
 * @param {string} spotifyAccessToken - The access token of the user whose playlist you are trying to access.
 * @param {string} spotifyPlaylistId - The playlist id
 * @param {string} additionalSearchTerm - Any additionalSearchTerms you want to add to the search on yt.
 *@param {string} folderNam - The folder to which songs will be downloaded (can include navigation  )
 */
const config = {
  spotifyClientId: "6bea93bccb2741b18f04ea0a46b0e630",
  spotifyAccessToken:
    "BQBlGAwOUSbzSCPuHAnjdQ28RpgQAUPjTAQiaj7xgjSdpTG3G2mumIfB6dEXemRPGeKMkRZVkmz4b4UuEnJy2DUji9E5IlScOfpgPmj6zmo0vbNx88REbvkRgyq1APbDiMKWY7vI3pDVJV-kYQBEtLBv5t-r_tmmx6FVE-4-rjXDMjq9UHeD5w4htEInKmEg3ajHHU9jg37oYIl085zgEfHkHjh1tEsIqwhcM2LiuQ",
  spotifyPlaylistId: "6fvCbWrc99HiNG0oNjIgqv",
  additionalSearchTerm: "",
  folderName: "./music",
};
module.exports = config;
