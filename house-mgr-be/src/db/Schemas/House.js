const mongoose = require('mongoose')
const { getMeta, preSave } = require('../helpers')

const HouseSchema = new mongoose.Schema({
  city: String, //城市
  neighborhood: String, //小区
  floor: String, //楼层
  floor_plan_room: String, //厅室
  area: Number, //面积
  facing: String, //朝向
  type: Number, // 类型： 0: 出租，1: 销售
  price: Number, // 价格： 0: price 元/月,1:price 万元
  verify: Number, // 审核结果 0: 待审核， 1: 审核通过， 2： 审核不通过
  creater: String, // 创建人
  meta: getMeta()
})

HouseSchema.pre('save', preSave);

mongoose.model('House', HouseSchema)