<script setup>
import { onMounted, ref } from "vue";
import { utils, writeFileXLSX } from "xlsx";

import data from "./zyry.json";

// prettier-ignore
const fields = {
  "员工编号（必填）": "id",
  "姓名（必填）": "title",
  "手机号（必填）": "tel",
  "邮箱": "email",
  "部门": null,
  "职位": "zhiwei",
  "角色": null,
  "律所头衔": null,
  "业务简介": "jianjie",
  "专业领域": "zhuanye",
  "个人简介": "content",
  "教育背景": null,
  "工作经历": null,
  "社会职务": null,
  "荣誉与评价": null,
  "主要客户或典型案例": null,
  "主要著述": null,
  "立法经验": null,
  "头像地址": 'pic_url',
  "个人简介（JSON）": null,
};

const dataContainer = ref({
  isLoading: true,
  list: [],
});

const loadData = async () => {
  dataContainer.value.list = data.data
    .sort((a, b) => Number(a.id) - Number(b.id))
    .map((item) => {
      const newItem = {};
      Object.keys(fields).forEach((key) => {
        newItem[key] = item[fields[key]];
        if (Array.isArray(newItem[key])) {
          newItem[key] = newItem[key].join(", ");
        }
      });
      return newItem;
    });
};

loadData();

const exportToExcel = () => {
  const ws = utils.json_to_sheet(dataContainer.value.list);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "SheetJS");
  writeFileXLSX(wb, "SheetJS.xlsx");
};

const divRef = ref(null);

function splitDOMByElements(contentInHtml) {
  divRef.value.innerHTML = contentInHtml;
  const headings = [...divRef.value.querySelectorAll('p > span[style*="18px"]')]
    .filter((el) => el.textContent.trim())
    .map((el) => el.parentElement);
  let result = [];

  headings.forEach((heading, index) => {
    let content = "";
    let nextElement = heading.nextElementSibling;

    while (nextElement) {
      if (headings.includes(nextElement)) {
        break;
      }

      content += nextElement.outerHTML;
      nextElement = nextElement.nextElementSibling;
    }

    result.push({
      title: heading.outerHTML,
      content: content,
    });
  });

  return result;
}

onMounted(() => {
  dataContainer.value.list.forEach((item, idx) => {
    const results = splitDOMByElements(item["个人简介"]);

    dataContainer.value.list[idx]["个人简介（JSON）"] = JSON.stringify(
      results,
      null,
      2,
    );
  });
});
</script>

<template>
  <div>
    <el-button type="primary" @click="exportToExcel">Export to Excel</el-button>
  </div>

  <div ref="divRef"></div>

  <el-table
    :data="dataContainer.list"
    height="900"
    style="width: 100%"
    border
    stripe
  >
    <el-table-column
      v-for="label in Object.keys(fields)"
      :prop="label"
      :label="label"
      v-slot="{ row, column }"
    >
      <div style="max-height: 100px">
        {{ row[label] }}
      </div>
    </el-table-column>
  </el-table>
</template>
