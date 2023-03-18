import React from "react";
import axios from "axios";

const TestPage = () => {
  const apiKey = "1zyyt00blafdhl0229dpvgt3krybny";
  const bearer_token = "Bearer 6tcy26mn4df5beuuoha3u2m0ldilu4";

  async function fetchGameImage(gameName: string) {
    const response = await axios({
      url: "http://localhost:3001/api/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": apiKey,
        Authorization: bearer_token,
      },
      data: `search "${gameName}"; fields cover.image_id; limit 1;`,
    });
    return response.data[0]?.cover?.image_id || null;
  }

  async function populateImage() {
    const imageId = await fetchGameImage("Dark Souls");

    console.log(imageId);
  }

  return (
    <div>
      <h1> test </h1>
      <button onClick={populateImage} className="btn btn-primary">
        Click
      </button>
    </div>
  );
};

export default TestPage;
