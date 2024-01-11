<script setup>
import { ref } from "vue";

const radio = ref("1");
const checkbox = ref(["1"]);
</script>

<template>
  <el-card style="margin: 30px 0">
    <h1>Hello, Element Plus!</h1>
    <el-row>
      <el-col :span="12">
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="info">Info</el-button>
      </el-col>
      <el-col :span="12">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain> Primary</el-button>
        <el-button type="success" plain> Success</el-button>
        <el-button type="warning" plain> Warning</el-button>
        <el-button type="danger" plain> Danger</el-button>
        <el-button type="info" plain> Info</el-button>
      </el-col>
    </el-row>
    <el-row style="margin: 20px 0">
      <el-col :span="12">
        <el-alert title="成功提示的文案" type="success" />
        <el-alert title="消息提示的文案" type="info" />
        <el-alert title="警告提示的文案" type="warning" />
        <el-alert title="错误提示的文案" type="error" />
      </el-col>
      <el-col :span="12">
        <el-alert title="成功提示的文案" type="success" show-icon />
        <el-alert title="消息提示的文案" type="info" show-icon />
        <el-alert title="警告提示的文案" type="warning" show-icon />
        <el-alert title="错误提示的文案" type="error" show-icon />
      </el-col>
    </el-row>
    <el-row style="margin: 20px 0">
      <el-col :span="12">
        <el-input placeholder="请输入内容" />
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入内容" type="textarea" />
      </el-col>
    </el-row>
    <el-row style="margin: 20px 0">
      <el-col :span="12">
        <el-radio-group v-model="radio">
          <el-radio label="1">备选项</el-radio>
          <el-radio label="2">备选项</el-radio>
        </el-radio-group>
        <el-card>
          <template #header>
            <div>卡片名称</div>
          </template>
          <p>卡片内容</p>
          <template #footer>
            <el-button type="primary">按钮</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-checkbox-group v-model="checkbox">
          <el-checkbox label="1">备选项 1</el-checkbox>
          <el-checkbox label="2">备选项 2</el-checkbox>
          <el-checkbox label="2">备选项 3</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
  </el-card>
</template>
