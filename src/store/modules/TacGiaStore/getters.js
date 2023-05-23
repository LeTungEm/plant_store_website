import TacGiaService from "@/service/TacGiaService";

export const getters = {
    async getAllTacGia(){
        let respon = await TacGiaService.getAll();
        return respon.data;
    },

    logger(message){
        console.log(message, "hhh");
    }
}