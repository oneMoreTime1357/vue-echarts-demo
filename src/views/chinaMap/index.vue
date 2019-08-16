<template>
  <div class="container">
    <chart :options="chainaOptions"></chart>
  </div>
</template>

<script>
import { cityData, geoCoordMap } from './data'

export default {
  data () {
    return {
      chainaOptions: {}
    }
  },
  created() {
    this.chainaOptions = {
      backgroundColor: '#404a59',
      title: {
          text: '全国主要城市位置',
          // subtext: 'data from PM25.in',
          sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
              color: '#fff'
          }
      },
      tooltip : {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          y: 'bottom',
          x:'right',
          data:['pm2.5'],
          textStyle: {
              color: '#fff'
          }
      },
      geo: {
          map: 'china',
          label: {
              emphasis: {
                  show: false
              }
          },
          roam: true,
          itemStyle: {
              normal: {
                  areaColor: '#323c48',
                  borderColor: '#111'
              },
              emphasis: {
                  areaColor: '#2a333d'
              }
          }
      },
      series : [
          {
              name: 'pm2.3',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.convertData(cityData),
              encode: {
                  value: 2
              },
              symbolSize: function (val) {
                  return val[2] / 10;
              },
              label: {
                  normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#ddb926'
                  }
              }
          },
          {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.convertData(cityData.sort(function (a, b) {
                  return b.value - a.value;
              }).slice(0, 6)),
              encode: {
                  value: 2
              },
              symbolSize: function (val) {
                  return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                  normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: true
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#f4e925',
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              zlevel: 1
          }
      ]
}
  },
  methods: {
    convertData (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res;
}
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 600px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>

