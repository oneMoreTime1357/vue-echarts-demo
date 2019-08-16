import Vue from 'vue';
import Echarts from 'vue-echarts';

import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
// 中国地图
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/geo'
import 'echarts/map/js/china'

Vue.component('chart', Echarts);