<template>
  <div>
    <header>
      <div class="left">
        <div class="city" @click="city">
          <span>{{ this.$store.state.city }}</span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
        />
        </div>
      </div>
      <div class="title">
        <div>影院</div>
      </div>
      <div class="right">
        <div class="toCinemaSearch">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
            width="18px"
            height="18px"
        />
        </div>
      </div>
    </header>
    <div class="cinema-list-tag">
        <div class="content">
          <span>全城</span>
          <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          />
        </div>
        <div class="content">
          <span>APP订票</span>
          <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          />
        </div>
        <div class="content">
          <span>最近去过</span>
          <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          />
        </div>
    </div>
    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li
        class="cinema-list-item"
        v-for="(item, index) in list"
        :key="index"
        @click="cinemaDetail(item.cinemaId)"
        >
          <a href="javascript:;">
            <div class="text_left">
              <span class="name">{{ item.name }}</span>
              <span class="address">{{ item.address }}</span>
            </div>
            <div class="text_right">
              <div>
                <i class="icon">￥</i>
                <span class="pay">{{ item.lowPrice }}</span>
                <span class="paytext">起</span>
              </div>
              <span class="des">距离未知</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {cinemaListData} from '../../api/api'
export default {
    data(){
        return {
            list:[] 
        }
    },
    
    async mounted() {
        let ret = await cinemaListData();
        this.list = ret.data.data.cinemas;
        console.log(ret)
        // console.log(this.list.cinemaId);
    },
    methods:{
        city: function() {
          this.$router.push("/City");
        },
        cinemaDetail: function(cinemaId) {
          // console.log(cinemaId);
          this.$router.push({ name: "cinemaDetail", params:  {cinemaId}  });
        }
    },
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
header {
  display: flex;
  width: 100%;
  height: 44px;
  justify-content: space-between;
  align-items: center;
}
.left {
  margin-left: 15px;
  min-width: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.right {
  margin-right: 15px;
}
img {
  vertical-align: middle;
}
.title {
  margin-right: 35px;
}
.left img {
  margin-left: 3px;
}
.cinema-list-tag {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content {
  width: 33.3%;
  line-height: 49px;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
  text-align: center;
}
.content img {
  margin-left: 3px;
}
.cinema-list-wrap {
  margin-bottom: 50px;
}
.cinema-list-wrap .cinema-list .cinema-list-item {
  background-color: #fff;
  padding: 15px;
}
.text_left span {
  display: block;
  flex: 1;
}
.cinema-list-item a {
  display: flex;
  justify-content: space-between;
}
.address {
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name {
  color: #191a1b;
  font-size: 15px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon {
  font-size: 11px;
  color: #ff5f16;
}
.pay {
  font-size: 15px;
  color: #ff5f16;
}
.paytext {
  font-size: 10px;
  color: #ff5f16;
}
.des {
  font-weight: 400;
  margin-top: 5px;
  font-size: 11px;
  color: #797d82;
}
</style>
