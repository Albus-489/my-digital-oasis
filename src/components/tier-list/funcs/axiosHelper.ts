import axios from "axios";
import user_secrets from "../data/IGDBauth.json";
import {
  fetchGameImageProps,
  fetchGameImagesProps,
  IBaseItem,
} from "../tier-components/TierCompProps";

export async function fetchGameImage({
  setIsLoading,
  gameSearchName,
  tiers,
  setTierList,
}: fetchGameImageProps) {
  setIsLoading(true);

  const fields: string = "cover.image_id";
  const limit: number = 1;
  const queryData: string = `search "${gameSearchName}"; fields ${fields}; limit ${limit};`;

  const response = await axios({
    url: "http://localhost:3001/api/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": user_secrets[0].apiKey,
      Authorization: user_secrets[0].token,
    },
    data: queryData,
  })
    .then((response) => {
      const imageId = response.data[0].cover.image_id;
      const imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
      console.log(imageURL);

      const updatedPool = [...tiers];
      updatedPool[5].items.push({ name: gameSearchName, image: imageURL });
      setTierList(updatedPool);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}

export async function fetchGameImages({
  setIsLoading,
  gameSearchName,
  searchList,
  setSearchList,
}: fetchGameImagesProps) {
  setIsLoading(true);

  const fields: string = "name,cover.image_id, summary";
  const limit: number = 10;
  const queryData: string = `search "${gameSearchName}"; fields ${fields}; limit ${limit};`;

  const response = await axios({
    url: "http://localhost:3001/api/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": user_secrets[0].apiKey,
      Authorization: user_secrets[0].token,
    },
    data: queryData,
  })
    .then((response) => {
      const arrayOfItems: IBaseItem[] = response.data.map(
        (item: any, index: number) => {
          let obj = {
            index: index,
            name: item.name,
            image: `https://images.igdb.com/igdb/image/upload/t_cover_big/${item.cover?.image_id}.jpg`,
            summary: item.summary,
          };
          return obj;
        }
      );

      setSearchList(arrayOfItems);
      console.log(arrayOfItems);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
