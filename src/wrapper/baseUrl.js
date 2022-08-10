// initialise wrapper base url for Api integgrations

import axios from "axios";

export default axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
