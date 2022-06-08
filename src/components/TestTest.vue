<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <transition-group name="fade" tag="div">
      <div></div>
    </transition-group>
  </div>
</template>
