<script setup>
import Checkboxes from './inputs/Checkboxes.vue';
import Comboboxes from './inputs/Comboboxes.vue';
import RadioGroup from './inputs/RadioGroup.vue';
import Sliders from './inputs/Sliders.vue';
import RangeSliders from './inputs/RangeSliders.vue';
import Selects from './inputs/Selects.vue';
import Switches from './inputs/Switches.vue';
import TextFields from './inputs/Textfields.vue';
import Textareas from './inputs/Textareas.vue';
import FileInputs from './inputs/FileInputs.vue';
import FormValidation from './inputs/FormValidation.vue';
</script>

<template>
  <div class="mb-8">
    <h2 class="text-h2 mb-12">Forms and Inputs</h2>
    <v-form>
      <checkboxes></checkboxes>
      <comboboxes></comboboxes>
      <radio-group></radio-group>
      <sliders></sliders>
      <range-sliders></range-sliders>
      <selects></selects>
      <file-inputs></file-inputs>
      <switches></switches>
      <text-fields></text-fields>
      <textareas></textareas>
      <form-validation></form-validation>
    </v-form>
  </div>
</template>
