import axios from 'axios';
const postdata = (data)=>{
   let mobile = data.mobile ; 
   let password = data.password ; 
   let formData = new FormData();
   formData.append("mobile" , mobile);
   formData.append("password" , password);
    
    return new Promise((resolve , reject)=>{
        axios.post('http://localhost:808/delsto/manage/web/api/Login.php' , 
        formData
        )
        .then((responseJson)=>{
            resolve(responseJson.data)
        })
        .catch((err)=>reject(err));
    }) ; 

    
}
export default postdata;