<main>
	<h1>Todo</h1>
	<TaskInput/>

	<h1>Backlog</h1>
	<BacklogTasks/>
	
	<h1>Done</h1>
	<DoneTasks/>
</main>

<script>
	import TaskInput from './TaskInput.svelte';
	import BacklogTasks from './BacklogTasks.svelte'
	import DoneTasks from './DoneTasks.svelte'
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>