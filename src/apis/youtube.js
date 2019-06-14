import axios from 'axios';

const KEY = "AIzaSyCGA_L5b-_2ExX5OMyy-TH8M7olyzFQfvU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
