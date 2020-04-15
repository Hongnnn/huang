<template>
  <div>
    <mt-header fixed title="我的订单"></mt-header>
    <div class="nav-title">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">已接单</mt-tab-item>
        <mt-tab-item id="2">未接单</mt-tab-item>
        <mt-tab-item id="3">已回收</mt-tab-item>
        <mt-tab-item id="4">已取消</mt-tab-item>
      </mt-navbar>
    </div>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="item in list">
                <div class="order-header">
                  <p>
                    订单编号:{{item.id}}
                    <span>已接单</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.olist">
                    <div class="order-content">
                      <div class="order-left">
                        <img :src="good.icon" alt />
                        <h5>{{good.name}}</h5>
                      </div>
                      <h5 class="order-count">数量：{{good.count}}</h5>
                      <h5>￥{{good.price}}</h5>
                    </div>
                  </li>
                </ul>

                <div class="order-footer">
                  <button>查看详情</button>
                  <button>取消订单</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="item in orderList">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderid}}
                    <span>未接单</span>
                  </p>
                </div>
                <div class="order-content">
                  <div class="order-left">
                    <img :src="item.icon" alt />
                    <h5>{{item.name}}</h5>
                  </div>
                  <h5 class="order-count">数量：{{item.count}}</h5>
                  <h5>￥{{item.price}}</h5>
                </div>
                <div class="order-footer">
                  <button>查看详情</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="order">
          <div class="order-list">
            <ul>
              <li>
                <div class="order-header">
                  <p>
                    订单编号:
                    <span>已回收</span>
                  </p>
                </div>
                <div class="order-content">
                  <div class="order-left">
                    <img src="../../style/img/aa.jpg" alt />
                    <h5>书本</h5>
                  </div>
                  <h5 class="order-count">数量：1</h5>
                  <h5>￥1</h5>
                </div>
                <div class="order-footer">
                  <button>查看柜号</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="order">
          <div class="order-list">
            <ul>
              <li>
                <div class="order-header">
                  <p>
                    订单编号:
                    <span>已取消</span>
                  </p>
                </div>
                <div class="order-content">
                  <div class="order-left">
                    <img src="../../style/img/aa.jpg" alt />
                    <h5>书本</h5>
                  </div>
                  <h5 class="order-count">数量：1</h5>
                  <h5>￥1</h5>
                </div>
                <div class="order-footer">
                  <button>查看柜号</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import "../../lib/mui/css/order.scss";
export default {
  name: "nav-title",
  data() {
    return {
      selected: "1",
      orderList: [],
      list: [
        {
          orderid: "111",
          orderllist: [
            {
              name: "书本",
              price: "5",
              icon: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ],
         
        },
          {
          id: "1221",
          olist: [
            {
              name: "书本",
              price: "5",
              icon: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ],
         
        },
         {
          orderid: "1221",
          orderlist: [
            {
              name: "书本",
              price: "5",
              icon: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ],
         
        }
        
      ]
    };
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      let a = localStorage.getItem("token");
      if (a == null || a == undefined) {
        this.$router.push({ path: "/login" });
      } else {
        let url = `http://106.15.136.244:8080/order/getOrderList?token=${a}&status=${val}`;
        console.log(url);
        this.$axios
          .get(url)
          .then(response => {
            this.orderList = response.data.data;
            console.log(this.orderList);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
