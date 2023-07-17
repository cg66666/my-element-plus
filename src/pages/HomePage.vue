<template>
  <div class="homeContainer">
    <div class="chartContainer">
      <div class="indexContainer">
        <div class="indexItem">
          <div class="dot" style="background-color: #5470c6" />
          <ISelect v-model="selectLeft" :options="options" />
        </div>
        <div class="indexItem">
          <div class="dot" style="background-color: #91cc75" />
          <ISelect v-model="selectRight" :options="options" />
        </div>
      </div>
      <div id="main" ref="mainDom" class="chart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import type { data } from '@/components/global/ISelect.vue';
import * as echarts from 'echarts';
type InitData = {
  name: string;
  data: number[];
};
enum indexStatus {
  HIGHER = '高于平均值',
  EQUAL = '持平平均值',
  LOWER = '低于平均值',
}
const selectLeft = ref('');
const selectRight = ref('');
const mainDom = ref<HTMLElement>();
const chartOption = ref<echarts.EChartsOption>();
const handleData = ref<data[]>([]);
let myChart: echarts.ECharts;
let initData: InitData[];
let indexList: string[];
let averageIndex: number[];
const handleDataFn = () => {
  chartOption.value = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: indexList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: initData.find((item: InitData) => {
          return item.name === selectLeft.value;
        })?.data,
        type: 'line',
        smooth: true,
      },
      {
        data: initData.find((item: InitData) => {
          return item.name === selectRight.value;
        })?.data,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        console.log(params);

        const text =
          params.data > averageIndex[params.dataIndex]
            ? indexStatus.HIGHER
            : params.data < averageIndex[params.dataIndex]
            ? indexStatus.LOWER
            : indexStatus.EQUAL;
        return `<div class="toolTipContainer"><div class="title" style="color: ${params.color}">${params.name}</div><div class="num">${params.data}</div><div>${text}</div></div>`;
      },
    },
  };
};

const options = computed(() =>
  handleData.value.filter((item: data) => {
    return ![selectLeft.value, selectRight.value].includes(item.label);
  })
);
watch(
  chartOption,
  (nv) => {
    myChart.setOption(nv as echarts.EChartsOption);
  },
  {
    deep: true,
  }
);
watch(
  selectLeft,
  () => {
    handleDataFn();
  },
  { deep: true }
);
watch(
  selectRight,
  () => {
    handleDataFn();
  },
  { deep: true }
);

onMounted(() => {
  averageIndex = [999, 999, 999, 999, 999, 999, 999];
  indexList = ['点击率', '播放率', '回播率', '分享率', '评论率', '点赞率', '收藏率'];
  initData = [
    {
      name: '美团',
      data: [520, 932, 901, 888, 990, 1330, 1520],
    },
    {
      name: '抖音',
      data: [853, 1373, 1101, 940, 1230, 1210, 933],
    },
    {
      name: '腾讯',
      data: [653, 1234, 653, 864, 243, 231, 1222],
    },
    {
      name: '微博',
      data: [1543, 234, 111, 222, 644, 214, 1444],
    },
    {
      name: '快手',
      data: [666, 1323, 987, 777, 233, 1664, 344],
    },
    {
      name: 'b站',
      data: [2323, 1373, 1101, 940, 1230, 1210, 933],
    },
    {
      name: '百度贴吧',
      data: [111, 452, 1331, 223, 233, 1510, 111],
    },
  ];
  if (initData && initData.length) {
    selectLeft.value = initData[0].name;
    selectRight.value = initData[1].name;
    handleData.value = initData.map((item: InitData) => {
      return { label: item.name, value: item.name };
    });
  }
  if (mainDom.value) {
    myChart = echarts.init(mainDom.value);
    handleDataFn();
  }
});
</script>
<style lang="scss">
.homeContainer {
  .toolTipContainer {
    width: 100px;
    height: 60px;
    .title {
      font-size: 18px;
      font-weight: 900;
    }
    .num {
      color: black;
      font-weight: 900;
    }
  }
}
</style>
<style lang="scss" scoped>
.chartContainer {
  position: relative;
  overflow: hidden;
  .indexContainer {
    display: flex;
    width: 300px;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    .indexItem {
      display: flex;
      .dot {
        width: 15px;
        height: 15px;
        border-radius: 3px;
        position: relative;
        top: 7px;
      }
    }
  }
  .chart {
    margin-top: 80px;
    width: 100%;
    height: 600px;
  }
}
</style>
