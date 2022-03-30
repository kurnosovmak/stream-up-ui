<template>
  <div class="stream-block">
    <div :style="{backgroundImage:'url(https://i.postimg.cc/59RPbrw7/image.png)'}" class="stream-block__header">
      <div class="stream-block__header__top">
        <div style="display: inline-block;">
          <div class="stream-block__header__top__counter-block">
            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.9092 6.26445C11.8117 6.12632 9.47169 2.91492 6.49998 2.91492C3.52826 2.91492 1.18826 6.12632 1.09076 6.26445C1.04177 6.33325 1.01545 6.41561 1.01545 6.50007C1.01545 6.58453 1.04177 6.6669 1.09076 6.7357C1.18826 6.87382 3.52826 10.0852 6.49998 10.0852C9.47169 10.0852 11.8117 6.87382 11.9092 6.7357C11.9582 6.6669 11.9845 6.58453 11.9845 6.50007C11.9845 6.41561 11.9582 6.33325 11.9092 6.26445ZM1.93576 6.50007C2.31851 6.03101 2.74124 5.59605 3.1992 5.20007C2.86617 6.03475 2.86617 6.9654 3.1992 7.80007C2.74124 7.4041 2.31851 6.96914 1.93576 6.50007ZM6.49998 9.2382C5.95843 9.2382 5.42904 9.07761 4.97876 8.77674C4.52847 8.47587 4.17752 8.04824 3.97028 7.54791C3.76304 7.04758 3.70881 6.49704 3.81446 5.96589C3.92011 5.43475 4.1809 4.94686 4.56383 4.56393C4.94676 4.18099 5.43465 3.92021 5.96579 3.81456C6.49694 3.70891 7.04748 3.76313 7.54781 3.97038C8.04814 4.17762 8.47578 4.52857 8.77664 4.97885C9.07751 5.42914 9.2381 5.95852 9.2381 6.50007C9.23703 7.22594 8.9482 7.92177 8.43494 8.43503C7.92167 8.9483 7.22584 9.23712 6.49998 9.2382ZM9.80076 7.80007C10.1338 6.9654 10.1338 6.03475 9.80076 5.20007C10.2587 5.59605 10.6814 6.03101 11.0642 6.50007C10.6814 6.96914 10.2587 7.4041 9.80076 7.80007ZM6.49998 5.56976C6.31598 5.56976 6.13611 5.62432 5.98312 5.72655C5.83013 5.82877 5.71089 5.97407 5.64048 6.14406C5.57007 6.31405 5.55164 6.50111 5.58754 6.68157C5.62344 6.86203 5.71204 7.0278 5.84215 7.1579C5.97225 7.28801 6.13802 7.37661 6.31848 7.41251C6.49894 7.44841 6.686 7.42998 6.85599 7.35957C7.02598 7.28916 7.17128 7.16992 7.2735 7.01693C7.37573 6.86394 7.43029 6.68407 7.43029 6.50007C7.43029 6.25334 7.33227 6.01671 7.15781 5.84224C6.98334 5.66778 6.74671 5.56976 6.49998 5.56976Z"
                  fill="white"/>
            </svg>
            <span>10.5 K</span>
          </div>
        </div>
      </div>
      <div class="stream-block__header__bottom">
        <span>Провожаем уходящее лето</span>
      </div>
    </div>

    <div class="stream-block__body">
      <div class="stream-block__body__content">
        <img class="stream-block__body__content__logo" src="https://i.postimg.cc/MTfZn4F6/image.png">
        <div class="stream-block__body__content__description">
          <span class="title">lexas</span>
          <div>
            <span class="tag">Экстрим</span>
            <span class="tag">Спорт</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">

@use '../../styles/global' as v;

.stream-block {
  @extend .shadow;
  height: 205px;
  display: flex;
  background-color: v.$background-color-white;
  border-radius: 10px;
  flex-direction: column;


  .stream-block__header {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 16/9;
    background-size: cover;
    display: flex;
    flex-direction: column;

    .stream-block__header__top {
      flex: 1;
      padding: 10px 15px 0 15px;

      .stream-block__header__top__counter-block {
        //display: inline-block;
        padding: 2px 12px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: linear-gradient(100.7deg, v.$primary-yellow 0%, v.$primary-orange 100%);
        border-radius: 10px;
      }

      span {
        @extend .small-text-bold;
        color: v.$font-color-white;
      }

      :first-child {
        margin-right: 5px;
      }
    }

    .stream-block__header__bottom {
      padding: 0 15px 10px 15px;
      flex: 1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
      display: flex;
      align-items: flex-end;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;

      span {
        @extend .medium-text-bold;
        color: v.$font-color-white;
      }
    }
  }


  .stream-block__body {
    padding: 10px 15px 10px 15px;
    .stream-block__body__content {
      display: flex;

      .stream-block__body__content__logo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .stream-block__body__content__description{
        display: flex;
        flex-direction: column;
        .title{
          @extend .medium-text-bold;
          color: v.$font-color-black;
        }
        .tag{
          @extend .header5;
          border: 1px solid v.$font-color-orange;
          border-radius: 10px;
          color: v.$font-color-orange;
          padding: 0 20px;

        }
        .tag:not(:first-child){
          margin-left: 5px;
        }
      }

    }
  }

}

</style>
