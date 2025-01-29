import create from "zustand";

export const useUserStore= create((set,get)=>({
user:null,
loding:flase,
checkAuth:true,



signup:async({name,email,password,confirmpassword})=>{
set:{loading:true}
}

})