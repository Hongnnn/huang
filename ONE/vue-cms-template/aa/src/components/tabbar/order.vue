<template>
  <div>
    <mt-header fixed title="我的订单"></mt-header>
    <div class="nav-title">
      <mt-navbar v-model="selected">
        <mt-tab-item id="2">已放置</mt-tab-item>
        <mt-tab-item id="0">未放置</mt-tab-item>
        <mt-tab-item id="1">已接单</mt-tab-item>
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
              <li v-for="(item,index) in newArr " :key="index" @click="detail(item.orderId)">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderId}}
                    <span>已接单</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.orderList">
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
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="(item,index) in newArr" :key="index">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderId}}
                    <span>已放置</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.orderList">
                    <div class="order-content" @click="detail(item.orderId)">
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
                  <button  @click="detail(item.orderId)">查看详情</button>
                  <button @click="deleteBtn(item.orderId)">取消订单</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="item in newArr">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderId}}
                    <span>已回收</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.orderList">
                    <div class="order-content"  @click="detail(item.orderId)">
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
                  <button @click="detail(item.orderId)">查看详情</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="item in newArr">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderId}}
                    <span>已取消</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.orderList">
                    <div class="order-content"  @click="detail(item.orderId)">
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
                  <button  @click="detail(item.orderId)">查看详情</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="0">
        <div class="order">
          <div class="order-list">
            <ul>
              <li v-for="item in newArr">
                <div class="order-header">
                  <p>
                    订单编号:{{item.orderId}}
                    <span>未放置</span>
                  </p>
                </div>
                <ul>
                  <li v-for="good in item.orderList">
                    <div class="order-content"  @click="detail(item.orderId)">
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
                  <button @click="detail(item.orderId)" >查看详情</button>
                  <button @click="confirmBtn((item.orderId))">确定放置</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
    </mt-tab-container>

    <Modal :show="show" @hideModal="hideModal" @submit="submit">
      <p class="delet">是否确认取消</p>
    </Modal>
    <Modal :show="confirm" @hideModal="hideModal" @submit="setsubmit">
      <p class="delet">是否确认放置</p>
    </Modal>
  </div>
</template>

<script>
import "../../lib/mui/css/order.scss";
import Modal from "../order/modal.vue";
export default {
  name: "nav-title",
  data() {
    return {
      show: false,
      confirm: false,
      selected: "2",
      orderist: [],
      notOrder: false,
      list: [
        {
          orderid: "111",
          orderllist: [
            {
              name: "书本",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ]
        },
        {
          id: "1221",
          olist: [
            {
              name: "书本",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ]
        },
        {
          orderid: "1221",
          orderlist: [
            {
              name: "书本",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            },
            {
              name: "报纸",
              price: "5",
              icon:
                "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
              count: "1"
            }
          ]
        }
      ],
      aa: [],
      newArr: [],

      id: "",
      score: ""
    };
  },
created(){
  this.selected()
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
        this.notOrder=false
        this.$axios
          .get(url)
          .then(response => {
            this.newArr = [];
            //  const data =JSON.parse(response.data.data)
            this.newobj = response.data.data;
            console.log(this.newobj);
            this.score = response.data.data;
            if (this.newobj.length == 0) {
              this.notOrder = true;
            } else {
              let id = 0;
              if (!this.newobj) {
                return;
              }

              this.newobj.forEach((v, i) => {
                id = v[0].orderid;

                // console.log('id值',this.newobj[i]);
                const orderList = [];
                v.forEach(v => {
                  orderList.push({
                    name: v.name,
                    price: v.price,
                    icon: v.icon,
                    count: v.count
                  });
                });
                this.newArr.push({
                  orderId: id,
                  orderList: orderList
                });
              });
            }

            console.log(this.newArr);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  methods: {
    confirmBtn(e) {
      this.confirm = true;
      this.id = e;
    },
    setsubmit() {
       this.$axios
        .post("http://106.15.136.244:8080/order/confirm", {
          orderid: this.id
        })
        .then(res => {
          if ((res.data.flag = true)) {
            alert("放置成功");
            this.confirm= false;
          } else {
            alert("放置失败");
          }
        })
        .catch(err => {
          console.log(err);
        });

    },
    detail(data) {
      this.$router.push({
        path: "/orderdetail",
        query: { userid: data }
      });
    },
    deleteBtn(e) {
      this.show = true;
      this.id = e;
    },
    hideModal() {
      // 取消弹窗回调
      this.show = false;
      this.confirm =false
    },

    submit() {
      // 确认弹窗回调
      //  let url=`106.15.136.244:8080/order/cancel`
      this.$axios
        .post("http://106.15.136.244:8080/order/cancel", {
          orderid: this.id
        })
        .then(res => {
          if ((res.data.flag = true)) {
            alert("取消订单成功");
            this.show = false;
          } else {
            alert("取消订单失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  components: {
    Modal
  }
};
</script>
<style lang="scss" scoped>
</style>
