import axios from'axios'
const BOOK_TRAIN_URL ='http://localhost:8080/book/book/add';
const USER_DETAIL = "http://localhost:8080/users/getAllUser";
class BookService{
    bookTrain(UserDetails){
        return axios.post(BOOK_TRAIN_URL ,UserDetails)
    }
    UserTrain(){
        return axios.get(USER_DETAIL)
    }
}
export default new BookService();