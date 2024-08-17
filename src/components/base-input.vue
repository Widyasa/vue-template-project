<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' : [String, Number],
  'customClass': [String],
  'readOnly' : Boolean,
  'required' : Boolean
})
function preventScrollChange(event:any) {
  event.preventDefault();
}
</script>

<template>
  <div class="d-flex gap-1 flex-column">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <input step="any" @wheel="preventScrollChange" :required="props.required" :readonly="props.readOnly" :class="props.customClass" :name="props.inputName" :type="props.inputType" class="form-control" :placeholder="props.inputPlaceholder" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style scoped>

</style>