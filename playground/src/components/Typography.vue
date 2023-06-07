<template>
  <h2 class="text-h2 mb-12">Typography</h2>
  <div class="d-flex justify-space-between">
    <div>
      <div
        v-for="i in 6"
        :key="i"
        class="mb-6"
      >
        <div :class="`text-h${i}`">Heading {{ i }}</div>
      </div>
    </div>
    <div>
      <div
        v-for="i in 2"
        :key="i"
        class="mb-6"
      >
        <div :class="`text-subtitle-${i}`">Subtitle {{ i }}</div>
        <div :class="`text-subtitle-${i}-strong`">Subtitle {{ i }} Strong</div>
      </div>
      <div
        v-for="i in 2"
        :key="i"
        class="mb-6"
      >
        <div :class="`text-body-${i}`">Body {{ i }}</div>
        <div :class="`text-body-${i}-strong`">Body {{ i }} Strong</div>
      </div>
      <div class="text-button mb-6">Button</div>
      <div class="text-caption mb-6">Caption</div>
      <div class="text-overline mb-6">Overline</div>
    </div>
  </div>
</template>
