import { onUnmounted, type Ref, unref, watch } from 'vue';
import echarts from './importEchart';
import type { EChartsOption } from 'echarts';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import { RenderType, ThemeType } from './echart-type';

export default function useECharts(
  elparams: Ref<HTMLElement> | Ref<undefined>,
  autoUpdateSize: boolean = false,
  render: RenderType = RenderType.SVGRenderer,
  theme = ThemeType.Default
) {
  // 渲染模式
  echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer);

  // echats实例
  let echartsInstance: echarts.ECharts | null = null;

  // 初始化 echats实例
  function initCharts() {
    const el = unref(elparams);
    if (!el) return;
    echartsInstance = echarts.init(el, theme);
  }

  // 配置
  function setOptions(option: EChartsOption) {
    if (!unref(elparams)) return console.warn('请传入正确的容器！');
    showLoading();
    if (!echartsInstance) initCharts();
    if (!echartsInstance) return;
    echartsInstance.setOption(option);
    hideLoading();
  }

  // 获取 echats实例
  function getInstance() {
    if (!echartsInstance) initCharts();
    return echartsInstance;
  }

  // 更新大小
  function onResize() {
    echartsInstance?.resize();
  }

  // 监听元素大小变化
  function watchEl() {
    unref(elparams)!.style.transition = 'width 1s, height 1s';
    const resizeObserve = new ResizeObserver(() => onResize());
    resizeObserve.observe(unref(elparams) as HTMLElement);
  }

  // 显示加载状态
  function showLoading() {
    if (!echartsInstance) initCharts();

    echartsInstance?.showLoading();
  }

  // 隐藏加载状态
  function hideLoading() {
    if (!echartsInstance) initCharts();
    echartsInstance?.hideLoading();
  }
  watch(elparams, (nv) => {
    if (nv) {
      //   window.addEventListener('resize', onResize);
      if (autoUpdateSize) watchEl();
    }
  });

  // 生命钩子——页面销毁
  onUnmounted(() => {
    // window.removeEventListener('resize', onResize);
  });

  return { setOptions, getInstance };
}
