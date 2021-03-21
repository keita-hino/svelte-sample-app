<div>
  <ul>
    {#each backlogTasks as task(task.id)}
      <li>
        <input 
          type="checkbox" 
          class='checkbox-input' 
          on:click={onDone(task.id)}
        >{task.name}
      </li>  
    {/each}  
  </ul>
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  export let backlogTasks = [];

  const dispatch = createEventDispatcher();

  const onDone = (id) => {
    dispatch('done', {
      id: id
    });
  }
</script>

<style>
  ul {
    list-style: none;
  }
  .checkbox-input {
    margin-right: 8px;
    display: inline-flex;
  }
</style>