export const houseColumns = [
  {
    title: "编号",
    dataIndex: "_id",
  },
  {
    title: "城市",
    dataIndex: "city",
  },
  {
    title: "小区",
    dataIndex: "neighborhood",
  },
  {
    title: "楼层",
    dataIndex: "floor",
  },
  {
    title: "厅室",
    dataIndex: "floor_plan_room",
  },
  {
    title: "面积",
    dataIndex: "area",
  },
  {
    title: "朝向",
    dataIndex: "facing",
  },
  {
    title: "actions",
    dataIndex: "actions",
    slots: {
      customRender: "actions"
    }
  }
]