export const houseColumns = [
  // {
  //   title: "编号",
  //   // 自动省略
  //   // ellipsis: true,
  //   dataIndex: "_id",
  // },
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
    title: "类型",
    slots: {
      customRender: "type"
    }
  },
  {
    title: "价格",
    slots: {
      customRender: "price"
    }
  },
  {
    title: "状态",
    slots: {
      customRender: "verify"
    }
  },
  {
    title: "录入人员",
    dataIndex: "creater",
  },
  // {
  //   title: "actions",
  //   // 定宽
  //   // width: 90,
  //   dataIndex: "actions",
  //   slots: {
  //     customRender: "actions"
  //   }
  // },
]
