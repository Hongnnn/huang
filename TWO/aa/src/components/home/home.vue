<template>
    <div class="subject-main">
        <header>
            <!-- <span></span> -->
            <h2>美女抓涨停  </h2>
        </header>
        <div class="home">
            <div class="home-banner">
                <img :src="images" alt="">
            </div>
            <div class="home-list">
                <ul>
                    <li v-for="(item,index) in List" :key="index">
                        <router-link :to="item.jump_url">
                            <img :src="item.image_url" alt="">
                        </router-link>
                     </li>
                </ul>
            </div>
        </div>  
    </div>
</template>
<script>
import './home.scss'
export default {
    
}
</script>