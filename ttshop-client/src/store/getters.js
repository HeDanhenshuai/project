/*
* 基于state的getter计算属性的对象*/
export default {
  totalCount(state){
    return state.cartFoods.reduce((preTotal,food)=>{
      return preTotal+food.count
    },0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((preTotal,food)=>{
      return preTotal+food.count*food.price
    },0)
  },
  positiveSize(state){
    return state.ratings.reduce((total,rating)=>{
      return total+(rating.rateType===0?1:0)
    },0)
  }
}
