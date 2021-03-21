<main>
	<h1>Todo</h1>
	<TaskInput on:save={onSave}/>

	<h1>Backlog</h1>
	<BacklogTasks {backlogTasks} on:done={onDone}/>

	<h1>Done</h1>
	<DoneTasks {doneTasks}/>
</main>

<script>
	import TaskInput from './TaskInput.svelte';
	import BacklogTasks from './BacklogTasks.svelte';
	import DoneTasks from './DoneTasks.svelte';

	let tasks = []
	$: backlogTasks = tasks.filter( task => task.status == 'backlog');
	$: doneTasks = tasks.filter( task => task.status == 'done');

	const onSave = (event) => {
		let task = {
			id: tasks.length + 1,
			name: event.detail.name,
			status: 'backlog'
		}

		tasks = [...tasks, task]
	}

	const onDone = (event) => {
		let index = tasks.findIndex( task => task.id === event.detail.id);
		tasks[index].status = 'done';
	}
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