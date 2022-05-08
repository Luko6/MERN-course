import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Big Ben",
    description: "Is big.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMqsyv6A0H-Jdsj0MUrxx4zzsrLFbIQt5tkLBnx=w408-h725-k-no",
    address: "67 Bridge St, London SW1A 2PW, UK",
    location: {
      lat: 51.5011077,
      lon: -0.1248925,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Big Ben",
    description: "Is big.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMqsyv6A0H-Jdsj0MUrxx4zzsrLFbIQt5tkLBnx=w408-h725-k-no",
    address: "67 Bridge St, London SW1A 2PW, UK",
    location: {
      lat: 51.5011077,
      lon: -0.1248925,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
