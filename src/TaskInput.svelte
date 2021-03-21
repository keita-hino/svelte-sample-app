<input class="input-field" bind:value={name} placeholder="入力してください" />
<button type="submit" class="sumit-button" on:click={onSave}>保存する</button>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  let name = '';

  const dispatch = createEventDispatcher();

  const onSave = () => {
    dispatch('save', {
      name: name
    });
    name = '';
  }
</script>

<style>
.input-field {
  margin-right: 5px;
  padding: 5px;
  border: 1px solid #e3e3e3;
}
.sumit-button {
  background: #ff3e00;
  border: #ff3e00;
  padding: 4px;
  color: white;
}
</style>