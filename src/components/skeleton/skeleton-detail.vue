<template>
  <div class="skeleton-container">
    <div class="skeleton-animation"></div>
    <div class="skeleton-item skeleton-item-1"></div>
    <div class="skeleton-item skeleton-item-2"></div>
    <div class="skeleton-container-2">
      <div class="skeleton-item-3">
        <div class="skeleton-item skeleton-item-4"></div>
        <div class="skeleton-item skeleton-item-5"></div>
      </div>
      <div class="skeleton-item-3">
        <div class="skeleton-item skeleton-item-4"></div>
        <div class="skeleton-item skeleton-item-5"></div>
      </div>
      <div class="skeleton-item-3">
        <div class="skeleton-item skeleton-item-4"></div>
        <div class="skeleton-item skeleton-item-5"></div>
      </div>
      <div class="skeleton-item-3">
        <div class="skeleton-item skeleton-item-4"></div>
        <div class="skeleton-item skeleton-item-5"></div>
      </div>
      <div class="skeleton-item-3">
        <div class="skeleton-item skeleton-item-4"></div>
        <div class="skeleton-item skeleton-item-5"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skeleton-container {
  padding: 10PX;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
}
.skeleton-item {
  background-color: #efefef;
}
.skeleton-item-1 {
  height: 32PX;
  border-radius: 18PX;
}
.skeleton-item-2 {
  height: 144PX;
  margin-top: 14PX;
  border-radius: 20PX 4PX 20PX 4PX;
}
.skeleton-container-2 {
  margin-top: 20PX;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skeleton-item-3 {
  flex-basis: 45PX;
}
.skeleton-item-4 {
  height: 45PX;
}
.skeleton-item-5 {
  margin-top: 7PX;
  height: 13PX;
}
</style>
