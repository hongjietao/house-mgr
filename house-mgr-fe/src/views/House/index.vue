<template>
  <div>
    <a-card
      :title="simple ? '最近添加的房源' : '' "
    >
      <div v-if="!simple">
        <h2>房源列表</h2>
        <space-between>
          <div class="search">
            <a-input-search
              placeholder="根据小区搜索"
              enter-button
              v-model:value="keyword"
              @search="onSearch"
            />
            <a v-if="isSearch" @click="backALl">返回</a>
          </div>
          <a-button @click="show = true">添加房源</a-button>
        </space-between>
        <a-divider/>
      </div>
      <a-table
        bordered
        :columns="houseColumns"
        :data-source="houseList"
        rowKey="_id"
        :pagination="false"
        :scroll="{x: 'max-content'}"
      >
        <template #actions="{record}">
          <a type="link" @click="toDetail(record)">详情</a>
          &nbsp;
          <a type="link" @click="update(record)">编辑</a>
          &nbsp;
          <a type="link" @click="remove(record)">删除</a>
        </template>
        <template #type="{record}">
          {{+record.type ?'出售' : '出租'}}
        </template>
        <template #price="{record}">
          {{record.price+(+record.type ?'万' : '元/月')}}
        </template>
        <template #verify="{record}">
          {{verifyResult(record.verify)}}
        </template>
      </a-table>
      <flex-end style="margin-top: 24px" v-if="!simple">
        <a-pagination
          v-model:current="curPage"
          :total="total"
          :page-size="20"
          @change="setPage"
        ></a-pagination>
      </flex-end>
    </a-card>
    <add-one
      v-model:show="show"
    />
    <update
      v-model:show="showUpdateModel"
      :house="curEditHouse"
      @update="updateCurHouse"
    />
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
