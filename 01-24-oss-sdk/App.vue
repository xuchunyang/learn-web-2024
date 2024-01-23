<script setup>
import OSS from "ali-oss";
import { onMounted, ref } from "vue";
import { Delete, Upload } from "@element-plus/icons-vue";
import prettyBytes from "pretty-bytes";

const objects = ref([]);

console.log({ env: import.meta.env });

const client = new OSS({
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  // region: "oss-cn-shanghai",
  endpoint: "xuchunyang-oss.domain-4-testing.com",
  cname: true,
  secure: true,
  // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
  accessKeyId: import.meta.env.VITE_ALIYUN_ACCESS_KEY_ID,
  accessKeySecret: import.meta.env.VITE_ALIYUN_ACCESS_KEY_SECRET,
  // 填写Bucket名称。
  bucket: "xuchunyang",
});

const getFileList = async () => {
  const result = await client.list();
  console.log({ result });
  objects.value = result.objects;
};

onMounted(async () => {
  await getFileList();
});

const isImageUrl = (url) => {
  const reg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/;
  return reg.test(url);
};

const modal = ref({
  show: false,
  img: null,
});

const inputRef = ref(null);

const handleChange = async (event) => {
  const uploadPromises = [...event.target.files].map((file) => {
    return client.put(file.name, file);
  });

  // wait for all files to be uploaded
  await Promise.all(uploadPromises);
  await getFileList();
};

const handleDelete = async (row) => {
  console.log({ row });
  await client.delete(row.name);
  await getFileList();
};
</script>

<template>
  <ElDialog v-model="modal.show" title="图片预览">
    <template v-if="modal.img">
      <figure>
        <img :src="modal.img" alt="" />
      </figure>
    </template>
    <template v-else> 没有图片</template>
  </ElDialog>
  <div>
    <input
      ref="inputRef"
      type="file"
      style="display: none"
      multiple
      @change="handleChange"
    />
    <el-button :icon="Upload" type="primary" @click="inputRef.click()"
      >上传文件
    </el-button>
  </div>
  <template v-if="objects.length > 0">
    <el-table :data="objects">
      <el-table-column type="selection" width="50" />
      <template v-for="key in Object.keys(objects[0])">
        <el-table-column
          :prop="key"
          :label="key.toUpperCase()"
          v-slot="{ row }"
        >
          <template v-if="key === 'url' && isImageUrl(row[key])">
            <img
              class="table-image"
              :src="row[key]"
              alt=""
              @click="modal = { show: true, img: row[key] }"
            />
          </template>
          <template v-else-if="key === 'url' && row[key].endsWith('.mp3')">
            <audio :src="row[key]" controls></audio>
          </template>
          <template v-else-if="key === 'url' && row[key].endsWith('.mp4')">
            <video :src="row[key]" controls></video>
          </template>
          <template v-else-if="key === 'size'">
            {{ prettyBytes(row[key]) }}
          </template>
          <template v-else>
            {{ row[key] }}
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button
            type="danger"
            @click="handleDelete(row)"
            size="small"
            :icon="Delete"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
</template>

<style>
figure {
  overflow: auto;
}

img {
  max-width: 100%;
  max-height: 50vh;
  height: auto;
  object-fit: cover;
}

video {
  max-width: 100%;
  height: auto;
}

.table-image {
  max-height: 80px;
  width: auto;
}
</style>
