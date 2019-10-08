<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 00:01:50
 -->
<template>
  <div class="about-us-main">
    <ul class="abput-us-warp">
      <li>
        <img class="about-us-img" src="./img/banner1.png" alt="">
      </li>
      <li class="about-us-tips">
          公司拥有一支由高学历、高素质人才组成的创业团队，其领路人毕业于清华大学。作为国内首批从事电商行业的团队，见证了电商快速发展，积累了丰富的食品电商运营经验，形成了科学的管理体系。团队成员年轻而充满朝气，具有创新意识并勇于迎接挑战。具备良好的社会责任感，愿为改善中国食品安全现状，贡献一己之力。
      </li>
      <li class="about-us-footer">
        <img class="about-us-img" src="./img/footer.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'aboutUs',
    data () {
        return {};
    },
    methods: {
        changeLand (tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style land="scss">
  .about-us-img{
    width: 100%;
  }
  .about-us-footer{
    width: 86%;
    margin: 0 auto;
  }
  .about-us-tips{
    font-size: 26px;
    color: #333333;
    padding: 35px 50px 35px 61px;
    line-height: 46px;
  }
</style>
