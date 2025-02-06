import create from "zustand";

export const useUserStore= create((set,get)=>({
user:null,
loding:false,
checkAuth:true,



signup:async({name,email,password,confirmpassword})=>{
set:{loading:true}
}
if(passsword!===confirmpassword){
   set({loading:false}) 
}return toast.error("passwords doesnot mach")
})