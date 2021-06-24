import axios from "axios";

export default {
    getList: function() {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=the&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0');
    }
  };