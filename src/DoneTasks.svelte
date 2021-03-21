<div>
  <ul>
    {#each doneTasks as task(task.id)}
      <li class="done-tasks">{task.name}</li>
    {/each}  
  </ul>
</div>

<script>
  export let doneTasks = [];
</script>

<style>
  ul {
    list-style: none;
  }

  .done-tasks{
    text-decoration: line-through;
  }
</style>