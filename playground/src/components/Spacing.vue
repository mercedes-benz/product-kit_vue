<template>
  <h2 class="text-h2 mb-12">Buttons</h2>
  <div>
    <div
      v-for="i in 10"
      :key="i"
      class="bg-primary mb-xl"
    >
      hello
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  /* background-color: blue; */
  background-color: var(--v-theme-primary);
}

.ma-xl {
}
</style>
