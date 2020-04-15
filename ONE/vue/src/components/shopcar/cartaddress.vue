<template>
  <div class="location-container">
    <div class="location-title-content">
      <h3 class="location-title">选择地区</h3>
      <button class="btn-confirm" @click="chooseConfirm">确定</button>
    </div>
    <mt-picker :slots="myAddressSlots" @change="onAddressChange"></mt-picker>
  </div>
</template>
 
<script>
  // 引入省市区数据
  import {cityList, districtList, listAddress, privinceList} from '../../../addresss.js'
 
  export default {
  name: 'cartaddress',
  props:{
    'provinceData':{
      type: String
    },
    'cityData':{
      type: String
    },
    'districtData':{
      type: String
    }
  },
  data () {
    return {
     
 
      provinceIndex:0,
      cityIndex:0,
      districtIndex:0,
       
 
 
      myprivinceList: [], // 省的数组
      mycityList: [], // 省对应城市的数组
      mydistrictList: [], // 区或者县的数组
      areapicker: '',
      myAddressSlots: [
        {
          flex: 1,
          values: privinceList, // 省份数组
          value:this.provinceData,
          defaultIndex: this.provinceIndex,
          className: 'slot1',
          textAlign: 'center'
        },
        {
          pider: true,
          content: '-',
          className: 'slot2'
 
        },
        {
          flex: 1,
          values: cityList, // 城市数组
          value:this.cityData,
          defaultIndex: this.cityIndex,
          className: 'slot3',
          textAlign: 'center'
        },
        {
          pider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: districtList, // 区数组
          value:this.districtData,
          defaultIndex: this.districtIndex,
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      myAddressPrivince: '', // 最后选中的省或直辖市
      myAddressCity: '', // 最后选中的城市
      myAddressDistrict: '', // 最后选中的区或者县
 
      defaultCity:[],
    }
  },
  watch: {
    myAddressPrivince (oldval, newval) { // 省数据变化后，更新市的显示数据
      this.areapicker.setSlotValues(2, this.mycityList)
      this.areapicker.setSlotValue(2, this.mycityList[0])
    },
    myAddressCity (oldval, newval) { // 城市的值改变后，重置区县的数据
      this.areapicker.setSlotValues(4, this.mydistrictList)
      this.areapicker.setSlotValue(4, this.mydistrictList[0])
    },
    myAddressDistrict (oldval, newval) {
    }
  },
  methods: {
    onAddressChange: function (picker, values) {
      this.areapicker = picker
      this.mycityList = []
      this.mydistrictList = []
      var chooseList = listAddress.filter(function (item) {
        return item.name == values[0]
      })
      if (chooseList[0].city) {
        for (var item of chooseList[0].city) {
          this.mycityList.push(item.name)
        }
        // 获取非直辖市数据
        if (chooseList[0].city.length > 1) {
          var choosedisList = []
          if (this.mycityList.indexOf(values[2]) > -1 && values[2] != '其他') {
            choosedisList = chooseList[0].city.filter(function (item) {
              return item.name == values[2]
            })
            for (var item of choosedisList[0].area) {
              this.mydistrictList.push(item)
            }
          } else {
            this.mydistrictList = []
          }
        }
        // 获取直辖市数据
        else {
          for (var item of chooseList[0].city[0].area) {
            this.mydistrictList.push(item)
          }
        }
      }
      this.myAddressPrivince = values[0]
      this.myAddressCity = values[2]
      this.myAddressDistrict = values[4]
    },
    chooseConfirm: function () {
      this.$emit('getChooseAddress', this.fullCity, false)
    },
 
 
    //编辑地址时，获取已选地址的省的下标
    getProvinceIndex(){
      for(let i=0;i < privinceList.length;i++){
        if(privinceList[i]===this.provinceData){
          this.provinceIndex = i
          break
        }
      }
 
    },
    //编辑地址时，获取已选地址的市的下标
    getCityIndex(){
      let cityDataList = listAddress[this.provinceIndex].city
      for(let i=0;i < cityDataList.length;i++){
        this.defaultCity.push(cityDataList[i].name)
        if(cityDataList[i].name === this.cityData){
          this.cityIndex = i
          //break
        }
      }
    },
    //编辑地址时，获取已选地址的区的下标
    getDistrictIndex(){
      let districtDataList = listAddress[this.provinceIndex].city[this.cityIndex].area
      for(let i=0;i < districtDataList.length;i++){
        if(districtDataList[i] === this.districtData){
          this.districtIndex = i
          break
        }
      }
    }
 
  },
  created(){
    this.getProvinceIndex()
    this.getCityIndex()
    this.getDistrictIndex()
  },
  mounted () {
  	//编辑时，默认选中已选的地址
    this.$nextTick(() => { // vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = this.provinceIndex
 
      this.myAddressSlots[2].values = this.defaultCity
      this.myAddressSlots[2].defaultIndex = this.cityIndex
 
      this.myAddressSlots[4].values = listAddress[this.provinceIndex].city[this.cityIndex].area
      this.myAddressSlots[4].defaultIndex = this.districtIndex
    })
 
  },
  computed: {
    fullCity: function () {
    
      return this.myAddressPrivince + '-' + this.myAddressCity + '-' + this.myAddressDistrict
    }
  }
}
</script>
 
<style scoped lang="scss">
  
  .location-container{
    width:100%;
    height:6rem;
    bottom:0px;
    background: #FFFFFF;
    box-shadow: 0 3px 10px 0 rgba(27,27,78,0.08);
    border-radius: 10px 10px 0px 0px;
    .location-title-content{
      position: relative;
      .location-title{
        font-size: 0.4rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 0.3rem;
      }
      .btn-confirm{
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        border: none;
        background: gold;
        color: #fff;
        line-height: 0.6rem;
        font-size: 0.4rem;
        border-radius: 0.1rem;
      }
    }
  }
 
</style>